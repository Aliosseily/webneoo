const Products = require("../module/Products");

const getAllProducts = async (req, res) => {
  try {
    const result = await Products.find();
    return res.json(result);
  } catch (err) {
    return res.status(400).json("Something went wrong");
  }
};

module.exports = { getAllProducts };