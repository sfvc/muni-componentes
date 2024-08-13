import React from 'react'
import DefaultNavbar from './DefaultNavbar'
import DefaultSideBar from './DefaultSideBar'
import DefaultFooter from './DefaultFooter'

export function Layout () {
  return (
    <div className='flex flex-col min-h-screen'>
      <DefaultNavbar />

      <DefaultSideBar />

      <DefaultFooter />
    </div>
  )
}

export default Layout
