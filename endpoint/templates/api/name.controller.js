'use strict';

var _ = require('lodash');
var <%= classedName %> = require('../../models/<%= name %>.model');
var errors = require('rest-api-errors');

// Get list of <%= name %>s
exports.getAll = function(req, resp, next) {
  <%= classedName %>.find().then(<%= name %>s => {
    resp.status(200).send(<%= name %>s);
  }).catch(next);
};

// Get a single <%= name %>
exports.get = function(req, resp, next) {
    <%= classedName %>.findById(req.params.id).then(<%= name %> => {

        if(!<%= name %>) {
            throw new errors.NotFound('<%= _.underscored(name) %>_not_found')
        }

        resp.status(200).send(<%= name %>);
  }).catch(next);
};

// Creates a new <%= name %> in the DB.
exports.create = function(req, resp, next) {
    <%= classedName %>.create(_.merge(req.body, {
        createdBy: req.user.username<% if(secured) { %>,
        sharedWith: [req.user.username]<% } %>
    })).then(<%= name %> => {
        resp.status(201).send(<%= name %>);
    }).catch(next);
};

// Updates an existing <%= name %> in the DB.
exports.update = function(req, resp) {

    delete req.body._id;
    body.lastModifiedBy = req.user.username;
    <%= classedName %>.findById(req.params.id).then(<%= name %> => {

        if(!<%= name %>) {
            throw new errors.NotFound('<%= _.underscored(name) %>_not_found')
        }
        <% if(secured) { %>
            if(<%= name %>.createdBy !== req.user.username && <%= name %>.sharedWith.indexOf(req.user.username) === -1) {
            throw new errors.Forbidden('<%= _.underscored(name) %>_access_denied')
        }

        <% } %>var updated = _.merge(<%= name %>, req.body);
        updated.save()
    }).then(<%= name %> => {
        resp.status(200).send(<%= name %>);
    }).catch(next);
};

// Deletes a <%= name %> from the DB.
exports.destroy = function(req, resp, next) {
    <%= classedName %>.findById(req.params.id).then(<%= name %> => {
        if(!<%= name %>) {
            return;
        }
        <% if(secured) { %>
        if(<%= name %>.createdBy !== req.user.username && <%= name %>.sharedWith.indexOf(req.user.username) === -1) {
            throw new errors.Forbidden('<%= _.underscored(name) %>_access_denied')
        }

        <% } %><%= name %>.remove();
    }).then(() => resp.status(204).end()).catch(next);
};
