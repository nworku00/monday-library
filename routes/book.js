var express = require('express');
var router = express.Router();
var bookModel = require('../models').book


/* GET users listing. */
router.get("/", async (req, res) => {
    const books = await bookModel.findAll();
    res.json(books);
});
router.post("/", (req, res) => {
    let id = Number(req.body.reader_id)
    bookModel.create({
        title: req.body.title,
        author: req.body.author,
        reader_id: id
    });
    res.send(`new book accepted`);
});
router.get('/:id', async (req, res) => {
    const book = await bookModel.findByPk(req.params.id);
    res.json(book)
})
router.delete('/:id', async (req, res) => {
    const book = await bookModel.findByPk(req.params.id);
    book.destroy()
    res.send(`${book.title} deleted`)
})
module.exports = router;
