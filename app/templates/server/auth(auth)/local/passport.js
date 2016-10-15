var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.setup = function (User, config) {
    passport.use(new LocalStrategy({
            usernameField: 'id',
            passwordField: 'password' // this is the virtual field on the model
        },
        function (id, password, done) {
            User.findOne({
                $or: [
                    {email: id.toLowerCase()},
                    {username: id}
                ]
            }).then(user => {

                if (!user) {
                    return done(null, false, {message: 'This email is not registered.'});
                }

                if (!user.authenticate(password)) {
                    return done(null, false, {message: 'This password is not correct.'});
                }

                done(null, user);
            }).catch(done);
        }
    ));
};
