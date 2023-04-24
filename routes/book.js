var express = require('express');
var router = express.Router();
var bookModel = require('../models').book


/* GET users listing. */
router.get('/', (req, res) => {
    res.json(bookModel.findAll())
});
router.post('/',(req, res) => {
    bookModel.create({
        title: req.body.title,
        author: req.body.author 
    })
    res.send('new book accepted')
})
module.exports = router;
