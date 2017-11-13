var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/spacebook';
if(process.env.MLAB_USERNAME_WEBDEV) {
  var username = process.env.MLAB_USERNAME_WEBDEV;
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds129434.mlab.com:29434/heroku_3b87xwk5';
}
var db = mongoose.connect(connectionString, {useMongoClient: true});

module.exports = db;
