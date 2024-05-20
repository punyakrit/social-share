import React from 'react'
import onb from '@/public/on.webp'
import Image from 'next/image'
import Username from '@/components/Username'
function Onboarding() {
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
