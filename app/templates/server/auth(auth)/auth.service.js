'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/environment');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var compose = require('composable-middleware');
var User = require('../models/user.model');
var errors = require('rest-api-errors');
var validateJwtRequired = expressJwt({
    secret: config.secrets.session,
    userProperty: 'token'
});
var validateJwtOptional = expressJwt({
    secret: config.secrets.session,
    userProperty: 'token',
    credentialsRequired: false
});
/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
function isAuthenticated(required) {
    return compose()
    // Validate jwt
        .use(function (req, res, next) {
            // allow access_token to be passed through query parameter as well
            if (req.query && req.query.hasOwnProperty('access_token')) {
                req.headers.authorization = 'Bearer ' + req.query.access_token;
            }
            if (required === false) {
                validateJwtOptional(req, res, next);
            } else {
                validateJwtRequired(req, res, next);
            }
        })
        // Attach user to request
        .use(function (req, res, next) {

            var token = req.token;
            // token should only evaluate to falsy if required was passed as false
            // otherwise an exception would have been thrown when validating the jwt token

            if(token) {
                User.findOne({
                    _id: token.id
                }).lean().then(setUser).catch(next);
            } else {
                next();
            }

            function setUser(user) {

                if (!user && required !== false) {
                    return res.sendStatus(401);
                }

                req.user = user;
                req.userId = user._id.toHexString ? user._id.toHexString() : user._id;
                next();
            }
        });
}

/**
 * Checks if the user role meets the minimum requirements of the route
 */
function hasRole(roleRequired) {
    if (!roleRequired) throw new Error('Required role needs to be set');

    return compose()
        .use(isAuthenticated())
        .use(function meetsRequirements(req, res, next) {
            if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
                next();
            }
            else {
                next(new errors.PermissionDeniedError())
            }
        });
}

/**
 * Returns a jwt token signed by the app secret
 */
function signToken(data, expiration) {


    return jwt.sign(data, config.secrets.session, {
        expiresIn: expiration || config.auth.expiration || '7d'
    });
}

/**
 * Set token cookie directly for oAuth strategies
 */
function setTokenCookie(req, res) {
    if (!req.user) return res.json(404, {message: 'Something went wrong, please try again.'});
    var token = signToken({
        _id: req.user._id,
        role: req.user.role
    });
    res.cookie('token', JSON.stringify(token));
    res.redirect('/');
}

exports.isAuthenticated = isAuthenticated;
exports.hasRole = hasRole;
exports.signToken = signToken;
exports.setTokenCookie = setTokenCookie;
