"use client";
import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

function UserLogoutButton() {
  return (
    <div>
      <Button
        onClick={() => {
          signOut();
        }}
      >
        LogOut
      </Button>
    </div>
  );
}

export default UserLogoutButton;