import React from 'react';  

const Hero = () => {
  return (
    <div className='border-2 rounded-xl h-1/2  mx-4 md:mx-14 flex flex-col md:flex-row p-4 items-center'>
      <div className='flex flex-col items-center md:items-start w-full md:w-1/2'>
        <div className='w-full md:w-[600px] object-contain bg-red-500 flex items-center justify-center'>
          <h2 className='text-white text-2xl md:text-4xl font-bold'>Donate Happy</h2>
        </div>
        <div className='flex flex-col h-full md:flex-row mt-4'>
          <div className='md:mr-2'>
            <img
              src="https://www.investopedia.com/thmb/SlThGdKuU_d6tVNShcUYodua0cM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1173117669-baa23a3889054f828aebc58f9de136b6.jpg"
              alt="Charitable donation"
              className='w-full h-auto object-cover'
            />
          </div>
          <div className='md:ml-2 mt-2 md:mt-0'>
            <img
              src="https://www.investopedia.com/thmb/SlThGdKuU_d6tVNShcUYodua0cM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1173117669-baa23a3889054f828aebc58f9de136b6.jpg"
              alt="Supporting community"
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </div>
      
      
      <div className='w-full md:w-1/2 mt-4 md:mt-0 p-4'>
        <img
          src="https://i.pinimg.com/564x/8b/22/38/8b2238237939efc6a7ac4b31c2a90bd5.jpg"
          alt="Inspiring image"
          className='w-full h-auto object-cover'
        />
      </div>
    </div>
  );
}

export default Hero;