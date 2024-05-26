"use client";

import { getUsername } from "@/action/setUsername";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

function UserForm({ initialUsername }: any) {
  const [username, setUsername] = useState(initialUsername || "");
  const [taken, setTaken] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent the default form submission
  
    const formData = new FormData(event.currentTarget);
  
    const isAvailable = await getUsername(formData);
  
    setTaken(!isAvailable);
    if (isAvailable) {
     router.push('/dashboard/'+username);
    }
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          className="bg-transparent border-0 border-b px-3 py-2 text-lg"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        />
        {taken && <div className="text-red-500 mt-4">{"Username is Already Taken"}</div>}
        <button
          type="submit"
          className="text-xl border-white border px-4 mt-4 rounded-3xl py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
