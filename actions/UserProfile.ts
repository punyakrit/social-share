"use server";
import { authOptions } from "@/lib/authOptions";
import { connectMongoDb } from "@/lib/dbConnect";
import { UserPage } from "@/models/Onboarding";
import { getServerSession } from "next-auth";

export async function UserProfile(formData:any) {
  await connectMongoDb();
  const session = await getServerSession(authOptions);

  if (session) {
    const name = formData.get("displayName");
    const location = formData.get("location");
    const bio = formData.get("bio");

    await UserPage.updateOne(
      { owner: session?.user?.email },
      { displayName: name, location: location, bio: bio }
    );
    return true;
  }

  return false;
}
