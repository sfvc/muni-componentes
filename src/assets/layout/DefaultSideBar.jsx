import React, { useState } from 'react'
import { Sidebar, Button } from 'flowbite-react'
import { FaHome } from 'react-icons/fa'
import { IoIosRadioButtonOff, IoMdLogIn } from 'react-icons/io'
import { FiLayout } from 'react-icons/fi'
import { Link, Outlet } from 'react-router-dom'
import { HiMenu, HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi'
import { TbLayoutNavbar, TbLayoutSidebar } from 'react-icons/tb'
import { TfiLayoutMediaOverlayAlt } from 'react-icons/tfi'
import { twMerge } from 'tailwind-merge'

export function DefaultSideBar () {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='flex flex-col min-h-screen navbar__muni dark:bg-gray-800'>

      <div className='md:hidden lg:hidden p-4'>
        <Button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <HiMenu className='h-6 w-6' />
        </Button>
      </div>

      <div className='flex flex-1'>
        <Sidebar className={`z-20 rounded-none w-44 fixedSideBard transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item as={Link} to='/' icon={FaHome}>
                Instalación
              </Sidebar.Item>
              <Sidebar.Item as={Link} to='/botones' icon={IoIosRadioButtonOff}>
                Botones
              </Sidebar.Item>
              <Sidebar.Collapse
                icon={FiLayout}
                label='Layout'
                renderChevronIcon={(theme, open) => {
                  const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm

                  return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />
                }}
              >
                <Sidebar.Item as={Link} to='navbar' icon={TbLayoutNavbar}>Navbar</Sidebar.Item>
                <Sidebar.Item as={Link} to='sidebar' icon={TbLayoutSidebar}>Side Bar</Sidebar.Item>
                <Sidebar.Item as={Link} to='navbar' icon={TfiLayoutMediaOverlayAlt}>Footer</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item as={Link} to='/login' icon={IoMdLogIn}>
                Login
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>

        <div className='w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DefaultSideBar
