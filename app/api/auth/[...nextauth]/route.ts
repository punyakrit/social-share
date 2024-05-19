import { db } from "@/lib/db";
import User from "@/models/user";
import axios from "axios";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }: any) {
      if (account.provider === "google") {
        const { name, email } = user;

        try {
          await db();

          const userExists = await User.findOne({ email });  // Await the database query

          if (!userExists) {
            const res = await axios.post(`${process.env.NEXTAUTH_URL}/api/user`, {
              name,
              email
            });

            if (res.status === 200 || res.status === 201) {
              return true;
            } else {
              console.log('Sign-in failed with status: ', res.status);
              return false;
            }
          } else {
            console.log('User already exists');
            return true;
          }
        } catch (e) {
          console.log('Sign-in error: ', e);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account }: any) {
      if (user) {

        await db();
        const dbUser = await User.findOne({ email: user.email });
        if (dbUser) {
          token.id = dbUser._id;
        }
      }
      // console.log(token.id)
      return token;
    },
    async session({ session, token, user }: any) {
      if (token) {
        session.user.id = token.id;
      }
      return session
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
