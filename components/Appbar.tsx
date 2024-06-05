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
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

async function Appbar() {
  const session = await getServerSession(authOptions)
  return (
    <div className="z-20 mr-20 h-20 w-full rounded-b-xl bg-black/10 backdrop-blur-sm fixed">
      <div className=" text-white flex h-full px-6 md:px-20 justify-between items-center ">
       <Link href={'/'}>
        <div
          className=" cursor-pointer font-bold  text-3xl"
          >
          ShareHub
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
