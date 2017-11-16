module.exports = function (app) {
  var postModel = require('../../model/post/post.model.server');
  var userModel = require('../../model/user/user.model.server');

  app.get('/api/post/:pid', findPostById);
  app.get('/api/post', findPosts);
  app.get('/api/post/user/:uid', findPostsByUser);
  app.post('/api/post', createPost);
  app.put('/api/post/:pid', updatePost);
  app.delete('/api/post/:pid', deletePost);

  function findPostById(req, res) {
    var postId = req.params['pid'];
    postModel.findPostById(postId)
      .then(function (post) {
        res.json(post);
      });
  }


  function findPostsByUser(req, res) {
    console.log('server: findPostByUser');
    console.log('reqbody: ', req.body);
    var userId = req.params['uid'];
    console.log('server userId: ', userId);
    postModel.findPostsByUser(userId).then(function(posts) {
      res.json(posts);
    });
  }

  function findPosts(req, res) {
    console.log("entered the server Find Posts");
    var tag = req.query['tag'];
    var userId = req.params['uid'];
    var postId = req.params['pid'];
    console.log('tag is ', tag);
    console.log('userId is', userId);
    if (tag) {
      console.log('we have a tag');
      postModel.findPostsByTag(tag).then(function (posts) {
        res.json(posts);
      });
    } else {
      postModel.findAllPosts().then(function(posts) {
        res.json(posts);
      })
    }
  }

  function createPost(req, res) {
    console.log('entering server post');
    var post = req.body;
    console.log('post from server', post);
    postModel
      .createPost(post)
      .then(function (post) {
        console.log('inner consolelog from server', post);
        res.json(post);
      });
  }


  function updatePost(req, res) {
    var postId = req.params['pid'];
    var updatedPost = req.body;
    postModel
      .updatePost(postId, updatedPost)
      .then(function (status) {
        res.json(status);
      });
  }

  function deletePost(req, res) {
    var postId = req.params['pid'];
    postModel.deletePost(postId).then(function (any) {
      res.json(null);
    });

  }

};
