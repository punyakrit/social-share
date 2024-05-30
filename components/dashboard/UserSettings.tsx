"use client";
import React from "react";
import ImageForm from "./ImageForm";
import { ImageIcon, Palette } from "lucide-react";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { UserProfile } from "@/actions/UserProfile";

function UserSettings({ user, session }:any) {
  async function handleSubmit(event:any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await UserProfile(formData);
    console.log(result);
    
    
  }

  return (
    <div className="h-full overflow-y-scroll shadow-md rounded-3xl mx-3 shadow-white/10 bg-gray-950/70">
      <form onSubmit={handleSubmit}>
        <ImageForm
          options={[
            { name: "color", icon: <Palette />, label: "Color" },
            { name: "image", icon: <ImageIcon />, label: "Image" },
          ]}
        />
        <div className="flex justify-center">
          <Image
            className="rounded-full relative -top-10 border-gray-900 border-4 shadow-white/50 shadow"
            src={session?.user?.image as string}
            width={130}
            height={130}
            alt="avatar"
          />
        </div>
        <div className="m-10 -mt-1 space-y-6">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="displayName">Display Name</Label>
            <Input
              type="text"
              className="bg-transparent"
              id="displayName"
              name="displayName"
              placeholder="John Doe"
              defaultValue={user.displayName}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="location">Location</Label>
            <Input
              type="text"
              className="bg-transparent"
              id="location"
              name="location"
              placeholder="Location that you want to display to the world"
              defaultValue={user.location}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              className="bg-transparent"
              placeholder="Type your bio / message here."
              defaultValue={user.bio}
              name="bio"
              id="bio"
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit"className="border">
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
