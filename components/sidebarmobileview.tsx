"use client";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";

export const SidebarMobileView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white">
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`cursor-pointer fa ${isOpen ? 'fa-times' : 'fa-bars'}`}
        >
          {/* <HiMenuAlt1 className="text-3xl transition-colors duration-300" /> */}
        </div>
        {isOpen && (
          <div className="fixed inset-0 bg-gray-800 text-white shadow-lg pb-[18.5rem] px-4 pt-2">
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
          </div>
        )}
      </div>
    </div>
  );
};
