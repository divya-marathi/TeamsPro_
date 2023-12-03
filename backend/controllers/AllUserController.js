const { userModel } = require("../models/usersModel");

const GetAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { GetAllUsers };
