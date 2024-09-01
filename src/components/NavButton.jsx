import React from 'react';

const NavButton = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
    <div className="p-4">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
    </div>
    <ul className="mt-4">
      <li className="p-4 hover:bg-gray-700"><a href="/dashboard">Overview</a></li>
      <li className="p-4 hover:bg-gray-700"><a href="/DonationTable">Donations</a></li>
      <li className="p-4 hover:bg-gray-700"><a href="/Charity">Projects</a></li>
      <li className="p-4 hover:bg-gray-700"><a href="#">Back Website</a></li>
    </ul>
  </div>
  );
};

export default NavButton;
