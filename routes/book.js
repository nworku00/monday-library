var express = require('express');
var router = express.Router();
const bookController = require('../contollers/book')

/* GET users listing. */
router.get('/', bookController.list
);

module.exports = router;
