module.exports = function (app) {
  var userModel = require("../../model/user/user.model.server");

  var multer = require('multer');
  var upload = multer({ dest: __dirname + '/../../dist/assets/uploads'});

  app.get("/api/user/:uid", findUserById);
  app.get("/api/user", findUsers);
  app.post("/api/user", createUser);
  app.put("/api/user/:uid", updateUser);
  app.delete("/api/user/:uid", deleteUser);
  app.post("/api/upload", upload.single('myFile'), uploadProfilePicture);


  function findUserById(req, res) {
    var userId = req.params["uid"];
    userModel.findUserById(userId)
      .then(function (user) {
        res.json(user);
      });
  }

  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password) {
      userModel.findUserByCredentials(username, password)
        .then(function (user) {
          res.json(user);
        });
      return;
    }
    else if (username) {
      userModel
        .findUserByUsername(username)
        .then(function (user) {
          res.json(user);
        });
      return;
    }
    res.json(users);
  }

  function createUser(req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(function (user) {
        res.json(user);
      });
  }

  function updateUser(req, res) {
    var userId = req.params['uid'];
    var updatedUser = req.body;
    userModel
      .updateUser(userId, updatedUser)
      .then(function (status) {
        res.json(status);
      });
  }

  function deleteUser(req, res) {
    var userId = req.params['uid'];
    userModel
      .deleteUser(userId)
      .then(function (users) {
        res.json(users);
      });
  }

  function uploadProfilePicture(req, res) {
    var myFile = req.file;
    var userId = req.body.userId;

    console.log('IN UPLOAD PROFILE IN SERVER.SERVICE');

    var originalname = myFile.originalname;
    var filename = myFile.filename;
    var path = myFile.path;
    var destination = myFile.destination;
    var size = myFile.size;
    var mimetype = myFile.mimetype;
    var user1 = null;
    userModel
      .findUserById(userId)
      .then(function (user) {
        user1 = user;
        user['picture'] = '/assets/uploads/' + filename;
        userModel
          .updateUser(userId, user1)
          .then(function (usr) {
            console.log(usr);
            var callbackUrl =  '/user/' + userId;
            usr.save();
            res.redirect(callbackUrl);
          });
      });

  }
};
