const { StoreUsersData } = require("../Heliverse_data/StoreUsersData");
const express = require('express');
const { GetAllUsers } = require("../controllers/AllUserController");
const { GetSpecificUser } = require("../controllers/SpceficUserController");
const { CreateUser, UpdateUser, DeleteUser, getUserBySearchWithName} = require("../controllers/UserCrudController");

const userRouter = express.Router()

userRouter.get("/", StoreUsersData)
userRouter.get('/api/users',GetAllUsers)
userRouter.get('/api/users/:id',GetSpecificUser)
userRouter.post('/api/users',CreateUser)
userRouter.put('/api/users/:id',UpdateUser)
userRouter.post('/api/users/:id',DeleteUser)

//Search
userRouter.post("/search", getUserBySearchWithName)


  

module.exports = {userRouter}