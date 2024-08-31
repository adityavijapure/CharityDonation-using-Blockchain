import React from 'react';
import img from '../assets/bhai-Photoroom.png';

const HeroSection = () => {
  return (
    <div className='relative w-[30vw] overflow-hidden h-[60vh] flex items-center justify-center'>
      <div className='relative w-[30vw] h-[60vh]'>
      
        <div className='border bg-indigo-300 top-9 rounded-full w-[100%] h-[100%] absolute z-10'><img 
            className='z-20 h-auto w-auto   '
            
            src={img} 
            alt="BHAI KA Photo"
          /></div>
      </div>
    </div>
  );
}

export default HeroSection;