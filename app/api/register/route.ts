// import User from "@/models/auth";
// import connectMongoDb from "@/lib/dbConnect";
// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";


// export const POST = async (request: any) => {
//   const { email, password } = await request.json();

//   await connectMongoDb();

//   const existingUser = await User.findOne({ email });

//   if (existingUser) {
//     return new NextResponse("Email is already in use", { status: 400 });
//   }

//   const hashedPassword = await bcrypt.hash(password, 5);
//   const newUser = new User({
//     email,
//     password: hashedPassword,
//   });

//   try {
//     await newUser.save();
//     return new NextResponse("user is registered", { status: 200 });
//   } catch (err: any) {
//     return new NextResponse(err, {
//       status: 500,
//     });
//   }
// };

import User from "@/models/auth";
import connectMongoDb from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const {name, email, password } = await request.json();

    await connectMongoDb();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse("Email is already in use", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return new NextResponse("User is registered", { status: 200 });
  } catch (err: any) {
    console.error("Registration error:", err.message || err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
