const { model, Schema } = require("mongoose");

const PlayerSchema = new Schema({
  name: String,
  country: String,
  playerType: String,
  role: String,
  score: Number,
  ranking: Number,
});

const Player = model("User", PlayerSchema);

module.exports = Player;
