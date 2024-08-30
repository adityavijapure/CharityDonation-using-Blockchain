import React from "react";
import logo from "../assets/logo.png";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavButton = () => {
  return (
    <div className="w-1/6 h-screen bg-gray-700 text-white">
      <div className="w-full h-auto flex justify-between px-3 mb-5  items-center">
        <img src={logo} alt="logo" className="w-[70px]  p-2" />
        <h2>CHAIN DONATION</h2>
      </div>
      <div className="mt-5">
        <div className="flex relative align-middle items-center gap-6 text-[20px] w-full justify-center hover:border-l-4  hover:bg-slate-800">
          <i>
            <FaHome />
          </i>
          <a>Home</a>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex relative align-middle items-center gap-6 text-[20px] w-full justify-center hover:border-l-4  hover:bg-slate-800">
          <i>
            <FaHome />
          </i>
          <a>EDIT PROFILE</a>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex relative align-middle items-center gap-6 text-[20px] w-full justify-center hover:border-l-4  hover:bg-slate-800">
          <i>
            <FaHome />
          </i>
          <a>ADD  CHARITY</a>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex relative align-middle items-center gap-6 text-[20px] w-full justify-center hover:border-l-4  hover:bg-slate-800">
          <i>
            <FaHome />
          </i>
          <a>Home</a>
        </div>
      </div>
    </div>
  );
};

export default NavButton;
