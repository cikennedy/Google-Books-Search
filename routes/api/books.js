const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// add api routes below 
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create);

router.route("/:id")
    .get(bookController.findById)
    .delete(bookController.remove)
    .put(bookController.update);

module.exports = router;