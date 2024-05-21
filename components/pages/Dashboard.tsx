"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import UserForm from "./UserForm";
import LivePreview from "./LivePreview";

function Dashboard() {
  const route = useRouter();
  const { status, data: session } = useSession();

  useEffect(() => {
    status !== "authenticated" ? route.push("/") : null;
  }, []);
  return (
    <div className="text-white p-4 h-screen">
      <div className="text-2xl my-4">Welcome, {session?.user?.name}</div>
      <div className="flex ">
        <div className="w-1/2 ">
            <UserForm/>
        </div>
        <div className="w-1/2">
            <LivePreview/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
