'use strict';

var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;

var <%= classedName %>Schema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    },<% if(secured) { %>
    sharedWith: [String],<% } %>
    createdBy: String,
    lastModifiedBy: String
}, {
    collection: '<%= _.underscored(name) %>s',
    versionKey: false,
    timestamps: {
        createdAt: 'createdDtm',
        updatedAt: 'lastModifiedDtm'
    }
});

module.exports = mongoose.model('<%= classedName %>', <%= classedName %>Schema);
