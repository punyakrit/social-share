import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Username() {
    const [username,setUsername] = useState("")
  return (
    <div>
      <div className="text-6xl font-bold">Set Your Username</div>
      <div className="py-4 text-white/50">
        Choose a unique username to personalize your SocialHub page.
      </div>
      <div className="grid w-full max-w-sm items-center py-3 gap-1.5">
        <Label htmlFor="username">Username</Label>
        <Input
          type="username"
          className="bg-transparent border-0 border-b px-3 py-2 text-lg"
          id="username"
          placeholder="Username"
          onChange={(e)=>{setUsername(e.target.value)}}
        />
      </div>
        <button className="text-xl border-white border px-4 mt-4 rounded-3xl py-2">Submit</button>
    </div>
  );
}

export default Username;
