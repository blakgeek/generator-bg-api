'use strict';
var fs = require('fs');
var path = require('path');
var util = require('util');
var genUtils = require('../util.js');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var wiredep = require('wiredep');

var AngularFullstackGenerator = yeoman.generators.Base.extend({

    init: function () {
        this.argument('name', {type: String, required: false});
        this.appname = this.name || path.basename(process.cwd());
        this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));

        this.option('app-suffix', {
            desc: 'Allow a custom suffix to be added to the module name',
            type: String,
            required: 'false'
        });
        this.scriptAppName = this.appname + genUtils.appName(this);
        this.appPath = this.env.options.appPath;
        this.pkg = require('../package.json');

        this.filters = {};
    },

    info: function () {
        this.log(this.yeoman);
        this.log('Out of the box I create an AngularJS app with an Express server.\n');
    },

    checkForConfig: function () {
        var cb = this.async();

        if (this.config.get('filters')) {
            this.prompt([{
                type: "confirm",
                name: "skipConfig",
                message: "Existing .yo-rc configuration found, would you like to use it?",
                default: true,
            }], function (answers) {
                this.skipConfig = answers.skipConfig;

                // NOTE: temp(?) fix for #403
                if (typeof this.oauth === 'undefined') {
                    var strategies = Object.keys(this.filters).filter(function (key) {
                        return key.match(/Auth$/) && key;
                    });

                    if (strategies.length) this.config.set('oauth', true);
                }

                cb();
            }.bind(this));
        } else {
            cb();
        }
    },

    serverPrompts: function () {
        if (this.skipConfig) return;
        var cb = this.async();
        var self = this;

        this.log('\n# Server\n');

        this.prompt([{
            type: "confirm",
            name: "auth",
            message: "Would you scaffold out an authentication boilerplate?"
        }, {
            type: 'checkbox',
            name: 'oauth',
            message: 'Would you like to include additional oAuth strategies?',
            when: function (answers) {
                return answers.auth;
            },
            choices: [
                {
                    value: 'googleAuth',
                    name: 'Google',
                    checked: false
                },
                {
                    value: 'facebookAuth',
                    name: 'Facebook',
                    checked: false
                },
                {
                    value: 'twitterAuth',
                    name: 'Twitter',
                    checked: false
                }
            ]
        }, {
            type: "confirm",
            name: "socketio",
            message: "Would you like to use socket.io?",
            default: true
        }], function (answers) {
            this.filters.mongoose = true;
            if (answers.socketio) this.filters.socketio = true;
            if (answers.auth) this.filters.auth = true;
            if (answers.oauth) {
                if (answers.oauth.length) this.filters.oauth = true;
                answers.oauth.forEach(function (oauthStrategy) {
                    this.filters[oauthStrategy] = true;
                }.bind(this));
            }

            cb();
        }.bind(this));
    },

    saveSettings: function () {
        if (this.skipConfig) return;
        this.config.set('insertRoutes', true);
        this.config.set('registerRoutesFile', 'server/routes.js');
        this.config.set('routesNeedle', '// Insert routes below');

        this.config.set('routesBase', '/api/');
        this.config.set('pluralizeRoutes', true);

        this.config.set('insertSockets', true);
        this.config.set('registerSocketsFile', 'server/config/socketio.js');
        this.config.set('socketsNeedle', '// Insert sockets below');

        this.config.set('filters', this.filters);
        this.config.forceSave();
    },

    generate: function () {
        this.sourceRoot(path.join(__dirname, './templates'));
        genUtils.processDirectory(this, '.', '.');
    },

    end: function () {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    }
});

module.exports = AngularFullstackGenerator;
