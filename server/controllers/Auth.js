module.exports.logout = function (req, res) {
  req.session.destroy();
  isLoggedIn = false;
  res.redirect("/login");
};
module.exports.signup = async function (req, res) {
  res.render("signup");
};
module.exports.login = async function (req, res) {
  res.render("login");
};
module.exports.home = function (req, res) {
  res.render("home");
};
module.exports.about = function (req, res) {
  res.render("about");
};
