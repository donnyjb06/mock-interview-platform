import React from 'react'
import { LayoutProps } from '../_utils/LayoutProps'

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default AuthLayout