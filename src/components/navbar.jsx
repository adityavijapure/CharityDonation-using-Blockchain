import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
const Navbar = () => {
  return (
   <nav className=" text-[22px]">
    <div className="flex ">
      <Link to="/" className="logo">Chain Donation</Link>
      <ul className="flex gap-5">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="flex">
       login
      </div>
     </div>
 
   </nav>
  );
}

export default Navbar;
