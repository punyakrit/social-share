
"use client";
import React from "react";
import { toast, Toaster } from 'sonner';

const Contact = () => {
  const handleSubmit = () => {
    // Simulate form submission
    try {
      // Simulate success
      toast.success('Message sent successfully!', {
        duration: 4000, // Duration in milliseconds (4 seconds)
      });
      // Optionally, handle form reset or other actions here
    } catch (error) {
      // Simulate error
      toast.error('Failed to send message. Please try again later.', {
        duration: 4000, // Duration in milliseconds (4 seconds)
      });
    }
  };

  return (
    <div className="main">
      <Toaster richColors position="bottom-right" />
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
                className="px-2 py-3 text-white bg-gray-900 w-full text-sm focus:border-[#333] outline-none"
              />
              <input
                type="text"
                placeholder="Street"
                className="px-2 py-3 text-white bg-gray-900 w-full text-sm  focus:border-[#333] outline-none"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="City"
                  className="px-2 py-3 bg-gray-900 w-full text-sm text-white focus:border-[#333] outline-none"
                />

                <input
                  type="text"
                  placeholder="Postcode"
                  className="px-2 py-3 bg-gray-900 w-full text-sm text-white focus:border-[#333] outline-none"
                />
              </div>
              <input
                type="number"
                placeholder="Phone No."
                className="px-2 py-3 bg-gray-900 text-white w-full text-sm focus:border-[#333] outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="px-2 py-3 bg-gray-900 text-white w-full text-sm focus:border-[#333] outline-none"
              />

              <textarea
                placeholder="Write Message"
                className="px-2 pt-3 bg-gray-900 text-white w-full text-sm focus:border-[#333] outline-none"
              ></textarea>
            </div>
            <button
              type="button"
              className="mt-8 flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semibold bg-black text-slate-200 hover:bg-purple-500 hover:text-black"
              onClick={handleSubmit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </button>
          </form>
          <ul className="mt-4 text-slate-200 flex justify-center lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
            <li className="flex items-center hover:text-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 479.058 479.058"
              >
                <path
                  d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                  data-original="#000000"
                />
              </svg>
              <a
                href="javascript:void(0)"
                className="text-current text-sm ml-3"
              >
                <strong>socialshare@gmail.com</strong>
              </a>
            </li>
            <li className="flex items-center text-current hover:text-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 482.6 482.6"
              >
                <path
                  d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-45.5 1.1-.9 2.1-1.7 3-2.5 4.8-4.4 9.7-8.9 14.8-13.8 3-2.8 6-5.8 8.8-8.8l.2-.2c11.8-11.8 17.7-25.2 17.2-39.5-.5-14.8-6.9-28.9-19.2-42.2l-60-60c-21.5-21.5-49.8-21.5-71.5 0-6.6 6.6-13.1 13.1-19.5 19.6-.2.2-.4.4-.5.6-14.1 16.3-23.8 36-25.3 58.8-2.8 42.4 14.3 90.3 52.4 143.9zm-68.6-142c1.2-18.4 8.1-35.2 20.6-49.7.1-.1.2-.2.3-.4 6.1-6.4 12.4-12.6 18.7-18.8 10.6-10.6 16.4-10.7 27.1.1l60 60.1c15.3 15.3 16.2 30.4 2.5 43.1-2.8 2.7-5.7 5.5-8.7 8.3-5.2 4.8-10.5 9.6-15.3 14.1-8.8 8.1-11.3 20.7-7.1 31.7 8.1 21 24.8 49.2 33.5 60.6l.3.4c29.9 36.9 61.1 66.2 96.1 88.1 4.5 2.8 9.2 5 13.8 7.3 3.7 1.9 7.4 3.8 11.1 5.7 11.2 5.8 25 2.8 33.5-5.8l49.2-49.2c10.5-10.5 20.6-10.6 31.1-.1l60.1 60.1c10.8 10.8 10.8 16.5.1 27.4-4.6 4.7-9.3 9.3-13.9 13.8-6.8 6.4-13.1 12.2-19 20-15.3 18.4-33.5 21.7-62.2 19.7-33.8-2.2-65.3-15.7-87.6-26.4-62.2-29.5-116.6-72.8-161.1-128.5-35.4-43-50.4-85.8-47.8-126.5z"
                  data-original="#000000"
                />
              </svg>
              <a
                href="javascript:void(0)"
                className="text-current text-sm ml-3"
              >
                <strong>+44 7123456789</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
