import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import PopoverCard from "./ui/PopoverCard";

async function UserProfile() {
  const session = await getServerSession(authOptions);
  return <PopoverCard session={session} />;
}

export default UserProfile;
