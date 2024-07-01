"use client";


import React from 'react';
import StyledButton from '../ui/StyledButton'; 


const Contact = () => {
  return (
    <div className="main">
      <h2 className="text-gray-900 mt-46 mb-36 text-center text-2xl">..</h2>
      <div className="grid md:grid-cols-1 mb-56 gap-16 mt-0 items-center relative overflow-hidden p-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-gray-800 text-[#333] my-6 font-[sans-serif] before:absolute before:right-0 before:w-[0px] before:bg-gray-900 before:h-full max-md:before:hidden">
        <div>
          <h2 className="text-3xl font-extrabold text-purple-400">
            Get In Touch
          </h2>
          <p className="text-sm text-slate-300 mt-3">
            Have a specific inquiry or looking to explore new opportunities? Our
            experienced team is ready to engage with you.
          </p>
          <form>
            <div className="space-y-4 mt-8">
              <input
                type="text"
                placeholder="Full Name"
                className="px-2 py-3 text-white bg-gray-900 w-full text-sm focus:border-[#333] outline-none rounded-md"
              />
              <input
                type="text"
                placeholder="Street"
                className="px-2 py-3 text-white bg-gray-900 w-full text-sm  focus:border-[#333] outline-none rounded-md"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="City"
                  className="px-2 py-3 bg-gray-900 w-full text-sm text-white focus:border-[#333] outline-none rounded-md"
                />

                <input
                  type="text"
                  placeholder="Postcode"
                  className="px-2 py-3 bg-gray-900 w-full text-sm text-white focus:border-[#333] outline-none rounded-md"
                />
              </div>
              <input
                type="number"
                placeholder="Phone No."
                className="px-2 py-3 bg-gray-900 text-white w-full text-sm focus:border-[#333] outline-none rounded-md"
              />

              <input
                type="email"
                placeholder="Email"
                className="px-2 py-3 bg-gray-900 text-white w-full text-sm focus:border-[#333] outline-none rounded-md"
              />

              <textarea
                placeholder="Write Message"
                className="px-2 pt-3 bg-gray-900 text-white w-full text-sm focus:border-[#333] outline-none rounded-md"
              ></textarea>
            </div>
            <StyledButton />

          </form>
          
        </div>
       
      </div>
    </div>
  );
};

export default Contact;
