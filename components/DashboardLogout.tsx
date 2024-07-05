"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";
import { toast} from "sonner";

function DashboardLogout() {
  return (
    <div className="flex  items-center"
      onClick={async() => {
      await signOut();
      toast.success('Logged out successfully.',{duration:5000,position:'bottom-right'})
      }}
    >
      {/* <Toaster richColors/> */}
      <LogOut  className="h-5 mr-3" />LogOut
    </div>
  );
}

export default DashboardLogout;
