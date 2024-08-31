import React from 'react';
import { FaPlay } from "react-icons/fa";
import HeroSection from './HeroSection';
import "../styles/scroall.css"
import img1 from '../assets/slider1_1.png';
import img2 from '../assets/slider1_2.png';
import img3 from '../assets/slider1_3.png';
import img4 from '../assets/slider1_4.png';
import img5 from '../assets/slider1_5.png';
import img6 from '../assets/slider1_6.png';
import img7 from '../assets/slider1_7.png';
import img8 from '../assets/slider1_8.png';
import img9 from '../assets/slider1_9.png';
import img10 from '../assets/slider1_10.png';

const Hero = () => {
  return (
    <>
    <div className=' mx-4 md:mx-14 flex flex-col md:flex-row items-center'>
      <div className='relative'>
        <h1 className='text-7xl font-bold text-start text-gray-900'>Chain <span className='text-red-300'>DONATION</span></h1>
        <h1 className='text-5xl font-bold mt-4 text-gray-900'>Fundraising for people and causes you care about.</h1>
        <p className='text-lg text-gray-600 mt-5 w-full md:w-[600px]'>Donate to charity and help make a difference.</p>
        <div className='flex mt-10'>
          <div className='px-5 py-3 rounded bg-orange-400 cursor-pointer'>
            <button className='text-white outline-none'>Donate Now</button>
          </div>
          <div className='flex items-center ml-4'>
            <FaPlay className='mr-2' />
            <p>How it works</p>
          </div>
        </div>
      </div>

      <div className='h-[78vh] md:w-1/2 mt-4 md:mt-0 p-4 relative'>
        <HeroSection />
      </div>

      
    </div>
    <div className='w-full '>
    <div className="slider" style={{ "--width": "100px", "--height": "50px", "--quantity": "10" }}>
      <div className="list">
        <div className="item" style={{ "--position": 1 }}><img src={img1} alt="Image 1" /></div>
        <div className="item" style={{ "--position": 2 }}><img src={img2} alt="Image 2" /></div>
        <div className="item" style={{ "--position": 3 }}><img src={img3} alt="Image 3" /></div>
        <div className="item" style={{ "--position": 4 }}><img src={img4} alt="Image 4" /></div>
        <div className="item" style={{ "--position": 5 }}><img src={img5} alt="Image 5" /></div>
        <div className="item" style={{ "--position": 6 }}><img src={img6} alt="Image 6" /></div>
        <div className="item" style={{ "--position": 7 }}><img src={img7} alt="Image 7" /></div>
        <div className="item" style={{ "--position": 8 }}><img src={img8} alt="Image 8" /></div>
        <div className="item" style={{ "--position": 9 }}><img src={img9} alt="Image 9" /></div>
        <div className="item" style={{ "--position": 10 }}><img src={img10} alt="Image 10" /></div>
      </div>
    </div>
  </div>
  </>
  );
}

export default Hero;
