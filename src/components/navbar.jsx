import React from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import '../styles/style.css';
const Navbar = () => {
  return (
    <div className=' mx-14 my-4 flex p-4 justify-evenly  relative'>
      <div className="text-start text-2xl  flex-col gap-4 mb-4">
        <h2 className="h-5">Logo 1</h2>
      </div>
      <nav className='aline '>
        <ul className="flex gap-14 text-lg text-gray-600 font-semibold">
          <li>
            <Link to="/" className="hover:text-black transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-black transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/project" className="hover:text-black transition duration-300">
              Project
            </Link>
          </li>
          <li>
            <Link to="/donate" className="hover:text-black transition duration-300">
              Donate
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-black transition duration-300">
              News & Updates
            </Link>
          </li>
        </ul>
      </nav>
     
      <div className='border rounded-md text-xl bg-blue-400 px-4'>
        <button className='text-white '>Log in</button>
      </div>
    </div>
  );
}

export default Navbar;
