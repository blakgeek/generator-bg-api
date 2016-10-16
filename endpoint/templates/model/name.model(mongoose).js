'use strict';

var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;

var <%= classedName %>Schema = new Schema({
    _id: String,<% if(secured) { %>
    sharedWith: [String],<% } %>
    createdDtm: {type: Date, default: Date.now},
    createdBy: String,
    lastModifiedDtm: Date,
    lastModifiedBy: Date,
}, {
    collection: '<%= _.underscored(name) %>s',
    versionKey: false
});

<%= classedName %>Schema.pre('save', function(next) {
    if (this.isNew && !this._id) {
        this._id = shortid();
    }
    this.lastModifiedDtm = new Date();
    next();
});

<%= classedName %>Schema.pre('update', function(next) {

    this.lastModifiedDtm = new Date();
    next();
});

module.exports = mongoose.model('<%= classedName %>', <%= classedName %>Schema);
