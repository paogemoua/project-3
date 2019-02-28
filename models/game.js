const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  sport: { type: String, required: true },
  skill: { type: String, required: true },
  playerAmount: String,
  date: { type: Date, default: Date.now },
  time:{ type: String, required: true }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
