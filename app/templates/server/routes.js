/**
 * Main application routes
 */

'use strict';

var errors = require('rest-api-errors');

module.exports = function(app) {

  // Insert routes below
  <% if (filters.auth) { %>app.use('/api/users', require('./api/user'));
  app.use('/auth', require('./auth'));
  <% } %>

  // All other routes should return not implemented
  app.use(function(req, resp, next) {

    throw new errors.NotImplemented();
  });
};
