import React, { useState } from 'react';
import { ethers } from 'ethers';
import NavButton from './NavButton';
import contractABI from '../abis/contractABI';
import Modal from 'react-modal';

const contractAddress = '0x358AA13c52544ECCEF6B0ADD0f801012ADAD5eE3';

Modal.setAppElement('#root'); // Set the app element for accessibility

const AddCharity = () => {
  const [charityData, setCharityData] = useState({
    name: '',
    description: '',
    goal: '',
    min: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

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

      // Open modal with charity details
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error adding charity:', error);
      alert('Error adding charity!');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Charity Details"
        >
          <h2>Charity Added Successfully!</h2>
          <p><strong>Name:</strong> {charityData.name}</p>
          <p><strong>Description:</strong> {charityData.description}</p>
          <p><strong>Goal:</strong> {charityData.goal} ETH</p>
          <p><strong>Minimum Donation:</strong> {charityData.min} ETH</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    </div>
  );
};

export default AddCharity;
