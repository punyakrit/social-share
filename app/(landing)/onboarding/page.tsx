import { getServerSession } from "next-auth";
import React from "react";
import { redirect } from "next/navigation";
import onb from "@/public/on.webp";
import Image from "next/image";
import Appbar from "@/components/Appbar";
import UserForm from "@/components/pages/UserForm";
import { UserPage } from "@/models/Onboarding";
import { authOptions } from "@/lib/authOptions";
import connectMongoDb from "@/lib/dbConnect";

export default async function page({ searchParams }: any) {
  const username = searchParams.username;
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  await connectMongoDb();
  const exists = await UserPage.findOne({
    owner: session.user?.email,
  });

  if (exists) {
    redirect("/dashboard");
  }

  return (
    <div>
      <Appbar />
      <div className="flex flex-col lg:flex-row px-4 lg:px-20 h-screen items-center text-white pt-24 lg:pt-28">
        <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col items-start">
          <div>
            <div className="text-4xl lg:text-6xl font-bold">Set Your Username</div>
            <div className="py-2 lg:py-4 text-white/50">
              Choose a unique username to personalize your ShareHub page.
            </div>
            <div className="grid w-full max-w-sm items-center py-3 gap-1.5">
              <UserForm username={username} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-4 lg:mb-0 flex justify-around lg:justify-end">
          <div className="w-100 sm:w-100 md:w-full lg:max-w-2xl">
            <Image src={onb} className="rounded-3xl w-full h-auto" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
