'use strict';

var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;

var <%= classedName %>Schema = new Schema({
    _id: String,
    name: String,
    info: String,
    active: Boolean
}, {
    collection: '<%= _.underscored(name) %>s',
    versionKey: false
});

<%= classedName %>Schema.pre('save', function(next) {
    if (this.isNew && !this._id) {
        this._id = shortid();
    }
    next();
});

module.exports = mongoose.model('<%= classedName %>', <%= classedName %>Schema);
