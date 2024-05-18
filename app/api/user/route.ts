import { db } from "@/lib/db";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const {name, email} = await req.json()

    await db()

    await User.create({
        name, 
        email
    })

    return NextResponse.json({
        message: "User Created"
    },{
        status: 201
    })
}