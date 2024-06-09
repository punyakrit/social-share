import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { HiMenuAlt1 } from "react-icons/hi";
import "./sidebarmobileview.css"
import Link from "next/link";


export const SidebarMobileView = () => {
return (
    <div className="text-white">
        <div className="text-white">
            <Link href={"/"}>
                
            </Link>
            <div className="dropdown"><div className="dropbtn"><HiMenuAlt1 className="text-[24px] cursor-pointer hover:block transition-colors duration-300" /></div>
            <div className="dropdown-content">
            <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]"><Link href="/explore">Explore</Link></div>
          <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]"><Link href="/about">About</Link></div>
          <div className="transition-ease-in duration-500 hover:text-white/65 hover:cursor-pointer hover:text-[17px]"><Link href="/contact">Contact</Link></div>
            </div></div>
        </div>
    </div>
);
};



