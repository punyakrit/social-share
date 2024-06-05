"use client"
import { signIn } from "next-auth/react";
import React from "react";

function GoogleLoginButton() {
  const handleSignIn = async () => {
    const result = await signIn("google", { callbackUrl: "/dashboard" });
    if (result?.error) {
      console.error("Failed to sign in", result.error);
      return;
    }
    
  };

  return (
    <div>
      <div
        className="border border-[2px] px-4 py-2 font-bold rounded-2xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-gradient-to-br from-white via-gray-300 to-gray-400 hover:text-gray-900"
        onClick={handleSignIn}
      >
        Register
      </div>
    </div>
  );
}

export default GoogleLoginButton;