"use client";
import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import { toast} from "sonner";

function UserLogoutButton() {
  return (
    <div>
      <Button
        onClick={() => {
          setTimeout(()=>{
            signOut();
          },500)
          toast.success('Logged out successfully.')
          }}
      >
        LogOut
      </Button>
    </div>
  );
}

export default UserLogoutButton;