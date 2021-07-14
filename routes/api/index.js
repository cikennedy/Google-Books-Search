const path = require("path");
const router = require("express").Router();
const googleRoutes = require("./google");
const bookRoutes = require("./books");

// Google routes
router.use('/google', googleRoutes);

// Book Routes
router.use('/books', bookRoutes);

// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;