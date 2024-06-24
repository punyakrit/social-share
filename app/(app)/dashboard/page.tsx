import AppBar from "@/components/dashboard/AppBar";
import UserLinks from "@/components/dashboard/UserLinks";
import UserSettings from "@/components/dashboard/UserSettings";
import UserSocialForm from "@/components/dashboard/UserSocialForm";
import ProfilePreview from "@/components/pages/ProfilePreview";
import { authOptions } from "@/lib/authOptions";
import connectMongoDb from "@/lib/dbConnect";
import { UserPage } from "@/models/Onboarding";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"; // Fixed import

import React from "react";

async function Page() {
  // Fixed function name
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  await connectMongoDb();
  const exists = await UserPage.findOne({
    owner: session.user?.email,
  });

  return (
    <div className="text-white gap-6 w-full flex h-screen ">
      <AppBar user={exists} />
      <div className="flex-1 space-y-4 no-scrollbar overflow-y-scroll py-4 lg:pt-4 md:pt-24 ml-5">
        <UserSettings user={exists} session={session} />
        <UserSocialForm user={exists} session={session} />
        <UserLinks user={exists} session={session} />
      </div>
      <div className="md:w-1/3 hidden md:block h-screen no-scrollbar overflow-y-scroll py-4 lg:pt-4 md:pt-24">
        <ProfilePreview user={exists} session={session} />
      </div>
    </div>
  );
}

export default Page;
