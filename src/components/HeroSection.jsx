import React from 'react';
import img from '../assets/bhai-Photoroom.png';

const HeroSection = () => {
  return (
    <div className='relative w-[30vw] overflow-hidden h-[70vh] flex items-center justify-center'>
      <div className='relative w-[70vw] h-[68vh]'>
        
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
          
        </div>
        <div className='border bg-purple-700 rounded-full w-[100%] h-[100%] absolute z-10'><img 
            className='z-20 h-auto w-auto '
            style={{
              clipPath: 'circle(50% at 50% 70%)',
            }}
            src={img} 
            alt="BHAI KA Photo"
          /></div>
      </div>
    </div>
  );
}

export default HeroSection;