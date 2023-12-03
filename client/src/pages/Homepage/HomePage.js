import React, { useEffect, useState } from "react";
import { Title } from "./Tabs";
import axios from "axios";
import { useSelector } from "react-redux";
import { Card } from "./UserCard";

function HomePage() {
  const [data, setData] = useState([]);
  const searchingData = useSelector((state) => state);

  
  async function GetAllUsers() {
    await axios.get("http://localhost:5000/api/users").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }

  const ErraseData = (id) => {
    const newData = data.filter((item)=>item._id != id)
    setData(newData)
  }

  useEffect(() => {
    if (searchingData === null) {
      GetAllUsers();
    } else {
      setData(searchingData);
    }
  }, [searchingData]);

  return (
    <>
      <div className="bg-black">
        <Title
          text="Users"
          className="flex text-center font-bold text-3xl flex-col"
        />
        <div className="flex text-center justify-center gap-8 flex-wrap">
          {" "}
          {data.map((item) => (
            <Card item={item} ErraseData={(id)=>ErraseData(id)}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
