'use strict';

var User = require('../../models/user.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function (resp, err) {
    return resp.status(422).send(err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function (req, resp, next) {
    User.find({}, '-salt -hashedPassword', function (err, users) {
        if (err) return resp.send(500, err);
        resp.status(200).send(users);
    });
};

/**
 * Creates a new user
 */
exports.create = function (req, resp, next) {
    var newUser = new User(req.body);
    newUser.provider = 'local';
    newUser.role = 'user';
    newUser.save(function (err, user) {
        if (err) return validationError(resp, err);
        var token = jwt.sign({
                _id: user._id,
                role: user.role
            },
            config.secrets.session, {
                expiresIn:  config.auth.expiration || '7d'
            });
        resp.status(201).send({token: token});
    });
};

/**
 * Get a single user
 */
exports.show = function (req, resp, next) {
    var userId = req.params.id;

    User.findById(userId, function (err, user) {
        if (err) return next(err);
        if (!user) return resp.send(401);
        resp.status(200).send(user.profile);
    });
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function (req, resp, next) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return resp.send(500, err);
        return resp.status(204).end();
    });
};

/**
 * Change a users password
 */
exports.changePassword = function (req, resp, next) {
    var userId = req.user._id;
    var oldPass = String(req.body.oldPassword);
    var newPass = String(req.body.newPassword);

    User.findById(userId, function (err, user) {
        if (user.authenticate(oldPass)) {
            user.password = newPass;
            user.save(function (err) {
                if (err) return validationError(resp, err);
                resp.send(200);
            });
        } else {
            resp.send(403);
        }
    });
};

/**
 * Get my info
 */
exports.me = function (req, resp, next) {
    var userId = req.user._id;
    User.findOne({
        _id: userId
    }, '-salt -hashedPassword', function (err, user) { // don't ever give out the password or salt
        if (err) {
            return next(err);
        }

        if (!user) {
            return resp.status(401).end();
        }

        resp.status(200).send({
            name: user.name,
            provider: user.provider,
            type: user.type,
            roles: [].concat(user.role),
            social: {
                google: !!user.google,
                facebook: !!user.facebook,
                twitter: !!user.twitter,
                github: !!user.github
            },
            permissions: {
                sendEmail: true
            }
        });
    });
};

/**
 * Authentication callback
 */
exports.authCallback = function (req, resp, next) {
    resp.redirect('/');
};
