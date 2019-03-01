const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");


// Matches with "/api/games"
router.route("/")
    .get(gamesController.findAll)
    .post(gamesController.create);
  //.get(booksController.findAll)
  //.post(booksController.create);

// Matches with "/api/games/:id" can delete 
router.route("/:id")
    .delete(gamesController.remove);
  //.get(booksController.findById)
  //.put(booksController.update)
  //.delete(booksController.remove);

module.exports = router;
