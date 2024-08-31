import React, { useState } from 'react';
import NavButton from './NavButton';

function ProfileUpdate() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    profilePicture: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
  };  
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="container w-70 h-[90vh] md:p-6 flex">
        <div>
            <NavButton/>
        </div>
        <div className="flex flex-col items-center m-12">
      <h2 className="text-3xl font-bold mb-2">Update Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          Name:
          <input
            type="text"
            name="name"
            value={profile.name} placeholder='Name'
            onChange={handleChange}
            className="block w-full border-black border-b-2 p-2 pl-4 text-sm text-gray-700"
          />
        </label>
        <br />
        <label className="block">
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="block w-full border-black border-b-2 p-2 pl-4 text-sm text-gray-700"
          />
        </label>
        <br />
        <label className="block">
          Phone:
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="block w-full border-black border-b-2 p-2 pl-4 text-sm text-gray-700"
          />
        </label>
        <br />
        <label className="block">
          Address:
          <textarea
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="block w-full border-black border-b-2 p-2 pl-4 text-sm text-gray-700"
          />
        </label>
        <br />
        <label className="block">
          Profile Picture:
          <input
            type="file"
            name="profilePicture"
            onChange={(e) => {
              setProfile({ ...profile, profilePicture: e.target.files[0] });
            }}
            className="block w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <br />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Profile
        </button>
      </form>
      </div>
    </div>
  );
}

export default ProfileUpdate;