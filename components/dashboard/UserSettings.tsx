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


function UserSettings ({ user, session }:any) {
  const { toast } = useToast();
  const [bgType, setBgType] = useState(user.bgType);
  const [bgColor, setBgColor] = useState(user.bgColor);
  const [bgImage, setBgImage] = useState(user.bgImage);

  useEffect(() => {
    setBgType(user.bgType);
    setBgColor(user.bgColor);
    setBgImage(user.bgImage);
  }, [user]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.set("bgType", bgType);
    formData.set("bgColor", bgColor);
    formData.set("bgImage", bgImage); // Set the bgImage in formData

    try {
      const result = await UserProfile(formData);
      console.log(result);
      toast({
        variant: "default",
        description: "Details saved",
      });
    } catch (error) {
      console.error("Error saving user profile:", error);
      toast({
        variant: "destructive",
        description: "Failed to save details",
      });
    }
  }

  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const data = new FormData();
      data.set("file", file);
      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: data,
        });
        const result = await res.json();
        setBgImage(result.link);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  }

  const style =
    bgType === "color"
      ? { backgroundColor: bgColor }
      : { backgroundImage: `url(${bgImage})` };

  return (
    <div className="h-full overflow-y-scroll shadow-md rounded-3xl mx-3 shadow-white/10 bg-gray-950/70">
      <form onSubmit={handleSubmit}>
        <div
          className="rounded-t-3xl min-h-[250px] py-10 flex justify-center items-center bg-cover bg-center"
          style={style}
        >
          <div>
            <ImageForm
              defaultValue={bgType}
              options={[
                { name: "color", icon: <Palette />, label: "Color" },
                { name: "image", icon: <ImageIcon />, label: "Image" },
              ]}
              onChange={(newBgType: React.SetStateAction<string>) =>
                setBgType(newBgType)
              }
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
            {bgType === "image" && (
              <div className="flex justify-center mt-1">
                <label className="bg-white text-black py-3 px-3 rounded-full">
                  Change Image
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            className="rounded-full relative -top-10 border-gray-900 border-4 shadow-white/50 shadow"
            src={session?.user?.image}
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
};

export default UserSettings;
