import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/db"; // Ensure this path is correct based on your project structure

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  //@ts-ignore
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // Optionally add more configuration options here
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
