import React from "react";
import NavButton from "./NavButton";

const AdminDashboard = () => {
  return (
    <div className="flex  h-screen overflow-hidden ">
      <NavButton/>
    <div className="w-full  h-screen overflow-hidden p-5 mt-24 ">
      <div className="flex gap-4">
        <div className="w-[220px] h-[220px]  bg-gray-300 rounded-[60px]"></div>
        <div className="w-[220px] h-[220px]  bg-gray-300 rounded-[60px]"></div>
        <div className="w-[220px] h-[220px]  bg-gray-300 rounded-[60px]"></div>
        <div className="w-[220px] h-[420px] ml-[50px] bg-gray-300 rounded-[60px]"> </div>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
