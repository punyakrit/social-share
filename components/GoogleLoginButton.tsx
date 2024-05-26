"use client"
import { signIn } from "next-auth/react";
import React from "react";

function GoogleLoginButton() {
  return (
    <div>
      <div
        className="border  px-4 cursor-pointer py-2 font-bold rounded-2xl"
        onClick={() => signIn("google")}
      >
        Register
      </div>
    </div>
  );
}

export default GoogleLoginButton;
