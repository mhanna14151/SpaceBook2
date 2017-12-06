var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  verified: Boolean,
  DOB: String,
  picture: String,
  follows: [String],
  userType: [{type: String, enum: ['PROFESSIONAL', 'AMATEUR', 'ADMIN', 'ORGANIZATION', 'UNIVERSITY']}],
  albums: [{type: mongoose.Schema.Types.ObjectId, ref: 'AlbumModel'}]
}, {collection: 'user'});

module.exports = UserSchema;
