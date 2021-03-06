const mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var GameSchema = new Schema({
  // `title` is required and of type String
  sport: {
    type: String,
    required: true
  },
  skill: {
    type: String
  },
  players: {
    type: String
  },
  time: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  locationLat: {
    type: Number
  },
  locationLng: {
    type: Number
  },
  address: {
    type: String
  },
  user: {
    type: String
  }
});

// This creates our model from the above schema, using mongoose's model method
var Game = mongoose.model("Game", GameSchema);

// Export the Article model
module.exports = Game;