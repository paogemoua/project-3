const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/games"
);

const gamesSeed = [

    {
        sport: "Basketball",
        skillLevel: Number,
        synopsis: "First option",
        date: new Date(Date.now())
    },
    {
        sport: "Soccer",
        skillLevel: Number,
        synopsis: "option 1",
        date: new Date(Date.now())
    },
    {
        sport: "Ultimate Frisbee",
        skillLevel: Number,
        synopsis: "option 2",
        date: new Date(Date.now())
    },
    {
        sport: "Tenis",
        skillLevel: Number,
        synopsis: "option 3",
        date: new Date(Date.now())
    },
    {
        sport: "Hockey",
        skillLevel: Number,
        synopsis: "option 4",
        date: new Date(Date.now())
    },
    {
        sport: "Football",
        skillLevel: Number,
        synopsis: "option 5",
        date: new Date(Date.now())
    }


];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(gamesSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });