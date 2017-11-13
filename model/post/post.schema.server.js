var mongoose = require('mongoose');
var PostSchema = mongoose.Schema({
  poster: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}],
  text: String,
  images: [{type: mongoose.Schema.Types.ObjectId, ref: 'ImageModel'}],
  likes: Number,
  date: Date
}, {collection: 'posts'});

module.exports = PostSchema;
