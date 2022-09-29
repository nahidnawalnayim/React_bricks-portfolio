import React, { ReactNode } from 'react'

import Header from './header'
import Footer from './footer'
import Try from '../pages/Try'
import Textimage from './textimage'

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between font-content antialiased">
      <Header />
      <main className="mb-auto">{children}</main>
      <Textimage />
      <Footer />
    </div>
  )
}

export default Layout
