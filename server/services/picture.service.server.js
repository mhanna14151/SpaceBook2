module.exports = function (app) {
  app.post('/api/album/:aid/pic', createPicture);
  app.get('/api/pic/:picid', findPictureById);
  app.get('/api/album/:aid/picture', findPicturesByAlbum);
  app.put('/api/pic/:picid', updatePicture);
  app.delete('/api/pic/:picid', deletePicture);

  var pictureModel = require('../../model/picture/picture.model.server');

  function createPicture(req, res) {
    var albumId = req.params['aid'];
    var pic = req.body;
    pic.albumId = albumId;
    pictureModel
      .createPicture(pic)
      .then(function (picture) {
        pictureModel
          .findPicturesByAlbum(albumId)
          .then(function (pictures) {
            res.json(pictures);
          });
      });
  }

  function findPictureById(req, res) {
    var picId = req.params['picid'];
    pictureModel
      .findPictureById(picId)
      .then(function (picture) {
        res.json(picture);
      });
  }

  function findPicturesByAlbum(req, res) {
    var albumId = req.params['aid'];
    pictureModel
      .findPicturesByAlbum(albumId)
      .then(function (pictures) {
        res.json(pictures);
      });
  }

  function updatePicture(req, res) {
    var picId = req.params['picid'];
    var updatedPicture = req.body;
    pictureModel
      .updatePicture(picId, updatedPicture)
      .then(function (status) {
        res.json(status);
      });
  }

  function deletePicture(req, res) {
    var picId = req.params['picid'];
    pictureModel
      .deletePicuture(picId)
      .then(function (pictures) {
        res.json(pictures);
      });
  }
};
