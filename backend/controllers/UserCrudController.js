const { userModel } = require("../models/usersModel");

//create user

const CreateUser = async (req, res) => {
  const { id, first_name, last_name, email, gender, avatar, available } =
    req.body;

  let newUser;
  try {
    const userStore = new userModel({
      id,
      first_name,
      last_name,
      email,
      gender,
      avatar,
      available,
    });

    newUser = await userStore.save();

    if (!newUser) {
      res.status(401).json({ message: "unable to add user" });
    }

    res.status(200).json({ newUser });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
}

//update user
const UpdateUser = async (req, res) => {
  const { _id, first_name, last_name, email, gender, avatar, available } =
    req.body;

  try {
    const updatedUser = await userModel
      .findByIdAndUpdate(
        { _id },
        {
          first_name,
          last_name,
          email,
          gender,
          avatar,
          available,
        },
        { new: true, useFindAndModify: false }
      )
      .lean();

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//delete user
const DeleteUser = async (req, res) => {
  const  id  = req.params.id;


  try {
    const userDeleted = await userModel.findByIdAndDelete(id ).lean()
    if (!userDeleted) {
      res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json({ user: userDeleted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//serch by name
const getUserBySearchWithName = async (req,res)=>{
  const {name} = req.body;
  try {    
    const user = await userModel.find({"first_name" : name})
    res.json(user)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

module.exports = { CreateUser, UpdateUser, DeleteUser,getUserBySearchWithName };
