// // RegisterPage.tsx
"use client"

import React, { useState } from "react";
import Image from "next/image";
import onb from "@/public/on.webp";
import axios from "axios";
import { useRouter } from "next/navigation";
import google from "@/public/google.svg"
import { signIn } from "next-auth/react";
import GoogleLoginButton from "@/components/GoogleLoginButton";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    return setUser((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log(user);
    try {
      if (!user.name || !user.email || !user.password) {
        setError("please fill all the fields");
        return;
      }
      const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (!emailRegex.test(user.email)) {
        setError("invalid email id");
        return;
      }
      const res = await axios.post("/api/register", user);
      console.log(res.data);
      if (res.status == 200 || res.status == 201) {
        console.log("user added successfully");
        setError("");
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      setError("");
    } finally {
      setLoading(false);

      setUser({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex px-20 h-screen items-center text-white">
      <div className="w-1/2">
        <div>
          <div className="text-6xl font-bold">Register</div>
          <div className="py-4 text-white/50">
            Choose a unique username to personalize your ShareHub page.
          </div>
          <form onSubmit={handleSubmit} className="grid w-full max-w-sm items-center py-3 gap-1.5">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              placeholder="Username"
              className="rounded-xl px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500 bg-transparent text-white" // Adjusted text color and background color
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="rounded-xl px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500 bg-transparent text-white" // Adjusted text color and background color
            />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="rounded-xl px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500 bg-transparent text-white" // Adjusted text color and background color
            />
            <button type="submit" className="bg-blue-500 text-white rounded-xl px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            {loading ? "Processing" : " Register"}
            </button>
            <div className="flex justify-center w-full items-center gap-3 py-3">
                  <div className="border-b border-gray-800 py-2 w-full px-6" />
                  <div className="mt-3">or</div>
                  <div className="border-b border-gray-800 py-2 w-full px-6" />
                </div>
             <div>
              <GoogleLoginButton/>
              </div>
                {/* <div onClick={()=>signIn("google")} className="rounded px-6 py-2 shadow cursor-pointer bg-gray-50 grid place-items-center mx-auto mb-8">
                  <Image src={google} alt="bg" width={100} height={100} />
                </div>{" "} */}

                <div className="text-lg text-slate-900 font-medium">
                  <span>Have an account?</span>
                  <a href="/login" className="text-[#5D7DF3] pl-3 hover:underline">
                    Login
                  </a>
                </div>
          </form>
        </div>
      </div>
      <div className="w-1/2">
        <Image src={onb} className="rounded-3xl m-6" alt="image" />
      </div>
    </div>
  );
}

export default Signup;