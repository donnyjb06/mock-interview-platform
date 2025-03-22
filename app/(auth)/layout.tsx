import React from 'react'
import { LayoutProps } from '../_utils/LayoutProps'
import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/actions/auth.action';

const AuthLayout: React.FC<LayoutProps> = async ({ children }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (isUserAuthenticated) {
    redirect("/")
  }

  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default AuthLayout