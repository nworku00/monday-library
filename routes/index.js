var express = require("express");
var router = express.Router();
const { authenticate } = require('../middlewares/auth');

var readerController = require('../controllers').reader
var bookController = require('../controllers').book

router.get('/reader', authenticate, readerController.list);
router.post('/reader', readerController.add);
router.get('/reader/:id', readerController.getById);
router.delete('/reader/:id', readerController.delete);

router.get('/book', bookController.list);
router.post('/book', bookController.add);
router.get('/book/:id', bookController.getById);
router.delete('/book/:id', bookController.delete);


module.exports = router;
