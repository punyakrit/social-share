"use server"

import { authOptions } from "@/lib/authOptions"
import { UserPage } from "@/models/Onboarding"
import mongoose from "mongoose"
import { getServerSession } from "next-auth"
export async function getUsername(data: any) {
    const username = data.get('username')

    mongoose.connect(process.env.MONGODB_URI || "")


    const existingUsername = await UserPage.findOne({
        uri: username
    })
    if (existingUsername) {
        return false;
    } else {
        const session = await getServerSession(authOptions)
        await UserPage.create({ uri: username,
             owner: session?.user?.email });
        return true;
    }


}
