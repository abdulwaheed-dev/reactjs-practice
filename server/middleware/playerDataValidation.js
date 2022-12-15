module.exports = function (req, res, next) {
  const { name, country, score, role, playerType, ranking } = req.body;
  if (!country) {
    return res.redirect("/newplayer");
  }
  next();
};
