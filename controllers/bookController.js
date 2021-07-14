const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Book.find(req.query)
        .then(dbData => res.json(dbData))
        .catch(err => res.status(500).json(err));
    },
    findById: function(req, res) {
        db.Book.findById(req.params.id)
        .then(dbData => res.json(dbData))
        .catch(err => res.status(500).json(err));
    },
    create: function(req, res) {
        db.Book.create(req.body)
        .then(dbData => res.json(dbData))
        .catch(err => res.status(500).json(err));
    },
    update: function(req, res) {
        db.Book.findOneAndUpdate({ id: req.params.id }, req.body) 
        .then(dbData => res.json(dbData))
        .catch(err => res.status(500).json(err));
    },
    remove: function(req, res) {
        db.Book.findById(req.params.id)
        .then(dbData => res.json(dbData))
        .catch(err => res.status(500).json(err));
    },
};