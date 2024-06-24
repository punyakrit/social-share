"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

function DashboardLogout({ currentPath }: { currentPath: string }) {
  return (
    <div
      className={` flex items-center justify-between cursor-pointer py-4 pr-2 pl-3  rounded-lg text-white/50 hover:bg-purple-500/10 active:text-white`}
      onClick={() => {
        signOut();
      }}
    >
      Logout
      <LogOut className="h-5 mr-3" />
    </div>
  );
}

export default DashboardLogout;
