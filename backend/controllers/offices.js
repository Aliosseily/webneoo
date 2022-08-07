const Offices = require("../module/Offices");

const getAllOffices = async (req, res) => {
  try {
    const result = await Offices.find();
    return res.json(result);
  } catch (err) {
    return res.status(400).json("Something went wrong");
  }
};

module.exports = { getAllOffices };
