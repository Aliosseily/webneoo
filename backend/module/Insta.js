const mongoose = require("mongoose");
const instaSchema = new mongoose.Schema({
  instaImage: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Insta", instaSchema, "insta");
