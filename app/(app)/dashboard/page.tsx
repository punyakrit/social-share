import UserSettings from "@/components/dashboard/UserSettings";
import ProfilePreview from "@/components/pages/ProfilePreview";
import { authOptions } from "@/lib/authOptions";
import connectMongoDb  from "@/lib/dbConnect";
import { UserPage } from "@/models/Onboarding";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import React from "react";

async function page() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect('/')
  }

  await connectMongoDb();
  const exists = await UserPage.findOne({
    owner: session.user?.email,
  });

  return (
    <div className="text-white flex">
      <div className="w-1/2 h-screen p-4">
        <UserSettings user={exists} session={session} />
      </div>
      <div className="w-1/2 shadow-md rounded-3xl p-8 mx-3 shadow-white/10 bg-gray-950/70">
        <ProfilePreview/>
      </div>
    </div>
  );
}

export default page;
