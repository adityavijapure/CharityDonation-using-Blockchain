import React from 'react';
import CardDetitle from '../contast';

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 md:gap-8">
      {CardDetitle.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[400px] md:w-[550px] bg-white shadow-lg rounded-2xl flex flex-col md:flex-row overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="w-full h-48 md:w-[250px] md:h-auto">
            <img
              src="https://i.pinimg.com/564x/9f/8b/aa/9f8baa6737c714a02f723c8f1ca8eb7a.jpg"
              alt="cardImg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 md:w-[300px] flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-green-600">{item.fundingPercentage}% Funded</h3>
                <progress className="rounded-full w-full h-2 mt-2" value={item.fundingPercentage} max="100"></progress>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-4">
                <div className="w-20 p-2 bg-gray-50 rounded-xl text-center">
                  <h4 className="text-lg md:text-xl font-bold text-gray-700">{item.goal}</h4>
                  <p className="text-xs text-gray-500">Goal</p>
                </div>
                <div className="w-20 p-2 bg-gray-50 rounded-xl text-center">
                  <h4 className="text-lg md:text-xl font-bold text-gray-700">{item.Min}</h4>
                  <p className="text-xs text-gray-500">Minimum</p>
                </div>
                <div className="w-20 p-2 bg-gray-50 rounded-xl text-center">
                  <h4 className="text-lg md:text-xl font-bold text-gray-700">{item.currentamount}</h4>
                  <p className="text-xs text-gray-500">Raised</p>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <button className="w-full h-10 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                  Discover More
                </button>
                <button className="w-full h-10 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors">
                  Start Donating
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
