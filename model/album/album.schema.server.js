var mongoose = require('mongoose');
var AlbumSchema = mongoose.Schema({
  uploaderId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  title: String,
  description: String,
  pictures: [{type: mongoose.Schema.Types.ObjectId, ref: 'PictureModel'}],
  dateCreated: Date
}, {collection: 'album'});
module.exports = AlbumSchema;
