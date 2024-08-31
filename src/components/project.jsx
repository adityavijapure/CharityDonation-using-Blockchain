import React from "react";
// import FilterTab from "./FilterTab";
import CardSection from "./CardSection";
import Navbar from "./navbar";
import Footer from "./footer";

const Project = () => {
    return (
      <div className="min-h-full">
      {/* <FilterTab/> */}
      <Navbar/>
      <CardSection/>
      <Footer/>
      </div>
    )
  }
  export default Project;