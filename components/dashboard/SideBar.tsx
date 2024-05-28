import Image from "next/image";
import React from "react";
import Navigator from "./Navigator";

function SideBar({ session }: any) {
  

  return (
    <div className="bg-gray-950/70 w-72 shadow-md shadow-white/30 py-10 text-white h-screen">
      <div className="flex justify-center">
        <Image
          src={session?.user?.image || ""}
          width={110}
          height={110}
          alt={session?.user?.name}
          className="rounded-full overflow-hidden"
        />
      </div>
      <Navigator/>
    </div>
  );
}

export default SideBar;
