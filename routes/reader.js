var express = require("express");
var router = express.Router();
const { authenticate } = require('../middlewares/auth');
var readerModel = require("../models").reader;
var bookModel = require('../models').book;
var readerController = require('../controllers').reader

router.get('/', authenticate, readerController.list);
router.post('/', readerController.add);
router.get('/:id', readerController.getById);
router.delete('/:id', readerController.delete);

module.exports = router;

// only router method

// router.get("/", async (req, res) => {
//     const readers = await readerModel.findAll(
//     {
//             include: [
//             {
//                 model: bookModel,
//                 as: "books"
//             },
//             ],
//             order: [
//                 ["createdAt", "DESC"],
//             [{model: bookModel, as: "books"}, "createdAt", "DESC"]
//         ]
//     }
//     );
//     res.json(readers);
// });
// router.post("/", (req, res) => {
//     readerModel.create({
//         name: req.body.name,
//         address: req.body.address,
//     });
//     res.send(`${reader.name} new reader accepted`);
// });
// router.get('/:id', async (req, res) => {
//     const reader = await readerModel.findByPk(req.params.id);
//     res.json(reader)
// });
// router.delete('/:id', async (req, res) => {
//     const reader = await readerModel.findByPk(req.params.id);
//     reader.destroy()
//     res.send(`${reader.name} deleted`)
// })
// module.exports = router;
