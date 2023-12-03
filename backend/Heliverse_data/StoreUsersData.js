const userData =require('./Heliverse_mock_data')
const { userModel } = require('../models/usersModel')


const  StoreUsersData =async(req,res)=> { 
  try {
    for (const user of userData) {
      const newUser = new userModel(user);

      await newUser.save();

      console.log(`User inserted with ID: ${newUser._id}`);
    }

    res.send('Data inserted successfully')
    }

   catch (error) {
    console.error(`Error inserting data: ${error.message}`);
    res.status(500).send(`Error inserting data: ${error.message}`)
   

}
}

module.exports =  {StoreUsersData}