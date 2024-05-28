import SideBar from '@/components/dashboard/SideBar'
import { authOptions } from '@/lib/authOptions'
import { Session } from 'inspector'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

async function page() {
  const session = await getServerSession(authOptions)
  
  return (
    <div className='text-white'>
        dashboard
      
    </div>
  )
}

export default page
