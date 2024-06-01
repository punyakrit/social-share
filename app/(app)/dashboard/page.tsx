import UserSettings from "@/components/dashboard/UserSettings";
import ProfilePreview from "@/components/pages/ProfilePreview";
import { authOptions } from "@/lib/authOptions";
import connectMongoDb from "@/lib/dbConnect";
import { UserPage } from "@/models/Onboarding";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"; // Fixed import

import React from "react";

async function Page() { // Fixed function name
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect('/');
  }

  await connectMongoDb();
  const exists = await UserPage.findOne({
    owner: session.user?.email,
  });

  return (
    <div className="text-white flex">
      <div className="w-1/2 h-screen py-4">
        <UserSettings user={exists} session={session} />
      </div>
      <div className="w-1/2 h-screen py-4">
        <ProfilePreview/>
      </div>
    </div>
  );
}

export default Page;
