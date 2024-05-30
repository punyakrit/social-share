"use client";
import React, { useState, useEffect } from "react";
import ImageForm from "./ImageForm";
import { ImageIcon, Palette } from "lucide-react";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { UserProfile } from "@/actions/UserProfile";
import { useToast } from "../ui/use-toast";

function UserSettings({ user, session }: any) {
  const { toast } = useToast();
  const [bgType, setBgType] = useState(user.bgType);
  const [bgColor, setBgColor] = useState(user.bgColor);

  useEffect(() => {
    setBgType(user.bgType);
    setBgColor(user.bgColor);
  }, [user.bgType, user.bgColor]);

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await UserProfile(formData);
    console.log(result);
    toast({
      variant: "default",
      description: "Details saved",
    });
  }

  return (
    <div className="h-full overflow-y-scroll shadow-md rounded-3xl mx-3 shadow-white/10 bg-gray-950/70">
      <form onSubmit={handleSubmit}>
        <div
          className="rounded-t-3xl h-48 py-10 flex justify-center items-center"
          style={{ backgroundColor: bgType === "color" ? bgColor : "initial" }}
        >
          <div>
            <ImageForm
              defaultValue={bgType}
              options={[
                { name: "color", icon: <Palette />, label: "Color" },
                { name: "image", icon: <ImageIcon />, label: "Image" },
              ]}
              onChange={(newBgType:any) => setBgType(newBgType)}
            />
            {bgType === "color" && (
              <div className="flex justify-center mt-2 bg-gray-900 shadow shadow-white px-4 py-2 rounded-full">
                <span className="text-white">Background Color :</span>
                <input
                  type="color"
                  name="bgColor"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
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
