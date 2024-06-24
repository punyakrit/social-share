"use client";
import React, { useState, useEffect } from "react";
import ImageForm from "./ImageForm";
import {
  ArrowRight,
  CloudUpload,
  ImageIcon,
  Loader2,
  Palette,
} from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { UserProfile } from "@/actions/UserProfile";
import { useToast } from "../ui/use-toast";
import DashboardSectionComponent from "./DashboardSectionComponent";

function UserSettings({ user, session, onUpdate }: any) {
  const { toast } = useToast();
  const [bgType, setBgType] = useState(user.bgType);
  const [bgColor, setBgColor] = useState(user.bgColor);
  const [bgImage, setBgImage] = useState(user.bgImage);
  const [avatarImage, setAvatarImage] = useState(
    user.avatarImage || session?.user?.image
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setBgType(user.bgType);
    setBgColor(user.bgColor);
    setBgImage(user.bgImage);
  }, [user]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    formData.set("bgType", bgType);
    formData.set("bgColor", bgColor);
    formData.set("bgImage", bgImage); // Set the bgImage in formData
    formData.set("avatarImage", avatarImage);

    try {
      const result = await UserProfile(formData);
      console.log(result);
      toast({
        variant: "default",
        description: "Details saved",
      });
    } catch (error) {
      setIsLoading(false);

      console.error("Error saving user profile:", error);
      toast({
        variant: "destructive",
        description: "Failed to save details",
      });
    }
    setIsLoading(false);
    onUpdate();
  }

  async function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
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
        setAvatarImage(result.link);
        onUpdate();
      } catch (error) {
        console.error("Error uploading avatar:", error);
      }
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
        onUpdate();
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
    <DashboardSectionComponent>
      <form onSubmit={handleSubmit}>
        <div
          className="rounded-t-3xl border-b border-purple-600 -mt-1 min-h-[250px] py-5 flex justify-center items-center bg-cover bg-center"
          style={style}
        >
          <div className="h-fit shadow-xl px-6 w-fit py-6 rounded-lg bg-black mr-auto ml-5">
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
              <div className="flex justify-center mt-5 w-fit">
                <label className="bg-purple-400/20 text-purple-400 py-2 px-3 rounded-full flex items-center">
                  Change color{" "}
                  <ArrowRight size={15} className="ml-2 mt-[0.5px]" />
                  <div className="h-10 ml-5 w-10 cursor-pointer rounded-full overflow-hidden border-[2px] border-purple-500">
                    <input
                      type="color"
                      name="bgColor"
                      value={bgColor}
                      className={`w-full h-full scale-150 cursor-pointer`}
                      onChange={(e) => setBgColor(e.target.value)}
                    />
                  </div>
                </label>
              </div>
            )}
            {bgType === "image" && (
              <div className="flex justify-center  mt-5 w-fit">
                <label className="bg-purple-400/20 cursor-pointer text-purple-400 py-3 px-3 rounded-full flex items-center">
                  <CloudUpload className="mr-2" /> Change Image
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
          <div className="relative  -top-10">
            <Image
              className="rounded-full h-32 w-32 items-center bg-cover bg-center  border-purple-900 border-4 "
              src={avatarImage}
              width={130}
              height={130}
              alt="avatar"
            />
            <label className="absolute bottom-0 right-0 bg-black border  p-2 rounded-full">
              <CloudUpload />
              <input
                type="file"
                className="hidden"
                onChange={handleAvatarChange}
              ></input>
            </label>
          </div>
        </div>
        <div className="m-10 -mt-1 pb-10 space-y-6">
          <div className="grid w-full items-center gap-1.5">
            <Label
              htmlFor="displayName"
              className="text-white  font-extralight mb-1 text-xl"
            >
              Display Name
            </Label>
            <Input
              type="text"
              className=" border-none bg-purple-500/10 p-5 py-8 focus-visible:ring-offset-0"
              id="displayName"
              name="displayName"
              placeholder="John Doe"
              defaultValue={user.displayName}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label
              htmlFor="location"
              className="text-white  font-extralight mb-1 text-xl"
            >
              Location
            </Label>
            <Input
              type="text"
              className=" border-none bg-purple-500/10 p-5 py-8 focus-visible:ring-offset-0"
              id="location"
              name="location"
              placeholder="Location that you want to display to the world"
              defaultValue={user.location}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label
              htmlFor="bio"
              className="text-white  font-extralight mb-1 text-xl"
            >
              Bio
            </Label>
            <Textarea
              className=" border-none bg-purple-500/10 p-5 py-8 focus-visible:ring-offset-0"
              placeholder="Type your bio / message here."
              defaultValue={user.bio}
              name="bio"
              id="bio"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-purple-800 hover:bg-purple-950 font-semibold text-white/90"
          >
            {isLoading && <Loader2 className="mr-2 inline animate-spin" />} Save
            Details
          </Button>
        </div>
      </form>
    </DashboardSectionComponent>
  );
}

export default UserSettings;
