const reader = require("../models").reader;
const book = require("../models").book;

module.exports = {
    // method to access all the reader records on the reader table
    list(req, res) {
        return reader
            .findAll({
                include: [
                    {
                        model: book,
                        as: "books",
                    },
                ],
                order: [
                    ["id", "ASC"],
                    [{ model: book, as: "books" }, "createdAt", "DESC"],
                ],
            })
            .then((readers) => res.status(200).send(readers))
            .catch((error) => res.status(400).send(error));
    },

    // method to add a reader record to the reader table
    add(req, res) {
        return reader
            .create({
                name: req.body.name,
                address: req.body.address,
            })
            .then((reader) => res.status(201).send(reader))
            .catch((error) => res.status(400).send(error));
    },

    // method to get a reader by its id
    getById(req, res) {
        return reader
            .findByPk(req.params.id, {
                include: [
                    {
                        model: book,
                        as: "books",
                    },
                ],
            })
            .then((reader) => {
                if (!reader) {
                    return res.status(404).send({
                        message: "reader not found",
                    });
                }
                return res.status(200).send(reader);
            })
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
    },
    // handle requests to update a reader by its id
    update(req, res) {
        return reader
            .findByPk(req.params.id, {
                include: [
                    {
                        model: book,
                        as: "books",
                    },
                ],
            })
            .then((reader) => {
                if (!reader) {
                    return res.status(404).send({
                        message: "reader not found",
                    });
                }
                return reader
                    .update({
                        name: req.body.name || reader.name,
                    })
                    .then(() => res.status(200).send(reader))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    // handle request to delete a reader by its id

    delete(req, res) {
        return reader
            .findByPk(req.params.id)
            .then((reader) => {
                if (!reader) {
                    return res.status(404).send({
                        message: "reader not found",
                    });
                }
                return reader
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};
