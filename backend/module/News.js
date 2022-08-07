const mongoose = require("mongoose");
const newsSchema = new mongoose.Schema({
  productImage: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
  date_title: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  caption: {
    type: String,
    default: "",
  },
  position: {
    type: String,
    default: "",
  },
  read_more: {
    type: Boolean,
    default: false,
  },
  
});



module.exports = mongoose.model("News", newsSchema);





