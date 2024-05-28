import { getServerSession } from "next-auth";
import React from "react";
import { redirect } from "next/navigation";
import onb from "@/public/on.webp";
import Image from "next/image";
import Appbar from "@/components/Appbar";
import UserForm from "@/components/pages/UserForm";
import { UserPage } from "@/models/Onboarding";
import { authOptions } from "@/lib/authOptions";
import { connectMongoDb } from "@/lib/dbConnect";

export default async function page({ searchParams }: any) {
  const username = searchParams.username;
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }
  
    await connectMongoDb()
  const exists = await UserPage.findOne({
    owner: session.user?.email
  })

  if(exists){
    redirect("/dashboard");
  }

  return (
    <div>
      <div className="flex px-20  h-screen items-center text-white">
        <div className="w-1/2">
          <div>
            <div className="text-6xl font-bold">Set Your Username</div>
            <div className="py-4 text-white/50">
              Choose a unique username to personalize your ShareHub page.
            </div>
            <div className="grid w-full max-w-sm items-center py-3 gap-1.5">
              <UserForm username={username} />
            </div>
            {/* {message && <div className="text-red-500 mt-4">{message}</div>} */}
          </div>
        </div>
        <div className="w-1/2">
          <Image src={onb} className="rounded-3xl" alt="image" />
        </div>
      </div>
    </div>
  );
}
