import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar.jsx";
import Content from "../components/Content.jsx";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ show, setShow }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userDetails")));
  }, []);

  console.log(userData);

  const [page, setPage] = useState("customers");

  const props = { show, setShow, setPage, userData };

  return (
    <div className="w-full h-screen">
      <div className="flex flex-row">
        <div
          className={`${show ? "w-[500px]" : "w-0"} ease-in-out duration-300`}
        >
          <SideBar {...props} page={page} setPage={setPage} />
        </div>

        <div className="w-full">
          <Content {...props} page={page} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
