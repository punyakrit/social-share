"use client";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";

export const SidebarMobileView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white">
      <div className="relative">
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <HiMenuAlt1 className="text-3xl transition-colors duration-300" />
        </div>
        {isOpen && (
          <div className="fixed w-screen mt-4 space-y-5 left-0 bg-gray-800   text-white rounded-md shadow-lg">
            <div
              className="p-2 hover:text-gray-400 border cursor-pointer transition-colors duration-300 text-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href="/about">About</Link>
            </div>
            <div
              className="p-2 hover:text-gray-400 border cursor-pointer transition-colors duration-300 text-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href="/contact">Contact</Link>
            </div>
            <div
              className="p-2 hover:text-gray-400 border cursor-pointer transition-colors duration-300 text-center "
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href="/contributors" className="">
              Contributors
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
