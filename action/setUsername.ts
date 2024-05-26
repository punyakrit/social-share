"use server"

import { UserPage } from "@/models/Onboarding"
import mongoose from "mongoose"
export async function getUsername(data: any) {
    const username = data.get('username')

    mongoose.connect(process.env.MONGODB_URI || "")


    const existingUsername = await UserPage.findOne({
        uri: username
    })
    if (existingUsername) {
        return false;
    } else {
        await UserPage.create({ uri: username });
        return true;
    }


}
