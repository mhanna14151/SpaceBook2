var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  verified: Boolean,
  DOB: Date
}, {collection: 'user'});

module.exports = UserSchema;
