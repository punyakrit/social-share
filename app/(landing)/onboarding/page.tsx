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
      <div className="flex flex-col custom:flex-row px-4 custom:px-20 h-screen items-center text-white pt-24 custom:pt-28">
        <div className="w-full custom:w-1/2 order-2 custom:order-1">
          <div>
            <div className="text-4xl custom:text-6xl font-bold">Set Your Username</div>
            <div className="py-2 custom:py-4 text-white/50">
              Choose a unique username to personalize your ShareHub page.
            </div>
            <div className="grid w-full max-w-sm items-center py-3 gap-1.5">
              <UserForm username={username} />
            </div>
            {/* {message && <div className="text-red-500 mt-4">{message}</div>} */}
          </div>
        </div>
        <div className="w-full custom:w-1/2 order-1 custom:order-2 mb-4 custom:mb-0">
          <div className="min-w-[450px] min-h-[250px]  custom:min-w-0 custom:min-h-0 custom:mx-auto"> {/* Adjust the min-width as needed */}
            <Image src={onb} className="rounded-3xl" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
