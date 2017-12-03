var PictureSchema = require("./picture.schema.server");
var mongoose = require('mongoose');
var PictureModel = mongoose.model("PictureModel", PictureSchema);
var AlbumModel = require('../album/album.model.sever');

PictureModel.createPicture = createPicture;
PictureModel.findPictureById = findPictureById;
PictureModel.findPicturesByAlbum = findPicturesByAlbum;
PictureModel.updatePicture = updatePicture;
PictureModel.deletePicture = deletePicture;

module.exports = PictureModel;

function createPicture(picture) {
  var newPicture = null;
  return PictureModel
    .create(picture)
    .then(function (pic) {
      newPicture = pic;
      AlbumModel
        .findAlbumById(newPicture.albumId)
        .then(function (album) {
          album.pictures.push(newPicture);
          return album.save();
        });
    });
}

function findPictureById(picId) {
  return PictureModel.findById(picId);
}

function findPicturesByAlbum(albumId) {
  return PictureModel
    .find({albumId: albumId})
    .populate('albumId')
    .exec();
}

function updatePicture(picId, picture) {
  return PictureModel.update({_id: picId}, picture);
}

function deletePicture(picId) {
  var pic1 = null;
  var albumId = null;
  var i = null;
  return PictureModel
    .findOne({_id: picId})
    .then(function (picture) {
      pic1 = picture;
      albumId = picture.albumId;
      PictureModel
        .deleteOne({_id: picId})
        .then(function (pictures) {
          AlbumModel
            .findAlbumById(albumId)
            .then(function (album) {
              i = album.pictures.indexOf(pic1);
              album.pictures.splice(i, 1);
              return album.save();
            });
        });
    });
}
