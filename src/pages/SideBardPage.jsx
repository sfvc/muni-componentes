import React, { useState } from 'react'
import { Sidebar, Button, Clipboard } from 'flowbite-react'
import { FaHome } from 'react-icons/fa'
import { IoIosRadioButtonOff, IoMdLogIn } from 'react-icons/io'
import { FiLayout } from 'react-icons/fi'
import { Link, Outlet } from 'react-router-dom'
import { HiMenu, HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi'
import { TbLayoutNavbar, TbLayoutSidebar } from 'react-icons/tb'
import { TfiLayoutMediaOverlayAlt } from 'react-icons/tfi'
import { twMerge } from 'tailwind-merge'
import navbar from '../json/navbar.json'

const SideBarPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <main>
      <div className='min-h-screen bg-white dark:bg-gray-900 text-white p-8'>
        <div className='max-w-6xl mx-auto overflow-x-hidden'>
          <div className='border-b border-gray-700 pb-8 mb-5'>
            <h1 className='text-5xl font-bold mb-4 text-center text-black dark:text-white'>Sidebar</h1>
          </div>
          <div className='mb-10 text-black dark:text-white'>
            <div className='flex flex-col navbar__muni dark:bg-gray-800'>

              <div className='md:hidden lg:hidden p-4'>
                <Button onClick={() => setSidebarOpen(!sidebarOpen)}>
                  <HiMenu className='h-6 w-6' />
                </Button>
              </div>

              <div className='flex flex-1'>
                <Sidebar className={`rounded-none w-44 transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
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

            {navbar.map(({ title, code, description, buttonId }, index) => (
              <div className='mb-10 text-black dark:text-white overflow-x-auto' key={index}>
                <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
                <p className='mb-4'>{description}</p>
                <>
                  <div className='grid w-full'>
                    <div className='relative'>
                      <input
                        id={buttonId}
                        type='text'
                        className='col-span-6 w-full border-gray-300 bg-gray-50 px-2.5 py-4 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                        value={title}
                        disabled
                        readOnly
                      />
                      <Clipboard.WithIconText valueToCopy={code} />
                    </div>
                  </div>
                  <div className='dark:bg-gray-800 bg-gray-200 p-4 rounded text-black dark:text-white'>
                    <pre>
                      <code>
                        {code}
                      </code>
                    </pre>
                  </div>
                </>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default SideBarPage
