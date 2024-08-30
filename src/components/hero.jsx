import React from 'react';
import { FaPlay } from "react-icons/fa";


const Hero = () => {
  return (
    <div className=' h-1/2  mx-4 md:mx-14 flex flex-col md:flex-row p-5 items-center'>
      <div className='items-center relative ps-3 '>
        <h1 className='text-7xl font-bold justify-center text-center text-gray-900 '>Chain Donation</h1>
        <h1 className='text-4xl font-bold justify-center text-center text-gray-900'>Fundraising for people and causes you care.</h1>
        <p className='text-lg text-gray-600 w-[600px]'>Donate to charity and help make a difference.Donate to charity and help make a difference.Donate to charity and help make a difference.</p>
        <div className='flex mx-10 mt-10 '>
        <div className='border-solid px-5 py-3 rounded w-fit bg-orange-400'>

        <button className='text-white'>Donate Now</button>
      </div>
        <div className='flex flex-wrap mt-3 mx-4'><i className='mt-1 mx-2'><FaPlay /></i><p>How it works</p></div>
      </div>
      </div>
     

      <div className='h-[78vh] md:w-1/2 mt-4 md:mt-0 p-4 relative'>
        <img
          src="https://i.pinimg.com/564x/8b/22/38/8b2238237939efc6a7ac4b31c2a90bd5.jpg"
          alt="Inspiring image"
          className='h-[78vh] w-[37vw] object-fit object-scale-down rounded-lg'
        />
      </div>
    </div>
  );
}

export default Hero;