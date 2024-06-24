"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import connectMongoDb from "@/lib/dbConnect";
import { UserPage } from "@/models/Onboarding";
import Link from "next/link";
import { GripVerticalIcon, Link2 } from "lucide-react";
import Navigator from "./Navigator";
import Seperator from "../Seperator";
import SidebarLinks from "./SidebarLinks";

function SideBarHeader({ session }: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showContent, setShowContent] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    let timeoutId: any;
    // alert(showContent);
    if (isSidebarOpen) {
      timeoutId = setTimeout(() => setShowContent(true), 500);
    } else {
      setShowContent(false);
    }

    return () => clearTimeout(timeoutId);
  }, [isSidebarOpen]);
  // await connectMongoDb();
  // const exists = await UserPage.findOne({
  //   owner: session.user?.email,
  // });

  return (
    <div
      className={`sidebar z-10 ${
        isSidebarOpen ? "sm:w-72  lg:w-1/4" : "w-0"
      } bg-gray-950/70 hidden  relative lg:block duration-300 text-white h-screen`}
    >
      <div
        onClick={toggleSidebar}
        className="bg-purple-600 z-10 h-8 w-8 rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 -right-4 cursor-pointer"
      >
        <GripVerticalIcon />
      </div>
      <div
        className={` flex flex-col items-center justify-center h-full bg-gray-950/70 backdrop-blur-lg py-10  text-white 
        ${
          showContent
            ? "opacity-100 duration-200"
            : "opacity-0 duration-0 -z-10"
        } 
        `}
      >
        <div className="flex justify-center">
          <Image
            src={session?.user?.image || ""}
            width={110}
            height={110}
            alt={session?.user?.name}
            className="rounded-full overflow-hidden"
          />
        </div>
        {showContent == true}

        {/* <SidebarLinks session={session} /> */}
        <Seperator className="" />
        <Navigator />
      </div>
    </div>
  );
}

export default SideBarHeader;
