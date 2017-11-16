var mongoose = require('mongoose');
var CBSchema = mongoose.Schema({
  name: String,
  region: String,
  types: [String],
  wiki: String,
  verified: Boolean,
  picture: String
}, {collection: 'cb'});

module.exports = CBSchema;
