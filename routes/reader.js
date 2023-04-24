var express = require('express');
var router = express.Router();
const readerController = require('../contollers/reader')

/* GET users listing. */
router.get('/', readerController.list
);

module.exports = router;
