const { userModel } = require("../models/usersModel");

const GetSpecificUser = async (req, res) => {
  console.log(req.params.id);
  const userId = req.params.id;

  try {
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { GetSpecificUser };
