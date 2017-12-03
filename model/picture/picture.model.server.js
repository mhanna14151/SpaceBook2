var PictureSchema = require("./picture.schema.server");
var mongoose = require('mongoose');
var PictureModel = mongoose.model("PictureModel", PictureSchema);
module.exports = PictureModel;
