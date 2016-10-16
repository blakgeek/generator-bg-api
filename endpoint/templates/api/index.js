'use strict';

var express = require('express');
var controller = require('./<%= name %>.controller');<% if(secured) { %>
var auth = require('../../auth/auth.service');<% } %>
var router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.post('/', <% if(secured) {%>auth.isAuthenticated(), <% } %>controller.create);
router.patch('/:id', <% if(secured) {%>auth.isAuthenticated(), <% } %>controller.update);
router.delete('/:id', <% if(secured) {%>auth.isAuthenticated(), <% } %>controller.destroy);

module.exports = router;
