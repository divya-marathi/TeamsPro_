const { userModel } = require("../models/usersModel");

const GetAllUsers = async (req, res) => {
  const { currentPage } = req.body;

  try {
    const users = await userModel
      .find({})
      .skip(20 * currentPage)
      .limit(20)
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
};

module.exports = { GetAllUsers };
