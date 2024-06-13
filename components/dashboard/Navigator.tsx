"use client"

import React from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { LineChart, MoveLeftIcon, UserCog } from 'lucide-react';
import DashboardLogout from '../DashboardLogout';


function Navigator() {
    const router = usePathname();
  const currentPath = router;

  return (
    <div className="flex-col flex mx-10 text-center mt-10 space-y-3">
        <Link href="/dashboard">
          <div className={`text-xl flex items-center cursor-pointer ${currentPath === '/dashboard' ? 'text-white' : 'text-white/50 hover:text-white active:text-white'}`}>
            <UserCog className="h-5 mr-3" />
            User Profile
          </div>
        </Link>
        <Link href="/analytics">
          <div className={`text-xl flex items-center cursor-pointer ${currentPath === '/analytics' ? 'text-white' : 'text-white/50 hover:text-white active:text-white'}`}>
            <LineChart className="h-5 mr-3" />
            Analytics
          </div>
        </Link>
        <div className="text-xl cursor-pointer text-white/50 hover:text-white active:text-white">
          <DashboardLogout />
        </div>
        <Link href="/">
          <div className={`text-xl flex items-center cursor-pointer border-t pt-4 my-4 border-white/30 ${currentPath === '/' ? 'text-white' : 'text-white/50 hover:text-white active:text-white'}`}>
            <MoveLeftIcon className="h-5 mr-3" />
            Back to Home
          </div>
        </Link>
      </div>
  )
}

export default Navigator
