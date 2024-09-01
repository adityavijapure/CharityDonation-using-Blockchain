import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { db } from '../firebase'; // Adjust import path according to your project structure
import { collection, getDocs } from 'firebase/firestore';
import defaultImg from '../assets/avatar.jpg'; // Import the default image

const Blog = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'newsBlogs'));
        const newsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news: ', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div key={item.id} className="flex flex-col bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full h-48">
                <img 
                  src={item.imageUrl || defaultImg} // Use default image when imageUrl is not available
                  alt="news img"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.title || 'No Title'}</h3>
                <p className="text-gray-700 mb-4">{item.description || 'No description available.'}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-600 transition duration-300">
                  See more...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
