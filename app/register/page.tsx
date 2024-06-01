// // RegisterPage.tsx
"use client"

import React, { useState } from "react";
import Image from "next/image";
import onb from "@/public/on.webp";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e:any) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registering...");
  };

  return (
    <div className="flex px-20 h-screen items-center text-white">
      <div className="w-1/2">
        <div>
          <div className="text-6xl font-bold">Register</div>
          <div className="py-4 text-white/50">
            Choose a unique username to personalize your ShareHub page.
          </div>
          <form onSubmit={handleRegister} className="grid w-full max-w-sm items-center py-3 gap-1.5">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="rounded-xl px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500 bg-transparent text-white" // Adjusted text color and background color
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="rounded-xl px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500 bg-transparent text-white" // Adjusted text color and background color
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="rounded-xl px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500 bg-transparent text-white" // Adjusted text color and background color
            />
            <button type="submit" className="bg-blue-500 text-white rounded-xl px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/2">
        <Image src={onb} className="rounded-3xl m-6" alt="image" />
      </div>
    </div>
  );
}
