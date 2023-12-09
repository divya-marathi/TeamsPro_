import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Card = ({ item, ErraseData, ...style }) => {
  const [user, setUser] = useState("");

  const [teamData, setTeamData] = useState([]);
  const [isAddToTeam, setAddToTeam] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);


  const teamDisplay = async () => {
    await axios.get("https://user-db-apb2.onrender.com/api/team").then((response) => {
      setTeamData(response.data);
    });
  };

  useEffect(() => {
    teamDisplay();
  }, []);

  //delete user
  const handleDelete = async (userId) => {
    try {
      await axios.post(`https://user-db-apb2.onrender.com/api/users/${userId}`);
      alert("user deleted");
      ErraseData(userId);
    } catch (error) {
      console.error("Something went wrong...", error);
    }
  };

  const handleAddToTeam = async () => {
    console.log(teamData)
    if(teamData.length !== 0){
       setAddToTeam(true);
    }else{
      alert("create team to add members")
    }
   
  };

  const handleAddUser=async()=>{
    try {
      const response = await axios.post('https://user-db-apb2.onrender.com/api/teamMember', {
        teamMember: user._id,
        teamName: selectedTeam
      });
    console.log(selectedTeam)
      if (response.status === 200) {
        alert('User added to the team successfully');
      } else if(response.status === 401){
          alert("User alraedy in this Team")
          return
      } else{
        console.log(response.error);
      }
    } catch (error) {
      console.error("Something went wrong...", error);
    }

  }

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
          <p class="text-sm text-gray-200 dark:text-gray-400">
            {item.available ? "true" : "false"}
          </p>
          <div class="flex mt-4 md:mt-6 justify-between">
            <div
              className="inline-flex mt-5 items-center px-4 py-2 text-sm font-medium text-center text-white bg-yellow-600 border border-gray-300  hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
              onClick={() => handleDelete(item._id)}
            >
              {" "}
              Delete User
            </div>
            <p
              
              class="inline-flex mt-5 items-center px-4 py-2 text-sm font-medium text-center text-white bg-yellow-600 border border-gray-300  hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
              onClick={handleAddToTeam}
            >
              Add to team
            </p>{" "}
          </div>
          {isAddToTeam ? (
            <><li className="flex flex-wrap justify-between text-green-500 mt-2">Please select team</li><div>
              {teamData.map((item) => (
                <>
                 
                   <span> <lable
                className={`text-white border border-gray-500 p-1 px-2 m-1 rounded-md ${selectedTeam === item.teamName ? 'bg-green-500' : ''}`}
                onClick={() => setSelectedTeam(item.teamName)}>{item.teamName}</lable></span> 
                </>
              ))}
              <button className="text-white border border-dotted border-indigo-300 " onClick={handleAddUser}>Add Now</button>
            </div>           
</>
          ) : (
            " "
          )}
         
        </div>
      </div>
    </>
  );
};
