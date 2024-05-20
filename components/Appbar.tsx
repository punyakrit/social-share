"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

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
              <Dialog>
                <DialogTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={session?.user?.image as string}
                      alt={session?.user?.name as string}
                    />
                    <AvatarFallback>{session.user?.name?.split(' ')[0].charAt(0)}</AvatarFallback>
                  </Avatar>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>User Details</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="name" className="text-right">
                        Name :
                      </label>
                      <label>{session?.user?.name?.split(' ')[0]}</label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="username" className="text-right">
                        Email :
                      </label>
                      <label>{session?.user?.email}</label>
                    </div>
                    <DialogFooter>
                      <Button onClick={()=>{signOut()}}>LogOut</Button>
                    </DialogFooter>
                  </div>
                </DialogContent>
              </Dialog>
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
