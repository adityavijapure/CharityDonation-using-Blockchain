import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Cards from './Cards';
import contractABI from '../abis/contractABI.json'; 

const contractAddress = '0x358AA13c52544ECCEF6B0ADD0f801012ADAD5eE3'; 

const CardSection = () => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    const fetchCharities = async () => {
      try {
        if (typeof window.ethereum === 'undefined') {
          console.error('MetaMask is not installed.');
          return;
        }

        
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, contractABI, provider);

        
        const numberOfCharities = await contract.getNumberOfCharities();
        const charityArray = [];

        // Iterate over each charity and fetch its details
        for (let i = 0; i < numberOfCharities.toNumber(); i++) {
          const charity = await contract.getCharity(i); // Ensure correct method name
          
          // Handle case where charity properties might be undefined
          charityArray.push({
            id: i,
            title: charity.name || 'No Name',
            description: charity.description || 'No Description',
            fundingPercentage: charity.goal > 0 ? (charity.currentAmount / charity.goal) * 100 : 0,
            goal: ethers.formatUnits(charity.goal || '0', 'ether'),
            min: ethers.formatUnits(charity.minDonation || '0', 'ether'),
            currentAmount: ethers.formatUnits(charity.currentAmount || '0', 'ether'),
          });
        }

        console.log(charityArray)
        setCharities(charityArray);
      } catch (error) {
        console.error('Error fetching charities:', error);
      }
    };

    fetchCharities();
  }, []);

  return (
    <div className='mx-14 mt-10'>
      <Cards cardData={charities} />
    </div>
  );
};

export default CardSection;
