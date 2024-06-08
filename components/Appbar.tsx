import React from "react";
import GoogleLoginButton from "./GoogleLoginButton";
import UserProfile from "./UserProfile";
import { getServerSession } from "next-auth";
import { User } from "lucide-react";
import { authOptions } from "@/lib/authOptions";
import Link from "next/link";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { HiMenuAlt1 } from "react-icons/hi";

async function Appbar() {
  const session = await getServerSession(authOptions)
  return (
    <div className="z-20 mr-20 h-20 w-full mt-0 rounded-b-xl bg-black/10 backdrop-blur-sm fixed">
      <div className=" text-white flex h-full md:px-6  px-5 p-1 gap-10 justify-between items-center ">
       <Link href={'/'}>
        <div
          className=" cursor-pointer font-bold  text-3xl"
          >
          ShareHub
        </div>
          </Link>
        <div className="items-center space-x-10 md:flex md:flex-row hidden">
          <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]"><Link href="/explore">Explore</Link></div>
          <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]"><Link href="/about">About</Link></div>
          <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]"><Link href="/contact">Contact</Link></div>
          {!session &&  <GoogleLoginButton />}
          {session &&  <UserProfile/>}
        </div>
        <Dropdown>
      <DropdownTrigger className="md:hidden">
        <Button 
          variant="bordered" 
        >
<HiMenuAlt1 className="h-[32px] w-[auto] text-white"></HiMenuAlt1>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new"><Link href="/explore">Explore</Link></DropdownItem>
        <DropdownItem key="copy"><Link href="/about">About</Link></DropdownItem>
        <DropdownItem key="edit"><Link href="/contact">Contact</Link></DropdownItem>
        <DropdownItem key="edit">{!session &&  <GoogleLoginButton />}
        {session &&  <UserProfile/>}</DropdownItem>
       
      </DropdownMenu>
    </Dropdown>
      </div>
    </div>
  );
}

export default Appbar;