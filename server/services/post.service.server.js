module.exports = function (app) {
  var postModel = require("../../model/post/post.model.server");

  app.get("/api/post/:pid", findPostById);
  app.get("/api/post", findPosts);
  app.post("/api/post", createPost);
  app.put("/api/post/:pid", updatePost);
  app.delete("/api/post/:pid", deletePost);

  function findPostById(req, res) {
    var postId = req.params["pid"];
    postModel.findPostById(postId)
      .then(function (post) {
        res.json(post);
      });
  }

  function findPosts(req, res) {
    var postname = req.query["postname"];
    var password = req.query["password"];
    if (postname && password) {
      postModel.findPostByCredentials(postname, password)
        .then(function (post) {
          res.json(post);
        });
      return;
    }
    else if (postname) {
      postModel
        .findPostByPostname(postname)
        .then(function (post) {
          res.json(post);
        });
      return;
    }
    res.json(posts);
  }

  function createPost(req, res) {
    var post = req.body;
    postModel
      .createPost(post)
      .then(function (post) {
        res.json(post);
      });
  }

  function updatePost(req, res) {
    var postId = req.params['uid'];
    var updatedPost = req.body;
    postModel
      .updatePost(postId, updatedPost)
      .then(function (status) {
        res.json(status);
      });
  }

  function deletePost(req, res) {
    var postId = req.params['uid'];
    var post = posts.find(function (post) {
      return postId === post._id
    });
    var i = posts.indexOf(post);
    posts.splice(i, 1);
    res.json(posts);
  }
};
