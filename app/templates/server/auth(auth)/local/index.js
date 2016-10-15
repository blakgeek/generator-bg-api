'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');
var errors = require('rest-api-errors');

var router = express.Router();

router.post('/', function (req, resp, next) {
    passport.authenticate('local', function (err, user, info) {
        var error = err || info;
        if (error) {
            return next(new errors.Unauthorized());
        }
        if (!user) {
            return next(new errors.NotFoundError('access_error', 'Something went wrong, please try again.'));
        }

        var token = auth.signToken({
            id: user._id,
            role: user.role
        });
        resp.status(200).send({
            token: token
        });
    })(req, resp, next)
});

module.exports = router;
