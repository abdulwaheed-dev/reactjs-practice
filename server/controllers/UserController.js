const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports.createUser = function (req, res) {
  User.create(req.body, function (err, result) {
    if (!err) {
      return res.redirect("/login");
    }
    console.log(err);
  });
};
module.exports.authenticatUser = function (req, res) {
  //console.log(res.body);
  const { username, password } = req.body;
  User.findOne({ username: username }, function (err, user) {
    if (!!user) {
      bcrypt.compare(password, user.password, function (err, same) {
        if (same) {
          isLoggedIn = true;
          req.session.uid = user._id;
          return res.redirect("/players");
        }
        res.redirect("/login");
      });
    }
  });
};
