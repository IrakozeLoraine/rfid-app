
const express = require('express');
var router = express.Router();

const rfids = require("./rfid.controller");
router.post("/",rfids.create);
router.get("/", rfids.findAll);
router.get("/:id", rfids.findOne);
router.delete("/:id", rfids.delete);

module.exports = router;