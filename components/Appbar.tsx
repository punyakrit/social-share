import React from "react";
import GoogleLoginButton from "./GoogleLoginButton";
import UserProfile from "./UserProfile";
import { getServerSession } from "next-auth";
import { User } from "lucide-react";
import { authOptions } from "@/lib/authOptions";
import Link from "next/link";

async function Appbar() {
  const session = await getServerSession(authOptions)
  return (
    <div className="z-20 mr-20 h-20 w-full mt-0 rounded-b-xl bg-black/10 backdrop-blur-sm fixed">
      <div className=" text-white flex h-full px-6 md:px-20 justify-between items-center ">
       <Link href={'/'}>
        <div
          className=" cursor-pointer font-bold  text-3xl"
          >
          ShareHub
        </div>
          </Link>
        <div className="flex items-center space-x-10">
          <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]"><Link href="/explore">Explore</Link></div>
          <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]"><Link href="/about">About</Link></div>
          <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]"><Link href="/contact">Contact</Link></div>
          {!session &&  ( <Link href={'/register'}><div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]"> Register</div></Link>)}
          {session &&  <UserProfile/>}
        </div>
      </div>
    </div>
  );
}

export default Appbar;