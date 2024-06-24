import { Inter } from "next/font/google";
import "../globals.css";
import SideBar from "@/components/dashboard/SideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import connectMongoDb from "@/lib/dbConnect";
import { UserPage } from "@/models/Onboarding";
import { Toaster } from "@/components/ui/toaster";
import AppBar from "@/components/dashboard/AppBar";
import SideBarHeader from "@/components/dashboard/SideBarHeader";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }

  await connectMongoDb();
  const exists = await UserPage.findOne({
    owner: session.user?.email,
  });

  if (!exists) {
    redirect("/onboarding");
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-black flex font-opensans`}>
        <Toaster />
        <div className=" w-full flex flex-row items-start justify-start bg-purple-600/20">
          <SideBarHeader session={session} />
          {children}
        </div>
      </body>
    </html>
  );
}
