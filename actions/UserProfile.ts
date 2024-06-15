"use server";
import { authOptions } from "@/lib/authOptions";
import connectMongoDb from "@/lib/dbConnect";
import { UserPage } from "@/models/Onboarding";
import { getServerSession } from "next-auth";

export async function UserProfile(formData: FormData) {
  try {
    await connectMongoDb();
    const session = await getServerSession(authOptions);

    if (!session) {
      throw new Error("User is not authenticated");
    }

    const name = formData.get("displayName")?.toString() || "";
    const location = formData.get("location")?.toString() || "";
    const bio = formData.get("bio")?.toString() || "";
    const bgType = formData.get("bgType")?.toString() || "";
    const bgColor = formData.get("bgColor")?.toString() || "";
    const bgImage = formData.get("bgImage")?.toString() || "";
    const avatarImage = formData.get("avatarImage")?.toString() || "";

    await UserPage.updateOne(
      { owner: session?.user?.email },
      { displayName: name, location: location, bio: bio, bgType: bgType, bgColor: bgColor, bgImage: bgImage, avatarImage: avatarImage }
    );
    return { success: true, message: "User profile updated successfully" };
  } catch (error) {
    console.error("Error updating user profile:", error);
    return { success: false, message: "error occured" };
  }
}

export async function saveSocials(formData: FormData){
  try {
    await connectMongoDb();
    const session = await getServerSession(authOptions);
    
    if (!session) {
      throw new Error("User is not authenticated");
    }

    const buttonValues: Record<string, string> = {};
    formData.forEach((value, key) => {
      buttonValues[key] = value.toString();
    });

    await UserPage.updateOne(
      { owner: session?.user?.email },
      { button:  buttonValues }
    );
    return { success: true, message: "Social links updated successfully" };
  } catch (error) {
    console.error("Error updating social links:", error);
    return { success: false, message: "Error occured" };
  }
} 

export async function savePageLinks(links: any) {
  try {
    await connectMongoDb();
    const session = await getServerSession(authOptions);

    if (!session) {
      throw new Error("User is not authenticated");
    }

    await UserPage.updateOne(
      { owner: session?.user?.email },
      { links }
    );
    return { success: true, message: "Page links updated successfully" };
  } catch (error) {
    console.error("Error updating page links:", error);
    return { success: false, message: "Error occured" };
  }
}
