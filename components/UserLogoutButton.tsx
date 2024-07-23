"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

function UserLogoutButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={() => {
        setTimeout(() => {
          signOut();
        }, 500);
        toast.success("Logged out successfully.");
        onClick(); // to close popover card
      }}
      className="flex items-center px-5 py-2 gap-1.5 text-sm text-rose-800 hover:text-red-600 hover:bg-red-900 hover:bg-opacity-20 duration-300"
    >
      <LogOut className="h-5" />
      Logout
    </button>
  );
}

export default UserLogoutButton;
