const Player = require("../models/Player");
module.exports.getPlayers = async function (req, res) {
  const players = await Player.find({});
  //console.log(players);
  res.render("players", { players });
  //api-
  //res.json(msg: 'Successfully Recieved', data: players, status:'success')
};
module.exports.getSelectedPlayer = async function (req, res) {
  const player = await Player.findById(req.params.id);
  res.render("playerDetails", { player });
};
module.exports.createPlayer = function (req, res) {
  Player.create(req.body, function (err, result) {
    if (!err) {
      return res.redirect("/players");
    }
    console.log(err);
  });
};
module.exports.createPlayerPage = async function (req, res) {
  res.render("newPlayer");
};
