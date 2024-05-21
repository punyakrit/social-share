"use client"
import React, { useEffect } from 'react'
import onb from '@/public/on.webp'
import Image from 'next/image'
import Username from '@/components/Username'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


function Onboarding() {
  const route = useRouter()
  const { status, data: session } = useSession();

useEffect(()=>{
  status !== "authenticated" ? route.push('/') : null
},[])
  return (
    <div className='flex px-20  h-screen items-center text-white'>
        <div className='w-1/2'>
            <Username/>
        </div>
        <div className='w-1/2'>
            <Image src={onb} className='rounded-3xl' alt='image'/>
        </div>
    </div>
  )
}

export default Onboarding
