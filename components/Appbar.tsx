// import React from "react";
// import GoogleLoginButton from "./GoogleLoginButton";
// import UserProfile from "./UserProfile";
// import { getServerSession } from "next-auth";
// import { User } from "lucide-react";
// import { authOptions } from "@/lib/authOptions";

// async function Appbar() {
//   const session = await getServerSession(authOptions)
//   return (
//     <div className="z-20 mr-20 h-20 w-full rounded-b-xl bg-black/10 backdrop-blur-sm fixed">
//       <div className=" text-white flex h-full px-6 md:px-20 justify-between items-center ">
//         <div
//           // onClick={() => route.replace("/")}
//           className=" cursor-pointer font-bold  text-3xl"
//         >
//           ShareHub
//         </div>
//         <div className="flex items-center space-x-10">
//           <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]">Explore</div>
//           <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]">About</div>
//           <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]">Contact</div>
//           {!session &&  <GoogleLoginButton />}
//           {session &&  <UserProfile/>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Appbar;
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
            <Link href="/">Home</Link>
          </div>
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
          </Link>
        <div className="flex items-center space-x-10">
          <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]">Explore</div>
          <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]">About</div>
          <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]">Contact</div>
          {!session &&  ( <Link href={'/register'}><div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]"> Register</div></Link>)}
          {session &&  <UserProfile/>}
        </div>
      </div>
    </div>
  );
}

export default Appbar;
