import React, { useState } from 'react';
import { ethers } from 'ethers';
import NavButton from './NavButton';
import contractABI from '../abis/contractABI';

const contractAddress = '0x358AA13c52544ECCEF6B0ADD0f801012ADAD5eE3';

const AddCharity = () => {
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
  
      // Request account access
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
  
      // Wait for transaction confirmation
      await transaction.wait();
  
      // Alert user
      alert('Charity added successfully!');
    } catch (error) {
      console.error('Error adding charity:', error);
      alert('Error adding charity!');
    }
  };
  

  return (
    <div className='flex'>
      <div>
        <NavButton />
      </div>
      <div>
        <h1>Add a Charity</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Charity Name:</label>
          <input type="text" id="name" name="name" value={charityData.name} onChange={handleChange} required />

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={charityData.description} onChange={handleChange} required></textarea>

          <label htmlFor="goal">Goal:</label>
          <input type="text" id="goal" name="goal" value={charityData.goal} onChange={handleChange} required />

          <label htmlFor="min">Minimum Donation:</label>
          <input type="text" id="min" name="min" value={charityData.min} onChange={handleChange} required />

          <input type="submit" value="Submit" />
          <br />
          <input type="reset" value="Reset" onClick={() => setCharityData({ name: '', description: '', goal: '', min: '' })} />
        </form>
      </div>
    </div>
  );
};

export default AddCharity;
