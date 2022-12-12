const Player = require("../models/Player");
module.exports.getPlayers = async function (req, res) {
  const players = await Player.find({});
  //console.log(players);
  res.render("players", { players });
  //api-
  //res.json(msg: 'Successfully Recieved', data: players, status:'success')
};
