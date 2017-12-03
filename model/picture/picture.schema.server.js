var mongoose = require('mongoose');

var PictureSchema = mongoose.Schema({
  albumId: {type: mongoose.Schema.Types.ObjectId, ref: 'AlbumModel'},
  title: String,
  text: String,
  url: String,
  width: String,
  height: String,
  dateUploaded: Date
}, {collection: 'user_pictures'});

module.exports = PictureSchema;
