"use strict";
const express = require("express");
const router = express.Router();


const { getMaster, getIndex } = require("../controllers/m3u8.controllers");
const { getPoster } = require("../controllers/poster.controllers");


router.get("/master/:slug", getMaster);
router.get("/index/:slug", getIndex);
router.get("/thumb/:slug-:item([1-9]|10).:ext(png|jpg)", getPoster);

router.use("/server", require("./server.routes"));

router.all("*", async (req, res) => {
  return res.status(404).json({ error: true, msg: "not found!" });
});

module.exports = router;
