import React from 'react'
import { LayoutProps } from '../_utils/LayoutProps'
import Link from 'next/link'
import Image from 'next/image'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

const RootLayout: React.FC<LayoutProps> = async ({ children }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    redirect("/sign-in")
  }

  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex items-center gap-2'>
          <Image src="/logo.svg" alt='Logo' width={38} height={32}/>
          <h2 className='text-primary-100'>Prepwise</h2>
        </Link>
      </nav>

      {children}
    </div>
  )
}

export default RootLayout