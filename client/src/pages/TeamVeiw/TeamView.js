import axios from "axios";
import React, { useEffect, useState } from "react";

function TeamView() {
  const [teamData, setTeamData] = useState([]);

  const teamDisplay = async () => {
    await axios.get("https://user-db-apb2.onrender.com/api/team").then((response) => {
      setTeamData(response.data);
    });
  };

  useEffect(() => {
    teamDisplay();
  }, []);

  return (
    <>
      <div className="bg-gray-900  flex justify-center flex-wrap ">
        <h1 className="  text-green-600 font-bold text-2xl mt-3 ">My teams</h1>{" "}
      </div>
      <div className="flex flex-row text-center gap-6 justify-center py-10 mb-40   bg-gray-900 ">
        {" "}
        {teamData.map((item) => (
          <div className=" bg-white border border-blue-400 px-10 py-5">
            <label className="text-red-800 text-xl font-semibold">
              Team Name :
            </label>
            <span className="">{item.teamName}</span>
            <div>
              {" "}
              <label className="text-yellow-500 text-md font-semibold">
                Team Members
              </label>{" "}
              <ul className="text-center">
                {" "}
                <li className="">{item.teamMembers} hai</li>
                <li className="">{item.teamMembers} hai</li>

              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TeamView;
