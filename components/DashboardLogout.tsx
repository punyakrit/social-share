"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

function DashboardLogout() {
  return (
    <div className="flex  items-center"
      onClick={() => {
        signOut();
      }}
    >
      <LogOut  className="h-5 mr-3" />LogOut
    </div>
  );
}

export default DashboardLogout;
