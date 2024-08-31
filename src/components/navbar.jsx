import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import '../styles/style.css';

const Navbar = () => {
  return (
    <div className="mx-32 py-4 flex justify-between items-center">
      <div className="flex items-center gap-20">
        <h2 className="text-3xl font-bold">LOGO</h2>

        <div className='hidden max-sm:block'>
          
        </div>

        <div className=' max-sm:hidden'>
          <ul className="flex gap-14 text-lg text-gray-600 font-semibold">
            <li>
              <Link to="/" className="hover:text-black transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/project" className="hover:text-black transition duration-300">
                Project
              </Link>
            </li>
            <li>
              <Link to="/myinvest" className="hover:text-black transition duration-300">
                My Invest
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-black transition duration-300">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-black transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex gap-4">
        <button 
          className="text-black px-4 py-2 rounded font-bold hover:bg-gray-100 transition duration-300"
          aria-label="Login"
        >
          Login
        </button>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-600 transition duration-300"
          aria-label="Profile"
        >
          <CgProfile className='scale-150'/>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
