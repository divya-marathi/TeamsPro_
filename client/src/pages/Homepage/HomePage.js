import React, { useEffect, useState } from "react";
import { Title } from "./Tabs";
import axios from "axios";
import { useSelector } from "react-redux";
import { Card } from "./UserCard";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const searchingData = useSelector((state) => state);
  const [gender, setGender] = useState("Male");
  const [availability, setAvailability] = useState(true);
  const [domain, setDomain] = useState("Sales");
  const [data, setData] = useState([]);
  const [teamName, setTeamname] = useState("");
  const [isteamExist, setTeamExist] = useState(false);


  async function GetAllUsers() {
    await axios
      .post("https://user-db-apb2.onrender.com/api/users", { currentPage })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }

  const ErraseData = (id) => {
    const newData = data.filter((item) => item._id != id);
    setData(newData);
  };

  useEffect(() => {
    if (searchingData === null) {
      GetAllUsers();
    } else {
      setData(searchingData);
    }
  }, [searchingData, currentPage]);

  //pagination
  const handlePrevios = () => {
    if (currentPage > 2) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleGender = (gender) => {
    const latestOption = data.filter((item) => {
      if (item.gender == gender) return item;
    });
    setData(latestOption);
  };

  const handleAvailability = (available) => {
    const latestData = data.filter((item) => {
      if (item.available == available) return item;
    });
    console.log(latestData);
    setData(latestData);
  };

  const handleDomain = (domain) => {
    const latestDomain = data.filter((item) => {
      if (item.domain == domain) return item;
    });
    setData(latestDomain);
  };

  //team creation
  const handleSubmit = async (e)=>{
    e.preventDefault()
     await axios.post('https://user-db-apb2.onrender.com/api/team',{teamName})
       .then((response)=>{
        if(response.status === 401){
          setTeamExist(true)
          return
        }
        if(response.status == 200){
          alert('Team Created')
        }else{
          console.log('Something went wrong')
        }
       })
  }

  return (
    <>
      <div className=" relative bg-black  ">
        <div className="flex justify-between">
          <Title
            text="Users"
            className="flex text-center font-bold text-3xl flex-col"
          />
          {/* categories */}
          <div className="flex justify-start">
            <ul className="pl-3">
              <li>
                <label className="btn bg-red-500 text-white p-2 rounded-sm border border-dotted m-2">
                  Availability
                </label>

                <button
                  type="radio"
                  className=" text-white p-2 rounded-sm border border-dotted m-2"
                  onClick={() => handleAvailability(true)}
                >
                  True
                </button>
                <button
                  type="radio"
                  className=" text-white p-2 rounded-sm border border-dotted m-2"
                  onClick={() => handleAvailability(false)}
                >
                  False
                </button>
              </li>
            </ul>
          </div>
          <div className="flex justify-start">
            <ul className="pl-3">
              <li>
                <label className="btn bg-red-500 text-white p-2 rounded-sm border border-dotted m-2">
                  Gender
                </label>

                <button
                  type="radio"
                  className=" text-white p-2 rounded-sm border border-dotted m-2"
                  onClick={() => handleGender("Male")}
                >
                  Male
                </button>
                <button
                  type="radio"
                  className=" text-white p-2 rounded-sm border border-dotted m-2"
                  onClick={() => handleGender("Female")}
                >
                  Female
                </button>
              </li>
            </ul>
          </div>
          <div className="flex justify-start">
            <ul className="pl-3">
              <li>
                <label className="btn bg-red-500 text-white p-2 rounded-sm border border-dotted m-2">
                  Domain
                </label>

                <button
                  type="radio"
                  className=" text-white p-2 rounded-sm border border-dotted m-2"
                  onClick={() => handleDomain("Finance")}
                >
                  Finance
                </button>
                <button
                  type="radio"
                  className=" text-white p-2 rounded-sm border border-dotted m-2"
                  onClick={() => handleDomain("Marketing")}
                >
                  Marketing
                </button>
                <button
                  type="radio"
                  className=" text-white p-2 rounded-sm border border-dotted m-2"
                  onClick={() => handleDomain("Sales")}
                >
                  Sales
                </button>
                <button
                  type="radio"
                  className=" text-white p-2 rounded-sm border border-dotted m-2"
                  onClick={() => handleDomain("IT")}
                >
                  IT
                </button>
              </li>
            </ul>

            {/* team */}
          </div>{" "}
          {/* createTeam */}
          <div className="">
            <form className="" onSubmit={handleSubmit} >
              <input
                className="p-3 rounded-md m-2"
                placeholder="Enter a Unique team name"
                onChange={(e) => setTeamname(e.target.value)}
              />
              <button className="p-2 bg-slate-500 text-white" type="submit" >
                Create Team
              </button>
            </form>{
              isteamExist ?( <p>Team Exist</p>) :( " ")
            }
          </div>
        </div>
        {/* users */}
        <div className="flex text-center justify-center gap-8 flex-wrap">
          {data.map((item) => (
            <Card item={item} ErraseData={(id) => ErraseData(id)} />
          ))}
        </div>
        {/* pagination */}
        <div className="fixed bottom-0 left-[50%] text-center ">
          <button
            className="btn bg-red-500 text-white p-2 m-3 rounded-sm border border-dotted"
            onClick={handlePrevios}
          >
            Previos
          </button>
          <button
            className="btn bg-red-500 text-white p-2 rounded-sm border border-dotted m-2"
            onClick={handleNext}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
