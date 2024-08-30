import React from 'react'
import img from '../assets/bhai-Photoroom.png'

const HeroSection = () => {
  return (
    <div className='relative w-[30vw] overflow-hidden rounded-full h-[60vh]'>
         <img className=' rounded-lg h-[80vh] z-20 absolute' src={img} alt="BHAI KA Photo" />
        <div className='border bg-purple-700 rounded-full w-[30vw] h-[60vh]  z-10 relative  '></div>
       
        <div>  </div>  
        
    </div>
  )
}

export default HeroSection