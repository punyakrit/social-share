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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getServerSession } from "next-auth";
import UserLogoutButton from "./UserLogoutButton";
import { authOptions } from "@/lib/authOptions";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

async function UserProfile() {
  const server = await getServerSession(authOptions);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={server?.user?.image as string}
            alt={server?.user?.name as string}
          />
          <AvatarFallback>
            {(server?.user?.name || "").split(" ")[0].charAt(0)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-[#a855f7] font-normal">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href="/dashboard"
              className="cursor-pointer font-semibold w-full flex flex-row items-center justify-between"
            >
              <span>{(server?.user?.name as string).split(" ")[0]}</span>
              <ArrowRight size={15} className="text-[#a855f7]"/>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="opacity-60">{server?.user?.email as string}</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserLogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserProfile;

// export function DropdownMenuDemo() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Avatar className="cursor-pointer">
//           <AvatarImage
//             src={server?.user?.image as string}
//             alt={server?.user?.name as string}
//           />
//           <AvatarFallback>
//             {(server?.user?.name || "").split(" ")[0].charAt(0)}
//           </AvatarFallback>
//         </Avatar>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>My Account</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem>
//             {(server?.user?.name as string).split(" ")[0]}
//           </DropdownMenuItem>
//           <DropdownMenuItem>{server?.user?.email as string}</DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem>
//           <UserLogoutButton />
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
