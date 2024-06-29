// // RegisterPage.tsx
"use client"

import React, { useState } from "react";
import Image from "next/image";
import onb from "@/public/on.webp";
// import axios from "axios";
import { useRouter } from "next/navigation";
import GoogleLoginButton from "@/components/GoogleLoginButton";
// import google from "@/public/google.svg"
import { signIn } from "next-auth/react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
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
    try {
      if (!user.email || !user.password) {
        setError("please fill all the fields");
        return;
      }
      const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (!emailRegex.test(user.email)) {
        setError("invalid email id");
        return;
      }

      const res = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false
        // callbackUrl: "/dashboard",
      });

      if (res?.error) {
        console.log(res);
        setError("error");
      }

      setError("");
      router.push("/onboarding");
    } catch (error) {
      console.log(error);
      setError("");
    } finally {
      setLoading(false);

      setUser({
        email: "",
        password: "",
      });
    }
  };
  return (
    <div className="flex px-20 h-screen items-center text-white">
      <div className="w-1/2">
        <div>
          <div className="text-6xl font-bold">Login</div>
          {/* <div className="py-4 text-white/50">
            Choose a unique username to personalize your ShareHub page.
          </div> */}
          <form onSubmit={handleSubmit} className="grid w-full max-w-sm items-center py-3 gap-1.5">
           
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
            {loading ? "Processing" : " Login"}
            </button>
            <div className="flex justify-center w-full items-center gap-3 py-3">
                  <div className="border-b border-gray-800 py-2 w-full px-6" />
                  <div className="mt-3">or</div>
                  <div className="border-b border-gray-800 py-2 w-full px-6" />
                </div>
             
              <GoogleLoginButton/>

                <div className="text-lg text-slate-900 font-medium">
                  <span>Don't have an account?</span>
                  <a href="/register" className="text-[#5D7DF3] pl-3 hover:underline">
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

export default Login;