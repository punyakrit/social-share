import connectMongoDb from "@/lib/dbConnect";
import { UserPage } from "@/models/Onboarding";
import { Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const SidebarLinks = async ({ session }: any) => {
  await connectMongoDb();
  const exists = await UserPage.findOne({
    owner: session?.user?.email,
  });
  return (
    <Link href={"/" + exists?.uri} className="px-7">
      <div className="flex items-center mt-4 bg-white/10 mx-auto rounded-lg justify-between  px-3 py-4 cursor-pointer">
        <span className="text-white/50">
          {exists?.uri?.slice(0, 1)?.toUpperCase()}
          {exists?.uri?.slice(1, exists?.uri?.length)}
        </span>
        <Link2 className="text-white/50 mr-2" />
      </div>
    </Link>
  );
};

export default SidebarLinks;
