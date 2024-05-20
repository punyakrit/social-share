import { db } from "@/lib/db";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { name, email } = await req.json()

    await db()

    await User.create({
        name,
        email
    })

    return NextResponse.json({
        message: "User Created"
    }, {
        status: 201
    })
}


export async function GET(req: NextRequest) {
    await db();
  
    const email = req.nextUrl.searchParams.get("email");
  
    try {
      const user = await User.findOne({ email });
      if (user) {
        return NextResponse.json({ validated: user.validated }, { status: 200 });
      } else {
        return NextResponse.json({ message: "User not found" }, { status: 400 });
      }
    } catch (error) {
      console.error("Error fetching user validation status:", error);
      return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
  }