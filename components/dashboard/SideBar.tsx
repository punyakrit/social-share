import { LineChart, UserCog } from "lucide-react";
import Image from "next/image";
import React from "react";
import UserLogoutButton from "../UserLogoutButton";
import DashboardLogout from "../DashboardLogout";
import Link from "next/link";

function SideBar({ session }: any) {
  return (
    <div className="bg-gray-800 border-white/50 border-r py-10 w-full text-white h-screen">
      <div className="flex justify-center">
        <Image
          src={session?.user?.image || ""}
          width={110}
          height={110}
          alt={session?.user?.name}
          className="rounded-full overflow-hidden"
        ></Image>
      </div>
      <div className=" flex-col inline-flex mx-auto text-center  mt-10 space-y-3">
        <Link href={"/dashboard"}>
          <div className="text-xl flex  items-center cursor-pointer text-white/60">
            <UserCog className="h-5 mr-3" />
            User Profile
          </div>
        </Link>
        <Link href={"/analytics"}>
          <div className="text-xl flex  items-center cursor-pointer text-white/60">
            <LineChart className="h-5 mr-3" />
            Analytics
          </div>
        </Link>
        <div className="text-xl  cursor-pointer text-white/60">
          <DashboardLogout />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
