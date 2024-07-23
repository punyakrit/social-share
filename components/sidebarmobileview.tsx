"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";

export const SidebarMobileView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white">
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`cursor-pointer fa ${isOpen ? "" : "fa-bars"}`}
        >
          {/* <HiMenuAlt1 className="text-3xl transition-colors duration-300" /> */}
        </div>
        <div
          className={`fixed inset-0 bg-gradient-to-t from-[#193054] to-[#091b38] text-white shadow-lg transition-transform duration-300 ease-in-out ${
            isOpen ? "transform translate-y-0" : "transform -translate-y-full"
          } pb-[26.5rem] px-4 pt-2`}
        >
          <div
            className="absolute top-5 right-5 cursor-pointer text-xl text-white  fa fa-times"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="mt-12">
            <div
              className="p-4 hover:text-gray-400 mx-auto border-2 border-slate-500 rounded-md cursor-pointer transition-colors duration-300 text-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href="/">Home</Link>
            </div>
            <div
              className="p-4 hover:text-gray-400 mt-4 border-2 border-slate-500 rounded-md cursor-pointer transition-colors duration-300 text-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href="/about">About</Link>
            </div>
            <div
              className="p-4 hover:text-gray-400 mt-4 border-2 border-slate-500 rounded-md cursor-pointer transition-colors duration-300 text-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href="/contact">Contact</Link>
            </div>
            <div
              className="p-4 hover:text-gray-400 mt-4 border-2 border-slate-500 rounded-md cursor-pointer transition-colors duration-300 text-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href="/contributors">Contributors</Link>
            </div>
            <div
              className="p-4 hover:text-gray-400 mt-4 border-2 border-slate-500 rounded-md cursor-pointer transition-colors duration-300 text-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href="/faq">FAQs</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
