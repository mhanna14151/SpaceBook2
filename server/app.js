/**
 * Created by sesha on 7/27/17.
 */

/* the function is a Java script constructor which will be instantiated from top level server.js */
/* req = parses the req from http, parses and makes it a nice clean object */
// params is part of the request. any variables in the path will be available as a a map in params

module.exports = function (app) {
  db = require("../model/model.server");
  require("./services/user.service.server")(app);
  require("./services/post.service.server")(app);
  require("./services/cb.service.server")(app);
  require("./services/picture.service.server")(app);
  require("./services/album.service.server")(app);
};

