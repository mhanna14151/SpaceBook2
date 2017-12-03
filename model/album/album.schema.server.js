var mongoose = require('mongoose');
var AlbumSchema = mongoose.Schema({
  title: String,
  description: String,
  pictures: [{type: mongoose.Schema.Types.ObjectId, ref: 'PictureModel'}],
  dateCreated: Date
}, {collection: 'user_albums'});
module.exports = AlbumSchema;
