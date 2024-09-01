import React, { useState } from 'react';
import NavButton from './NavButton';
import contractABI from "../abis/contractABI"; // ABI import
import { ethers } from "ethers";
import { db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

const contractAddress = "0xBe2c8DDD4FA58E07fd55a18D5E4c1C7C84430686";

const ProjectList = () => {
  const [charityData, setCharityData] = useState({
    name: '',
    description: '',
    goal: '',
    min: '',
  });

  const handleChange = (e) => {
    setCharityData({
      ...charityData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (typeof window.ethereum === 'undefined') {
        throw new Error('MetaMask is not installed.');
      }
  
      
      await window.ethereum.request({ method: 'eth_requestAccounts' });
  
      // Create a provider and signer
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
  
      // Create a contract instance
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
      // Check if addCharity is available
      if (!contract.addCharity) {
        throw new Error('addCharity method is not available in the contract.');
      }
  
      // Parse units
      const goalInUnits = ethers.parseUnits(charityData.goal, 'ether');
      const minInUnits = ethers.parseUnits(charityData.min, 'ether');
  
      // Send transaction
      const transaction = await contract.addCharity(
        charityData.name,
        charityData.description,
        goalInUnits,
        minInUnits
      );
  
      await transaction.wait();

      const charityDocRef = doc(db, "charities", charityData.name.trim());

        await setDoc(charityDocRef, {
            name: charityData.name.trim(),
            description: charityData.description.trim(),
            goal: charityData.goal.trim(),
            min: charityData.min.trim(),
            ownerAddress: charityData.ownerAddress.trim(),
            timestamp: new Date(),
        }); 
        
      alert('Charity added successfully!');
    } catch (error) {
      console.error('Error adding charity:', error);
      alert('Error adding charity!');
    }
  };
  return (
    <div className='flex w-screen h-screen'>
      <NavButton/>
      <div className="bg-white w-screen h-screen p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Manage Projects</h2>
        
        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-bold">Project Name</label>
              <input
                type="text"
                name="name"
                value={charityData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter project name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold">Owner Account Address</label>
              <input
                type="text"
                name="ownerAddress"
                value={charityData.ownerAddress}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Add Ether Address"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold">Goal</label>
              <input
                type="text"
                name="goal"
                value={charityData.goal}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter goal amount"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold">MinAmount</label>
              <input
                type="text"
                name="min"
                value={charityData.min}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter MinAmount amount"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold">Description</label>
              <textarea
                name="description"
                value={charityData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter Detailed Description"
                required
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
          > 
            Add Project
          </button>
        </form>

       
      </div>
    </div>
  );
};

export default ProjectList;
