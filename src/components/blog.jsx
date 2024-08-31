import React from 'react';
import Navbar from './navbar';
import img from '../assets/avatar.jpg';

const Blog = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {Array(6).fill().map((_, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-full border p-4 rounded-xl">
              <div className="flex justify-center items-center relative">
                <div className="h-full w-full flex justify-center items-center">
                  <img src={img} alt="news img" className="object-fit h-48 w-48" />
                </div>
                <div className="flex flex-col ms-7 text-start">
                  <h3 className="font-bold text-start mt-3 text-3xl">here is heading</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore nulla nisi et fuga voluptas repellendus praesentium nam dolores, numquam, natus provident pariatur sed, assumenda quas iure temporibus quos nihil.</p>
                  <button className="cursor-pointer text-blue-500 hover:text-blue-800">see more...</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;