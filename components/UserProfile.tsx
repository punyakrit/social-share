import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserLogoutButton from "./UserLogoutButton";

async function UserProfile() {
  const server = await getServerSession(authOptions);
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage
              src={server?.user?.image as string}
              alt={server?.user?.name as string}
            />
            <AvatarFallback>
              {(server?.user?.name || "").split(" ")[0].charAt(0)}
            </AvatarFallback>
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
              <label>{(server?.user?.name as string).split(" ")[0]}</label>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="username" className="text-right">
                Email :
              </label>
              <label>{server?.user?.email as string}</label>
            </div>
            <DialogFooter>
              <UserLogoutButton/>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UserProfile;
