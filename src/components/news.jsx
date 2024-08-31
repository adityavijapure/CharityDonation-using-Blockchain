import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import NavButton from './NavButton';

const AddNewsBlog = () => {
  const [newsData, setNewsData] = useState({
    title: '',
    description: '',
    date: '',
    image: null,
  });

  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setNewsData({
        ...newsData,
        image: e.target.files[0],
      });
    } else {
      setNewsData({
        ...newsData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
  
    try {
      let imageUrl = '';
  
      if (newsData.image) {
        const imageRef = ref(storage, `newsBlogs/${newsData.image.name}`);
        const uploadTask = uploadBytesResumable(imageRef, newsData.image);
  
        await new Promise((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            null,
            (error) => {
              reject(error);
            },
            () => {
              resolve();
            }
          );
        });
  
        imageUrl = await getDownloadURL(imageRef);
      }
  
      await addDoc(collection(db, 'newsBlogs'), {
        title: newsData.title,
        description: newsData.description,
        date: newsData.date,
        imageUrl,
      });
  
      alert('News blog added successfully!');
      setNewsData({ title: '', description: '', date: '', image: null });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error adding news blog.');
    } finally {
      setIsUploading(false);
    }
  };
  

  return (
    <>

    <div className='flex '>
        <NavButton/>
    
    <div className="max-w-md mx-auto p-4 mt-32 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Add a News Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newsData.title}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            id="description"
            name="description"
            value={newsData.description}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={newsData.date}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">News Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button type="submit" disabled={isUploading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {isUploading ? 'Uploading...' : 'Submit'}
        </button>
      </form>
    </div>
    </div>
    </>
  );
};

export default AddNewsBlog;