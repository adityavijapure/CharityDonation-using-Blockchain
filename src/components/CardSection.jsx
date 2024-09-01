import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Cards from './Cards';
import contractABI from '../abis/contractABI.json'; 

const contractAddress = '0x358AA13c52544ECCEF6B0ADD0f801012ADAD5eE3'; 

const CardSection = () => {
  const [charities, setCharities] = useState([]);

 

  return (
    <div className='mx-14 mt-10 min-h-screen'>
      <Cards cardData={charities} />
    </div>
  );
};

export default CardSection;
