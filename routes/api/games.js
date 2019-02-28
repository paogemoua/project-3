const router = require("express").Router();
const booksController = require("../../controllers/booksController");


// Matches with "/api/games"
router.route("/")
    .get()
    .post();
  //.get(booksController.findAll)
  //.post(booksController.create);

// Matches with "/api/games/:id" can delete 
router.route("/:id")
    .delete();
  //.get(booksController.findById)
  //.put(booksController.update)
  //.delete(booksController.remove);

module.exports = router;
