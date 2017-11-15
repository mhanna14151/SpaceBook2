var UserSchema = require("./user.schema.server");
var mongoose = require('mongoose');
var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.findUserById = findUserById;
UserModel.findAllUsers = findAllUsers;
UserModel.createUser = createUser;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;

module.exports = UserModel;

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function createUser (user) {
  return UserModel.create(user);
}

function findAllUsers() {
  return UserModel.find();
}

function findUserById(userId) {
  return UserModel.findById(userId);
}

function updateUser(userId, user) {
  return UserModel.update({_id: userId}, user);
}

