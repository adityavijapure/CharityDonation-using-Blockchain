import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import '../styles/style.css'
import { BiLeftArrowAlt } from "react-icons/bi";
const NavButton = () => {
  return (
    <div className='leftbox'>
    <div className='logo'>
        <img src={logo} className="w-5/12" />
    </div>
      <div className='menuBox'>
       <div > 
        <ul className='menuList' >
       <Link to ='/Dashboard' className='Link'>
            <li>
               <i >
                <MdDashboard />
               </i>
               <a >Dashboard</a>
            </li>
        </Link>
        <Link to ='/UpdateProfile' className='Link'>
            <li>
               <i>
                <FaPen />
               </i>
                <a href='#' >Update Profile</a>
            </li>
        </Link>
        <Link to ='/addCharity' className='Link'>
            <li>
               <i>
                <IoMdPersonAdd />
               </i>
               <a href='#' >Add Charity</a>
            </li>
            </Link>
            <Link to ='/blog' className='Link'>
            <li>
               <i>
                <IoMdPersonAdd />
               </i>
               <a href='#' >Add Charity</a>
            </li>
            </Link>
            <Link to ='/' className='Link'> 
            <li>
               <i>
                <BiLeftArrowAlt />
               </i>
               <a href='#' >Back To website</a>
            </li>
            </Link>
            
        </ul>
       </div>
    </div>
</div>
  );
};

export default NavButton;
