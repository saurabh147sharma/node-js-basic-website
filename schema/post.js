var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var BlogPost = new Schema({
    name     : String,
    email      : String,
    message      : String
});
module.exports = mongoose.model('Post', BlogPost);