import UserSettings from "@/components/dashboard/UserSettings";
import { authOptions } from "@/lib/authOptions";
import { connectMongoDb } from "@/lib/dbConnect";
import { UserPage } from "@/models/Onboarding";
import { getServerSession } from "next-auth";

import React from "react";

async function page() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    throw new Error("User session not found. Please log in.");
  }

  await connectMongoDb();
  const exists = await UserPage.findOne({
    owner: session.user?.email,
  });

  return (
    <div className="text-white">
      <UserSettings user={exists} session={session} />
    </div>
  );
}

export default page;
