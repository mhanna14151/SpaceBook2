module.exports = function (app) {
  app.post('/api/user/:uid/album', createAlbum);
  app.get('/api/album/:aid', findAlbumById);
  app.get('/api/user/:uid/album', findAllAlbumsByUser);
  app.put('/api/album/:aid', updateAlbum);
  app.delete('/api/album/:aid', deleteAlbum);

  var albumModel = require('../../model/album/album.model.sever');
  var pictureModel = require('../../model/picture/picture.model.server');

  function createAlbum(req, res) {
    var userId =  req.params['uid'];
    var newAlbum = req.body;
    newAlbum.uploaderId = userId;
    albumModel
      .createAlbum(newAlbum)
      .then(function (album) {
        albumModel
          .findAllAlbumsByUser(userId)
          .then(function (albums) {
            res.json(albums);
          });
      });
  }

  function findAlbumById(req, res) {
    var albumId = req.params['aid'];
    albumModel
      .findAlbumById(albumId)
      .then(function (album) {
        res.json(album);
      });
  }

  function findAllAlbumsByUser(req, res) {
    var userId = req.params['uid'];
    albumModel
      .findAllAlbumsByUser(userId)
      .then(function (albums) {
        res.json(albums);
      });
  }

  function updateAlbum(req, res) {
    var albumId = req.params['aid'];
    var updatedAlbum = req.body;
    albumModel
      .updateAlbum(albumId, updatedAlbum)
      .then(function (status) {
        res.json(status);
      });
  }

  function deleteAlbum(req, res) {
    var albumId = req.params['aid'];
    // var pictures = null;
    // pictureModel
    //   .findPicturesByAlbum(albumId)
    //   .then(function (pics) {
    //     pictures = pics;
    //   });
    albumModel
      .findAlbumById(albumId)
      .then(function (album) {
        for(var i = 0; i < album.pictures.length; i++) {
          pictureModel.deletePicture(album.pictures[i]);
        }
        albumModel
          .deleteAlbum(albumId)
          .then(function (status) {
            res.json(status);
          });
      });
  }
};
