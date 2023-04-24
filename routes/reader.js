var express = require('express');
var router = express.Router();
var readerModel = require('../models').reader


/* GET users listing. */
router.get('/', (req, res) => {
    const readers = readerModel.findAll()
    res.send(readers)
});
router.post('/',(req, res) => {
    readerModel.create({
        name: req.body.name,
        address: req.body.address 
    })
    res.send('new reader accepted')
})
module.exports = router;