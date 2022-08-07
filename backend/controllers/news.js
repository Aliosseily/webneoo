const News = require("../module/News");

const getAllNews = async (req, res) => {
  try {
    const result = await News.find();
    return res.json(result);
  } catch (err) {
    return res.status(400).json("Something went wrong");
  }
};

module.exports = { getAllNews };
