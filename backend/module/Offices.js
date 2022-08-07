const mongoose = require("mongoose");
const instaSchema = new mongoose.Schema({
  instaImage: {
    title: String,
    default: "",
  },
  address1: {
    title: String,
    default: "",
  },
  address2: {
    title: String,
    default: "",
  },
  address3: {
    title: String,
    default: "",
  },
});

module.exports = mongoose.model("Offices", instaSchema, "offices");
