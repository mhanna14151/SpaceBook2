var mongoose = require("mongoose");
var connectionString = 'mongodb://localhost:/cs5610'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds133746.mlab.com:33746/heroku_p2mbwstg'; // use yours
}

var db = mongoose.connect(connectionString);

module.exports = db;
