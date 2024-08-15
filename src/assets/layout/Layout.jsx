import React, { useState } from 'react'
import DefaultNavbar from './DefaultNavbar'
import DefaultSideBar from './DefaultSideBar'
import DefaultFooter from './DefaultFooter'

export function Layout () {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <DefaultNavbar toggleSidebar={toggleSidebar} />

      <DefaultSideBar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <DefaultFooter />
    </div>
  )
}

export default Layout
