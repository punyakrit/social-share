"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function Appbar() {
  const { status, data: session } = useSession();

  return (
    <div className="z-20 mr-20 h-20 w-full rounded-b-xl bg-black/10 backdrop-blur-sm fixed">
      <div className=" text-white flex h-full px-6 md:px-20 justify-between     items-center ">
        <div className=" font-bold  text-3xl">ShareHub</div>
        <div className="flex items-center space-x-10">
          <div>Explore</div>
          <div>About</div>
          <div>Contact</div>

          {status === "authenticated" ? (
            <div>
              <Image
                alt={session?.user?.name as string}
                src={session?.user?.image as string}
                width={45}
                height={45}
                className="rounded-full"
              ></Image>
            </div>
          ) : (
            <div
              className="border  px-4 cursor-pointer py-2 font-bold rounded-2xl"
              onClick={() => signIn("google")}
            >
              Register
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Appbar;
