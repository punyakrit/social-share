import React from "react";
import ImageForm from "./ImageForm";
import { ImageIcon, Palette } from "lucide-react";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

async function UserSettings() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <form>
        <ImageForm
          options={[
            { name: "color", icon: <Palette />, label: "Color" },
            { name: "image", icon: <ImageIcon />, label: "Image" },
          ]}
        />
        <div className="flex justify-center">
          <Image
            className="rounded-full relative -top-7 border-gray-900 border-4 shadow-white/50 shadow"
            src={session?.user?.image as string}
            width={130}
            height={130}
            alt="avatar"
          />
        </div>
        <div className="m-10 space-y-6">
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="email">Display Name</Label>
            <Input type="email" className="bg-transparent " id="email" placeholder="John Doe" />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="email">Location</Label>
            <Input type="email" className="bg-transparent " id="email" placeholder="Location that you want to display to world" />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="email">Bio</Label>
            <Textarea className="bg-transparent" placeholder="Type your bio / message here." />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserSettings;
