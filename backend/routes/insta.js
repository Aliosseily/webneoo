const express = require("express");
const { getAllInsta } = require("../controllers/insta");
const router = express.Router();

router.get("/getAll", getAllInsta);

module.exports = router;
