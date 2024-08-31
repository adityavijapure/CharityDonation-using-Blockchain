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
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-100 p-8">
        <div className="lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            className="max-w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
            src="https://img.freepik.com/free-vector/computer-with-online-charity-donation_24877-54509.jpg?t=st=1725093545~exp=1725097145~hmac=6639c670826495a0252ab2389c472797419b9594a35f98154e339bfdfbdd9e3d&w=740"
            alt="Donation image"
          />
        </div>
        <div className="w-full max-w-lg lg:w-1/2 bg-white p-8 rounded-lg shadow-lg animate-fade-in">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 animate-slide-down">Contact</h2>
          <p className="text-lg text-center text-gray-600 mb-8 animate-slide-down">Feel free to reach out to me for any questions or opportunities!</p>
          <form ref={form} onSubmit={onSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                name="from_email"
                className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                name="from_name"
                className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative">
              <textarea
                placeholder="Message"
                rows="4"
                name="message"
                className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform duration-500 hover:scale-105"
            >
              Send
            </button>
          </form>
          {open && (
            <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative animate-slide-up" role="alert">
              <span className="block sm:inline">Email sent successfully!</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
