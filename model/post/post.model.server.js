var PostSchema = require("./post.schema.server");
var mongoose = require('mongoose');
var PostModel = mongoose.model("PostModel", PostSchema);

PostModel.findPostById = findPostById;
PostModel.findPostsByTag = findPostsByTag;
PostModel.createPost = createPost;
PostModel.findPostsByTags = findPostsByTags;
PostModel.deletePost = deletePost;
PostModel.updatePost = updatePost;

module.exports = PostModel;

function findPostsByTags(tags) {

  /*
  res = [];
  for (var i = 0; i < tags.length, i++){
    res += findPostsByTag(tags[i]);
  }

  res.sort()

  I'll come back to this once we have more hooked up.
  */

  return findPostsByTag(tags[0]);
}

function findPostsByTag(tag) {
  var query = Model.where({tags: tag}).limit(20).sort('date', -1, 'likes', 1);
  return query.exec();
}

function createPost (post) {
  return PostModel.create(post);
}

function findPostById(postId) {
  return PostModel.findById(postId);
}

function updatePost(postId, post) {
  return PostModel.update({_id: postId}, post);
}

function deletePost(postId) {
  return PostModel.remove({_id: postId});
}

