import React from 'react'
import { Footer, Sidebar } from 'flowbite-react'
import DefaultNavbar from './DefaultNavbar'
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi'

export function Layout () {
  return (
    <div className='flex flex-col min-h-screen'>
      <DefaultNavbar />
      <div className='flex flex-1'>
        <Sidebar className='rounded-none w-44 md:block hidden h-dvh'>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href='#' icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiViewBoards}>
                Kanban
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiInbox}>
                Inbox
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiTable}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href='#' icon={HiChartPie}>
                Upgrade to Pro
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiViewBoards}>
                Documentation
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiViewBoards}>
                Documentation
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiViewBoards}>
                Documentation
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiViewBoards}>
                Documentation
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        <div className='w-4/5 p-4'>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>
          <h1>Oli</h1>

        </div>
      </div>
      <Footer container className='rounded-none'>
        <Footer.Copyright
          by='Municipalidad de la Ciudad de San Fernando Del Valle de Catamarca.'
          href='https://www.catamarcaciudad.gob.ar'
          target='_blank'
          year={new Date().getFullYear()}
        />
      </Footer>
    </div>
  )
}

export default Layout
