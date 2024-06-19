"use client";
import React from "react";
import { signOut } from "next-auth/react";

function UserLogoutButton() {
  return (
    <button
      className="opacity-60"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
}

export default UserLogoutButton;
