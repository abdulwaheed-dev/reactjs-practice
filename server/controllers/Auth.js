module.exports.logout = function (req, res) {
  req.session.destroy();
  res.redirect("/login");
};
