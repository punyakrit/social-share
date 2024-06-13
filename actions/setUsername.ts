"use server"

import { authOptions } from "@/lib/authOptions"
import  connectMongoDb  from "@/lib/dbConnect"
import { UserPage } from "@/models/Onboarding"
import { getServerSession } from "next-auth"
export async function getUsername(data: any) {
    const username = data.get('username')

    await connectMongoDb()

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
