import React from "react";
import Navbar from "./navbar";

const CountPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-2">
        <div className="mx-16 my-12 justify-center">
          <img
          className="h-[55vh] w-fit"
            src="https://tse1.mm.bing.net/th?id=OIP.xyp6_qqVBldF4LqQNp0MYQHaFj&pid=Api&P=0&h=220"
            alt="Donation image"
          /> 
        </div>
        <div className="mx-16 my-12 justify-center">
            <h1 className="font-bold text-justify text-6xl my-20 ">CHARITY DONATION</h1>
        </div>
      </div>
      <div>
        <h1>Count Page</h1>
      </div>
    </div>
  );
};

export default CountPage;
