import Image from "next/image";
import React from 'react';
import connectMongoDb from "@/lib/dbConnect";
import { UserPage } from "@/models/Onboarding";
import Link from "next/link";
import {  Link2 } from "lucide-react";
import Navigator from "./Navigator";

async function SideBarHeader({ session }: any) {
  await connectMongoDb();
  const exists = await UserPage.findOne({
    owner: session.user?.email,
  });


  return (
    <div className="sidebar bg-gray-950/70 backdrop-blur-lg shadow-md shadow-white/30 py-10 text-white h-screen">
      <div className="flex justify-center">
        <Image
          src={session?.user?.image || ""}
          width={110}
          height={110}
          alt={session?.user?.name}
          className="rounded-full overflow-hidden"
        />
      </div>
      
      <Link href={'/'+exists.uri}>
      <div className="flex items-center justify-center py-4 cursor-pointer">
        <Link2 className="text-blue-500 mr-2" />

        /{exists.uri}
      </div>
      </Link>
      <Navigator/>

    </div>
  )
}

export default SideBarHeader;
