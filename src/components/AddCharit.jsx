import React, { useState } from "react";
import { ethers } from "ethers";
import NavButton from "./NavButton";
import Modal from "react-modal";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase"; // Ensure correct Firebase imports
import contractABI from "../abis/contractABI"; // ABI import

const contractAddress = "0x62a1eD7474D175D7AEB1FA1FB93a27818f7c583d";

const AddCharity = () => {
  const [charityData, setCharityData] = useState({
    ownerAddress: "",
    name: "",
    description: "",
    goal: "",
    min: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setCharityData({
      ...charityData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        if (typeof window.ethereum === "undefined") {
            throw new Error("MetaMask is not installed.");
        }

        await window.ethereum.request({ method: "eth_requestAccounts" });

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
        );

        const goalInUnits = ethers.parseUnits(charityData.goal, "ether");
        const minInUnits = ethers.parseUnits(charityData.min, "ether");

        const transaction = await contract.addCharity(
            charityData.ownerAddress,
            charityData.name.trim(),
            charityData.description.trim(),
            goalInUnits,
            minInUnits
        );

        await transaction.wait();

        // Use the charity's name as the document ID
        const charityDocRef = doc(db, "charities", charityData.name.trim());

        await setDoc(charityDocRef, {
            name: charityData.name.trim(),
            description: charityData.description.trim(),
            goal: charityData.goal.trim(),
            min: charityData.min.trim(),
            ownerAddress: charityData.ownerAddress.trim(),
            timestamp: new Date(),
        });

        setIsModalOpen(true);
    } catch (error) {
        console.error("Error adding charity:", error);
        alert("Error adding charity! Check the console for details.");
    }
};

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex bg-gray-300">
      <div>
        <NavButton />
      </div>

      <div className="flex w-auto flex-col items-center justify-center h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-bold mb-4">Add a Charity</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Charity Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={charityData.name}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="ownerAddress"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Contract Account Number:
              </label>
              <input
                type="text"
                id="ownerAddress"
                name="ownerAddress"
                value={charityData.ownerAddress}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={charityData.description}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="goal"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Goal:
              </label>
              <input
                type="text"
                id="goal"
                name="goal"
                value={charityData.goal}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="min"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Minimum Donation:
              </label>
              <input
                type="text"
                id="min"
                name="min"
                value={charityData.min}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <input
                type="submit"
                value="Submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              />
              <input
                type="reset"
                value="Reset"
                onClick={() =>
                  setCharityData({
                    name: "",
                    description: "",
                    goal: "",
                    min: "",
                    ownerAddress: "", // Correct property name
                  })
                }
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              />
            </div>
          </form>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Charity Details"
          className="Modal"
          overlayClassName="Overlay"
        >
          <h2 className="text-3xl font-bold mb-4">
            Charity Added Successfully!
          </h2>
          <p className="text-lg font-bold mb-2">
            <strong>Name:</strong> {charityData.name}
          </p>
          <p className="text-lg font-bold mb-2">
            <strong>Description:</strong> {charityData.description}
          </p>
          <p className="text-lg font-bold mb-2">
            <strong>Goal:</strong> {charityData.goal} ETH
          </p>
          <p className="text-lg font-bold mb-2">
            <strong>Minimum Donation:</strong> {charityData.min} ETH
          </p>
          <p className="text-lg font-bold mb-2">
            <strong>Contract Account Number:</strong>{" "}
            {charityData.ownerAddress}
          </p>
          <button
            onClick={closeModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default AddCharity;
