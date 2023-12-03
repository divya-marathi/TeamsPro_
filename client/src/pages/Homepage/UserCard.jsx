import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Card = ({ item,  ErraseData,...style }) => {

  const [user, setUser] = useState("");

  //delete user
  
     const handleDelete =  async(userId) => {     
    try {
     
      await axios.post(`http://localhost:5000/api/users/${userId}`);      
     alert("user deleted")
      ErraseData(userId)
    } catch (error) {
      console.error("Something went wrong...", error);
    }
  }
  
  const handleUpdate  = () =>{
    try {
      
    } catch (error) {
      
    }
  }


    // useEffect(() => {
    //   if (SingledData == null) {
    //   } else {
    //     setUser(SingledData[0]);
    //   }
    // }, [])

  return (
    <>
      <div class="w-full max-w-sm  bg-gray-900  border-green-700 border-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-2 pt-4"></div>
        <div class="flex flex-col items-center pb-8">
          <img
            className="w-24 h-24 mb-3 rounded-full border border-gray-600 shadow-xl"
            src={item.avatar}
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-green-500 dark:text-white">
            {item.first_name} {item.last_name}
          </h5>
          <span class="text-sm text-gray-200 dark:text-gray-400">
            {item.email}
          </span>
          <span class="text-sm text-gray-200 dark:text-gray-400">
            {item.gender}
          </span>
          <span class="text-sm text-gray-200 dark:text-gray-400">
            {item.domain}
          </span>
          <span class="text-sm text-gray-900 dark:text-gray-400">
            {item.available}
          </span>
          <div class="flex mt-4 md:mt-6">
            <Link
              to="/" 
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={handleUpdate}>
              Update User
            </Link>
            <Link
              to="/"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
              onClick={()=>handleDelete(item._id)}
            > Delete User
            </Link>
          </div>
          <Link
            to="createTeam"
            class="inline-flex mt-5 items-center px-4 py-2 text-sm font-medium text-center text-white bg-yellow-600 border border-gray-300  hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
          >
            Add to team
          </Link>
        </div>
      </div>
    </>
  )
}
