var CBSchema = require("./cb.schema.server");
var mongoose = require('mongoose');
var CBModel = mongoose.model("CBModel", CBSchema);

CBModel.findCBById = findCBById;
CBModel.createCB = createCB;
CBModel.findCBsByText = findCBsByText;
CBModel.updateCB = updateCB;
CBModel.deleteCB = deleteCB;

module.exports = CBModel;

function findCBsByText(text) {
  return CBModel.find({'name': text});
}


function createCB (cb) {
  return CBModel.create(cb);
}

function findCBById(cbId) {
  return CBModel.findById(cbId);
}

function updateCB(cbId, cb) {
  return CBModel.update({_id: cbId}, cb);
}

function deleteCB(cbId) {
  return CBModel.deleteOne({_id: cbId});
}
