"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function UserNameForm({user}:any) {
  const route = useRouter()
  const [username, setUsername] = useState("");
  async function handleSubmit(e: any) {
    e.preventDefault();

    if (username.length > 0) {

      if(user){
        route.push('/onboarding?username=' + username)
      }else{

        await signIn("google", {
          callbackUrl: "/onboarding?username=" + username,
        });
      }
    }
  }
  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="inline-flex items-center shadow-lg "
      >
        <span className="bg-white rounded-l-2xl py-4 pl-4">sharehub.xyz/</span>

        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          className="py-4 pl-1 rounded-r-2xl"
          placeholder="username"
        />
        <Button
          type="submit"
          className=" text-white border-white border ml-6 py-4"
        >
          Join for Free
        </Button>
      </form>
    </div>
  );
}

export default UserNameForm;
