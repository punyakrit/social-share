"use server";
import { authOptions } from "@/lib/authOptions";
import connectMongoDb from "@/lib/dbConnect";
import { UserPage } from "@/models/Onboarding";
import { getServerSession } from "next-auth";

export async function UserProfile(formData: FormData) {
  await connectMongoDb();
  const session = await getServerSession(authOptions);

  if (session) {
    const name = formData.get("displayName");
    const location = formData.get("location");
    const bio = formData.get("bio");
    const bgType = formData.get("bgType");
    const bgColor = formData.get("bgColor");
    const bgImage = formData.get("bgImage"); // Get the bgImage from formData
    const avatarImage = formData.get("avatarImage");

    await UserPage.updateOne(
      { owner: session?.user?.email },
      { displayName: name, location: location, bio: bio, bgType: bgType, bgColor: bgColor, bgImage: bgImage, avatarImage: avatarImage } // Update the bgImage field
    );
    return true;
  }

  return false;
}

export async function saveSocials(formData: FormData){
  await connectMongoDb();
  const session = await getServerSession(authOptions);
  if(session){
    const buttonValues: Record<string, string> = {};
    formData.forEach((value, key) => {
      buttonValues[key] = value.toString();
    });

    await UserPage.updateOne(
      { owner: session?.user?.email },
      { button:  buttonValues  }
    );
    return true;
  }
  return false;
} 

export async function savePageLinks(links: any) {
  await connectMongoDb();
  const session = await getServerSession(authOptions);

  if (session) {
    await UserPage.updateOne(
      { owner: session?.user?.email },
      { links }
    );
    return true;
  } else {
    return false;
  }
}