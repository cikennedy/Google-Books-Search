const axios = require("axios");
const db = require("../models");

// Searches Google Books API and the results are books not yet saved
module.exports = {
    findAll: function(req, res) {
        const { query: params } = req;
        axios
        .get("https://www.googleapis.com/books/v1/volumes", 
        { params })
        .then(results => 
            results.data.items.filter(
                result =>
                    result.volumeInfo.title &&
                    result.volumeInfo.infoLink &&
                    result.volumeInfo.authors &&
                    result.volumeInfo.description &&
                    result.volumeInfo.imageLinks &&
                    result.volumeInfo.imageLinks.thumbnail
            )
        ).then(apiBooks =>
            db.Book.find().then(dbBooks => 
                apiBooks.filter(apiBook => 
                    dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
                )
            )
        ).then(data=> res.json(data))
        .catch(err => res.status(500).json(err));
    }
};