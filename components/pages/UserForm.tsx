"use client"
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function UserForm() {
    
  return (
    <div className="px-6 py-2 h-screen overflow-y-scroll">
      <div className="tetx-2xl font-bold mt-8">User Details</div>
      <Card>
        <div className=" grid w-full items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="name"
            id="name"
            className="bg-transparent my-1 p-2"
            placeholder="Name"
          />
        </div>

        <div className=" grid w-full items-center gap-1.5">
          <Label htmlFor="bio">About Yourself</Label>
          <Textarea
            placeholder="Type your message here."
            className="bg-transparent my-1 p-2"
          />
        </div>

        <div className=" grid w-full items-center gap-1.5">
          <Label htmlFor="img">Upload Image</Label>
          <Input
            type="file"
            id="img"
            className="bg-transparent w-min cursor-pointer my-1 p-2"
          />
        </div>
      </Card>

      <div className="tetx-2xl font-bold mt-8">Social Links</div>

      <Card>
        <CustomInput  />
        <CustomInput />
        <CustomInput />
        <CustomInput />
        <CustomInput />
        <CustomInput />
        <CustomInput />

      </Card>
    </div>
  );
}

function Card({ children }: any) {
  return (
    <div className="bg-gray-950/70 space-y-5 my-3 p-8 shadow-sm rounded-md shadow-white">
      {children}
    </div>
  );
}

function CustomInput({social, link}:any) {
  return (
    <div className=" grid w-full items-center gap-1.5">
          <Label htmlFor="name">{social}</Label>
          <Input
            type="name"
            id="name"
            className="bg-transparent my-1 p-2"
            placeholder="Enter Links"
            onChange={()=>{}}
          />
        </div>
  );
}

export default UserForm;
