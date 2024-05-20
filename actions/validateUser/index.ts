"use server";
import { db } from "@/lib/db";
import User from "@/models/user";

export async function updateUsername(username: any, email: any) {
    await db();

    if (!username) {
        return { message: 'Username is required' };
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return { message: 'Username is already taken' };
    }

    const user = await User.findOne({ email });
    if (!user) {
        return { message: 'User not found' };
    }

    user.username = username;
    user.validated = true;
    await user.save();

    return { message: 'Username updated' };
}
