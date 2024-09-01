import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { ethers } from 'ethers';
import charityABI from "../abis/contractABI.json";

const CONTRACT_ADDRESS = '0x55D5a9A9D7c3810DBe154955889Dd04537137d1a';

const Cards = () => {
  const [charities, setCharities] = useState([]);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);
  const [donating, setDonating] = useState(false);
  

  useEffect(() => {
    const fetchCharities = async () => {
      if (!contract) return;

      try {
        const querySnapshot = await getDocs(collection(db, 'charities'));
        const charityData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCharities(charityData);
      } catch (error) {
        console.error("Error fetching charities: ", error);
        alert("Failed to fetch charities. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharities();
  }, [contract]);

  useEffect(() => {
    const initEthereum = async () => {
      if (!window.ethereum) {
        alert("MetaMask is required to use this application. Please install MetaMask and try again.");
        return;
      }

      try {
        const browserProvider = new ethers.BrowserProvider(window.ethereum);
        const signer = await browserProvider.getSigner();
        setProvider(browserProvider);

        const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, charityABI, signer);
        setContract(contractInstance);
      } catch (error) {
        console.error("Error initializing Ethereum: ", error);
        alert("Failed to connect to Ethereum. Please ensure MetaMask is installed and try again.");
      }
    };

    initEthereum();
  }, []);

  const handleDonate = async (id, currentAmount, goal, min) => {
    if (!provider || !contract) {
      alert("Ethereum provider or contract not initialized.");
      return;
    }
  
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
  
      const donationAmount = 0.01;
  
      // // Convert donationAmount to a BigNumber in Wei
      // const donationAmountInWei = ethers.utils.parseEther(donationAmount);
  
      // // Validate donation amount
      // if (isNaN(donationAmountInWei.toString()) || donationAmountInWei.lte(0)) {
      //   alert("Please enter a valid donation amount.");
      //   return;
      // }
  
      // Convert min from ETH to Wei (assuming min is stored in ETH)
      // const minInWei = ethers.utils.parseEther(min.toString());
  
      // if (donationAmountInWei.lt(minInWei)) {
      //   alert(`The minimum donation amount is ${ethers.utils.formatEther(minInWei)} ETH.`);
      //   return;
      // }
  
      // const newAmount = currentAmount + parseFloat(ethers.utils.formatEther(donationAmountInWei));
  
      if (newAmount > goal) {
        alert("Donation exceeds the goal. Please donate a smaller amount.");
        return;
      }
  
      setDonating(true);
  
      
      const tx = await contract.donateToCharity(id, {
        value: donationAmountInWei
      });
  
      await tx.wait();
  
      
      const charityDoc = doc(db, 'charities', id);
      await updateDoc(charityDoc, { currentamount: newAmount });
  
      setCharities(prevCharities =>
        prevCharities.map(charity =>
          charity.id === id ? { ...charity, currentamount: newAmount } : charity
        )
      );
  
      alert("Donation successful!");
    } catch (error) {
      console.error("Error processing donation: ", error);
      alert("An error occurred during the donation process. Please try again.");
    } finally {
      setDonating(false);
    }
  };
  
  if (loading) {
    return <div>Loading charities...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 md:gap-8">
      {charities.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[400px] md:w-[550px] bg-white shadow-lg rounded-2xl flex flex-col md:flex-row overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="w-[250px]">
            <img src="https://i.pinimg.com/564x/9f/8b/aa/9f8baa6737c714a02f723c8f1ca8eb7a.jpg" alt="cardImg" className="w-full h-full object-cover" />
          </div>
          <div className="p-4 md:w-[300px] flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-green-600">
                  {((item.currentamount / item.goal) * 100).toFixed(2)}% Funded
                </h3>
                <progress className="rounded-full w-full h-2 mt-2" value={((item.currentamount / item.goal) * 100).toFixed(2)} max="100"></progress>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-4">
                <div className="w-20 p-2 bg-gray-50 rounded-xl text-center">
                  <h4 className="text-lg md:text-xl font-bold text-gray-700">{item.goal} ETH</h4>
                  <p className="text-xs text-gray-500">Goal</p>
                </div>
                <div className="w-20 p-2 bg-gray-50 rounded-xl text-center">
                  <h4 className="text-lg md:text-xl font-bold text-gray-700">{item.min} ETH</h4>
                  <p className="text-xs text-gray-500">Minimum</p>
                </div>
                <div className="w-20 p-2 bg-gray-50 rounded-xl text-center">
                  <h4 className="text-lg md:text-xl font-bold text-gray-700">{item.currentamount} ETH</h4>
                  <p className="text-xs text-gray-500">Raised</p>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleDonate(item.id, item.currentamount, item.goal, item.min)}
                  className="w-full h-10 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors"
                  disabled={donating}
                >
                  {donating ? "Processing..." : "Start Donating"}
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
