import React from "react";
import GoogleLoginButton from "./GoogleLoginButton";
import UserProfile from "./UserProfile";
import { getServerSession } from "next-auth";
import { User } from "lucide-react";
import { authOptions } from "@/lib/authOptions";
import Link from "next/link";
import { SidebarMobileView } from "./sidebarmobileview";
import GitHubAppbar from "./GitHubAppbar";

async function Appbar() {
  const session = await getServerSession(authOptions);
  return (  
    <div className="z-20 mr-20 h-20 w-full mt-0 rounded-b-xl bg-black/10 backdrop-blur-3xl fixed">
      <div className=" text-white flex h-full md:px-6  px-5 p-1 gap-10 justify-between items-center ">
        <Link href={"/"}>
          <div className=" cursor-pointer font-bold  text-3xl">ShareHub</div>
        </Link>
        <div className="items-center space-x-10 md:flex md:flex-row hidden">
          <div className="transition duration-500 text-white/50 hover:cursor-pointer hover:text-white ">
            <Link href="/about">About</Link>
          </div>
          <div className="transition duration-500 text-white/50 hover:cursor-pointer hover:text-white ">
            <Link href="/contact">Contact</Link>
          </div>
          <div className="transition duration-500 text-white/50 hover:cursor-pointer hover:text-white ">
            <Link href="/contributors">Contributors</Link>
          </div>
          <div className="transition duration-500 text-white/50 hover:cursor-pointer hover:text-white ">
            <Link href="https://github.com/punyakrit/social-share" target="_blank">
              <GitHubAppbar />
            </Link>
          </div>

          {!session && <GoogleLoginButton />}
          {session && <UserProfile />}
        </div>
        <div className="md:hidden">
          <SidebarMobileView />
        </div>
      </div>
    </div>
  );
}

export default Appbar;
