const book = require("../models").book;
const reader = require("../models").reader;

module.exports = {
    // method to access all the book records on the book table
    list(req, res) {
        return book
            .findAll()
            .then((books) => res.status(200).send(books))
            .catch((error) => res.status(400).send(error));
    },
    add(req, res) {
        return book
            .create({
                title: req.body.title,
                author: req.body.author,
                reader_id: parseInt(req.body.reader_id),
            })
            .then((book) => res.status(201).send(book))
            .catch((error) => res.status(400).send(error));
    },
    getById(req, res) {
        return book
            .findByPk(req.params.id)
            .then((book) => {
                if (!book) {
                    return res.status(404).send({
                        message: "book not found",
                    });
                }
                return res.status(200).send(book);
            })
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
    },
    delete(req, res) {
        return book
            .findByPk(req.params.id)
            .then((book) => {
                if (!book) {
                    return res.status(404).send({
                        message: "reader not found",
                    });
                }
                return book
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};
