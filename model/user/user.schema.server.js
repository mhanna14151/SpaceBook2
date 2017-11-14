var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  verified: Boolean,
  DOB: Date,
  picture: String,
  follows: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}]
}, {collection: 'user'});

module.exports = UserSchema;
