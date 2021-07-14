const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // title:
    // authors:
    // description:
    // image:
    // link:
    // googleId:

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;