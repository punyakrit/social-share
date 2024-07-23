"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LineChart, UserCog } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

import UserLogoutButton from "../UserLogoutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Session } from "next-auth";

export default function PopoverCard({ session }: { session: Session | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const closePopover = () => setIsOpen(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth < 768) closePopover();
    };

    // close popover when showing hamburger menu 🍔
    window.addEventListener("resize", closeOnResize);

    return () => {
      window.removeEventListener("resize", closeOnResize);
    };
  }, []);

  return (
    <Popover
      placement="bottom-end"
      className="-mx-2 -my-14"
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <PopoverTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={session?.user?.image as string}
            alt={session?.user?.name as string}
          />
          <AvatarFallback>
            {(session?.user?.name || "").split(" ")[0].charAt(0)}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <div className="py-2 bg-foreground flex overflow-hidden flex-col rounded-xl w-56 text-white">
          <div className="flex px-4 py-2 gap-4 items-center">
            <Avatar>
              <AvatarImage
                src={session?.user?.image as string}
                alt={session?.user?.name as string}
              />
              <AvatarFallback>
                {(session?.user?.name || "").split(" ")[0].charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col overflow-hidden">
              <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap font-semibold">
                {session?.user?.name}
              </p>
              <p className="text-xs text-gray-600 overflow-hidden text-ellipsis text-nowrap font-semibold">
                {session?.user?.email}
              </p>
            </div>
          </div>
          <Link
            href="/dashboard"
            onClick={closePopover}
            className="flex items-center px-5 py-2 gap-1.5 text-sm text-gray-400 hover:text-gray-200 hover:bg-dark hover:bg-opacity-50 duration-300"
          >
            <UserCog className="h-5" />
            Dashboard
          </Link>
          <Link
            href="/analytics"
            onClick={closePopover}
            className="flex items-center px-5 py-2 gap-1.5 text-sm text-gray-400 hover:text-gray-200 hover:bg-dark hover:bg-opacity-50 duration-300"
          >
            <LineChart className="h-5" />
            Analytics
          </Link>
          <UserLogoutButton onClick={closePopover} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
