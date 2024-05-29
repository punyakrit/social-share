"use client"
import React from "react";
import ImageForm from "./ImageForm";
import { ImageIcon, Palette } from "lucide-react";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

function handleSubmit(form:any) {
  console.log(form.get('displayName'))
}



 function UserSettings({ user, session }: any) {
 

  return (
    <div>
      <form action={handleSubmit}>
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
        <div className="m-10 -mt-1 space-y-6">
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="email">Display Name</Label>
            <Input
              type="text"
              className="bg-transparent "
              id="text"
              name="displayName"
              placeholder="John Doe"
              defaultValue={user.displayName}
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="email">Location</Label>
            <Input
              type="text"
              className="bg-transparent "
              id="text"
              name="location"
              placeholder="Location that you want to display to world"
              defaultValue={user.location}
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label>Bio</Label>
            <Textarea
              className="bg-transparent"
              placeholder="Type your bio / message here."
              defaultValue={user.bio}
              name="bio"
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="border">
              Save Details
            </Button>
          </div>

          <div>Dashboard building is still under process</div>
        </div>
      </form>
    </div>
  );
}

export default UserSettings;
