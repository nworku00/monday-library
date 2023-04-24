var express = require("express");
var router = express.Router();
var readerModel = require("../models").reader;

/* GET users listing. */
router.get("/", async (req, res) => {
    const readers = await readerModel.findAll();
    res.json(readers);
});
router.post("/", (req, res) => {
    readerModel.create({
        name: req.body.name,
        address: req.body.address,
    });
    res.send("new reader accepted");
});
router.get('/:id', async (req, res) => {
    const reader = await readerModel.findByPk(req.params.id);
    res.json(reader)
})
module.exports = router;