import React from 'react'
import { LayoutProps } from '../_utils/LayoutProps'

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

export default RootLayout