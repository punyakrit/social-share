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
        className="border px-4 cursor-pointer py-2 font-bold rounded-2xl"
        onClick={handleSignIn}
      >
        Register
      </div>
    </div>
  );
}

export default GoogleLoginButton;
