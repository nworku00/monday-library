const models = require('../models')
const book = models.book
const list = JSON.stringify(await book.findAll())
module.exports = { list }