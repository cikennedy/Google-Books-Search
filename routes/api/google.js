const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// add api routes below 
router.route("/").get(googleController.findAll);

module.exports = router;