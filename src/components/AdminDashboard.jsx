import React from "react";
import BarChartComponent from "./BarChartComponent";
import NavButton from "./NavButton";

const AdminDashboard = () => {
  return (
    <div className="flex w-screen min-h-screen overflow-hidden">
    <NavButton />
    <div className="flex-1 p-6 bg-gray-100 overflow-y-scroll w-screen h-screen ">
      <h1 className="text-3xl font-bold">Charity Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Total Donations</h2>
          <p className="text-2xl"> ETH 15,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Active Projects</h2>
          <p className="text-2xl">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">New Donors</h2>
          <p className="text-2xl">150</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Donations Overview</h2>
        <BarChartComponent /> 
        </div>
      
    </div>
  </div>
  );
};

export default AdminDashboard;
