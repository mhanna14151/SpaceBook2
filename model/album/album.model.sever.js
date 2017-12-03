var AlbumSchema = require("./album.schema.server");
var mongoose = require('mongoose');
var AlbumModel = mongoose.model("AlbumModel", AlbumSchema);
module.exports = AlbumModel;
