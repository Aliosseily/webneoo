const express = require("express");
const { getAllNews } = require("../controllers/news");
const router = express.Router();

router.get("/getAll", getAllNews);

module.exports = router;
