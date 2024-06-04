"use client"
import { signIn } from "next-auth/react";
import React from "react";
import './Appbarstyle.css';
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
        className="pb-6 text-xl text-slate-300 font-semibold py-2 px-6 text-center border-b-2 md:border-b-0 border-slate-500 md:hover:text-slate-300 md:hover:bg-gray-900 neon-hover"
        onClick={handleSignIn}
      >
        Register
      </div>
    </div>
  );
}

export default GoogleLoginButton;
