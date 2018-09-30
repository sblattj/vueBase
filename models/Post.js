const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: String,
    email: String,
    password: String,
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
