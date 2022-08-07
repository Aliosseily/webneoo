const express = require("express");
const { getAllOffices } = require("../controllers/offices");
const router = express.Router();

router.get("/getAll", getAllOffices);

module.exports = router;
