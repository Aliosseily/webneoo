const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  prodImage: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Products", productSchema);
