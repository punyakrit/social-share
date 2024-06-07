import React from "react";
import connectMongoDb from "@/lib/dbConnect";
import { UserPage } from "@/models/Onboarding";
import SideBarHeader from "./SideBarHeader";

async function SideBar({ session }: any) {
  await connectMongoDb();
  const exists = await UserPage.findOne({
    owner: session.user?.email,
  });

  

  return (
    <div className="sidebar z-10 w-screen sm:w-72 bg-gray-950/70 hidden lg:block  lg:w-72 shadow-md shadow-white/30  text-white h-screen">
      <SideBarHeader session={session} />
    </div>
  );
}

export default SideBar;
