"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";

function UserNameForm({ user }: any) {
  const route = useRouter();
  const [username, setUsername] = useState("");
  const [inputActive, setInputActive] = useState(false);
  async function handleSubmit(e: any) {
    e.preventDefault();

    if (username.length > 0) {
      if (user) {
        route.push("/onboarding?username=" + username);
      } else {
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
        className={`md:inline-flex md:flex-row flex-col items-center shadow-lg gap-5 `}
        >
          <div
            onFocus={() => setInputActive(true)}
            onBlur={() => setInputActive(false)}
            className={`${
              inputActive
                ? " ring-[3px] ring-[#638fff] duration-300 rounded-2xl "
                : ""
            } flex  `}
          >
            <span className="bg-white rounded-l-2xl py-4 md:pl-4 pl-5">
              sharehub.xyz/
            </span>

          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            className="py-4 md:pl-1 pl-1 pr-[5rem] outline-none rounded-r-2xl text-left"
            placeholder="username"
          />
        </div>
        {/* <Button
          type="submit"
          className="text-white font-bold border border-white border-[2px] ml-6 py-4 hover:cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-br from-white via-gray-300 to-gray-400 hover:text-gray-900"
        >
          Join for Free
        </Button> */}
        
          
            <div className="text-center pt-[15px] md:pt-0  ">
            <MagicButton
            title='Join For Free'
            />
            </div>
               
        
      </form>
    </div>
  );
}

export default UserNameForm;
