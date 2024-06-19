"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LineChart, MoveLeftIcon, MoveRightIcon, UserCog } from "lucide-react";
import DashboardLogout from "../DashboardLogout";
import Seperator from "../Seperator";

function Navigator() {
  const router = usePathname();
  const currentPath = router;

  return (
    <div className="flex-col flex mx-7 relative flex-1 w-4/5  justify-start text-center mt-10 space-y-3">
      <Link href="/dashboard">
        <div
          className={` flex items-center justify-between cursor-pointer py-4 pl-3 pr-2  rounded-lg  ${
            currentPath === "/dashboard"
              ? " bg-purple-500/10 text-purple-400"
              : "text-white/50 hover:bg-purple-500/10 active:text-white"
          }`}
        >
          User Profile
          <UserCog className="h-5 mr-3" />
        </div>
      </Link>
      <Link href="/analytics">
        <div
          className={` flex items-center justify-between cursor-pointer py-4 pr-2 pl-3  rounded-lg  ${
            currentPath === "/analytics"
              ? " bg-purple-500/10 text-purple-400"
              : "text-white/50 hover:bg-purple-500/10 active:text-white"
          }`}
        >
          Analytics
          <LineChart className="h-5 mr-3" />
        </div>
      </Link>
      <div className=" cursor-pointer text-white/50 hover:bg-purple-500/10 active:text-white">
        <DashboardLogout currentPath={currentPath} />
      </div>
      <Seperator className="h-1 mx-auto bg-purple-500/10 mt-10 w-full rounded-lg" />
      <Link
        href="/analytics"
        className="flex-1 flex flex-col items-center justify-end "
      >
        <div
          className={` flex items-center w-full justify-between cursor-pointer py-4 pr-2 pl-3  rounded-lg  ${
            currentPath === "/"
              ? " bg-purple-500/10 text-purple-400"
              : "text-white/50 hover:bg-purple-500/10 active:text-white"
          }`}
        >
          Back to Home
          <MoveRightIcon className="h-5 mr-3" />
        </div>
      </Link>
    </div>
  );
}

export default Navigator;
