import React, { useState, useRef } from 'react';
import Navbar from './navbar';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d17ac6a9-e2ac-41ca-872e-4a58e78bf77a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setOpen(true);
      form.current.reset(); // Reset the form
    }
  };

  return (
    <>
    <div><Navbar/></div>
    <div className="flex justify-center items-center -pt-8">
        <div className='w-fit content-start'>
            <img className='ms-8 h-fit w-fit scale-90' src="https://img.freepik.com/free-vector/computer-with-online-charity-donation_24877-54509.jpg?t=st=1725093545~exp=1725097145~hmac=6639c670826495a0252ab2389c472797419b9594a35f98154e339bfdfbdd9e3d&w=740" alt="Donation image" />
        </div>
      <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
        
        <form ref={form} onSubmit={onSubmit} className="w-full max-w-lg max-h-fit mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-2">Contact</h2>
        <p className="text-lg text-center mb-4">Feel free to reach out to me for any questions or opportunities!</p>
          <h3 className="text-2xl font-bold mb-2">Contact Us 🚀</h3>
          <input type="email" placeholder="Your Email" name="from_email" className="w-full p-2 my-2 pl-10 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
          <input type="text" placeholder="Your Name" name="from_name" className="w-full p-2 my-2 pl-10 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
          <input type="text" placeholder="Subject" name="subject" className="w-full p-2 pl-10 my-2 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
          <textarea placeholder="Message" rows="4" name="message" className="w-full p-2 pl-10 my-2   text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
          <button type="submit" className="w-full p-2 text-lg bg-blue-500 hover:bg-blue-700 text-white rounded-lg focus:outline-none focus:ring">Send</button>
        </form>
        {open && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">Email sent successfully!</span>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Contact;