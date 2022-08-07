const Insta = require("../module/Insta");

const getAllInsta = async (req, res) => {
  try {
    const result = await Insta.find();
    return res.json(result);
  } catch (err) {
    return res.status(400).json("Something went wrong");
  }
};

module.exports = { getAllInsta };