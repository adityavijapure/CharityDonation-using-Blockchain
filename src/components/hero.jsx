import React from 'react';
import { FaPlay } from "react-icons/fa";
import HeroSection from './HeroSection';


const Hero = () => {
  return (
    <div className=' h-1/2  mx-4 md:mx-14 flex flex-col md:flex-row p-5 items-center'>
      <div className=' relative  '>
        <h1 className='text-7xl font-bold justify-start text-start text-gray-900 '>Chain <span className='text-red-300'> DONATION</span> </h1>
        <h1 className='text-5xl font-bold justify-center mt-4 text-gray-900'>Fundraising for people and causes you care.</h1>
        <p className='text-lg text-gray-600 w-[600px] mt-5'>Donate to charity and help make a difference.Donate to charity and help make a difference.Donate to charity and help make a difference.</p>
        <div className='flex mx-10 mt-10 '>
        <div className='border-solid px-5 py-3 rounded w-fit  cursor-context-menu bg-orange-400'>

        <button className='text-white  outline-none'>Donate Now</button>
      </div>
        <div className='flex flex-wrap mt-3 mx-4'><i className='mt-1 mx-2'><FaPlay /></i><p>How it works</p></div>
      </div>
      </div>
     

      <div className='h-[78vh] md:w-1/2 mt-4 md:mt-0 p-4 relative'>
        <HeroSection/>
      </div>
    </div>
  );
}

export default Hero;