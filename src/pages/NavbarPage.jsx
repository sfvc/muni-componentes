import React from 'react'
import DefaultNavbar from '../assets/layout/DefaultNavbar'
import { Avatar, DarkThemeToggle, Dropdown, Flowbite, Navbar, Clipboard } from 'flowbite-react'

const NavbarPage = () => {
  return (
    <main>
      <DefaultNavbar />
      <div className='min-h-screen bg-white dark:bg-gray-900 text-white p-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='border-b border-gray-700 pb-8 mb-5'>
            <h1 className='text-5xl font-bold mb-4 text-center text-black dark:text-white'>Navbar</h1>
          </div>
          <div className='mb-10 text-black dark:text-white'>
            <div className='gap-2 mb-5'>
              <Navbar fluid className='navbar__muni'>
                <Navbar.Brand href='/'>
                  <img src='/src/images/logo_CATACAPI_claro.png' className='mr-3 h-20 sm:h-24' alt='Flowbite React Logo' />
                </Navbar.Brand>
                <div className='flex md:order-2 gap-2'>

                  <Flowbite className='navbar__muni'>
                    <DarkThemeToggle className='dark:text-gray-400 text-white hover:bg-[#3ec2ff]' />
                  </Flowbite>

                  <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <Avatar rounded />
          }
                  >
                    <Dropdown.Header>
                      <span className='block text-sm'>test test</span>
                      <span className='block truncate text-sm font-medium'>test@test.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Cambiar Contraseña</Dropdown.Item>
                    <Dropdown.Item>Cerrar Sesión</Dropdown.Item>
                  </Dropdown>
                  <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                  <Navbar.Link href='#' className='text-white navbar__links'>
                    Inicio
                  </Navbar.Link>
                  <Navbar.Link href='#' className='text-white navbar__links'>Coso</Navbar.Link>
                  <Navbar.Link href='#' className='text-white navbar__links'>Cosito</Navbar.Link>
                  <Navbar.Link href='#' className='text-white navbar__links'>Contacto</Navbar.Link>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <div className='grid w-full'>
              <div className='relative'>
                <input
                  id='navbarInstall'
                  type='text'
                  className='col-span-6 w-full border-gray-300 bg-gray-50 px-2.5 py-4 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  value='Navbar'
                  disabled
                  readOnly
                />
                <Clipboard.WithIconText valueToCopy={`import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";

<Navbar fluid className='navbar__muni'>
    <Navbar.Brand href='/'>
        <img src='/src/images/logo_CATACAPI_claro.png' className='mr-3 h-20 sm:h-24' alt='Flowbite React Logo' />
    </Navbar.Brand>
<div className='flex md:order-2 gap-2'>

    <Flowbite className='navbar__muni'>
    <DarkThemeToggle className='dark:text-gray-400 text-white hover:bg-[#3ec2ff]' />
    </Flowbite>

    <Dropdown
        arrowIcon={false}
        inline
        label={
        <Avatar rounded />
        }
        >
        <Dropdown.Header>
        <span className='block text-sm'>test test</span>
        <span className='block truncate text-sm font-medium'>test@test.com</span>
        </Dropdown.Header>
        <Dropdown.Item>Cambiar Contraseña</Dropdown.Item>
        <Dropdown.Item>Cerrar Sesión</Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
</div>
    <Navbar.Collapse>
        <Navbar.Link href='#' className='text-white navbar__links'>
        Inicio
        </Navbar.Link>
        <Navbar.Link href='#' className='text-white navbar__links'>Coso</Navbar.Link>
        <Navbar.Link href='#' className='text-white navbar__links'>Cosito</Navbar.Link>
        <Navbar.Link href='#' className='text-white navbar__links'>Contacto</Navbar.Link>
    </Navbar.Collapse>
</Navbar>
`}
                />
              </div>
            </div>
            <div className='dark:bg-gray-800 bg-gray-200 p-4 rounded text-black dark:text-white'>
              <pre>
                <code>
                  {`import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";

<Navbar fluid className='navbar__muni'>
    <Navbar.Brand href='/'>
        <img src='/src/images/logo_CATACAPI_claro.png' className='mr-3 h-20 sm:h-24' alt='Flowbite React Logo' />
    </Navbar.Brand>
<div className='flex md:order-2 gap-2'>

    <Flowbite className='navbar__muni'>
    <DarkThemeToggle className='dark:text-gray-400 text-white hover:bg-[#3ec2ff]' />
    </Flowbite>

    <Dropdown
        arrowIcon={false}
        inline
        label={
        <Avatar rounded />
        }
        >
        <Dropdown.Header>
        <span className='block text-sm'>test test</span>
        <span className='block truncate text-sm font-medium'>test@test.com</span>
        </Dropdown.Header>
        <Dropdown.Item>Cambiar Contraseña</Dropdown.Item>
        <Dropdown.Item>Cerrar Sesión</Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
</div>
    <Navbar.Collapse>
        <Navbar.Link href='#' className='text-white navbar__links'>
        Inicio
        </Navbar.Link>
        <Navbar.Link href='#' className='text-white navbar__links'>Coso</Navbar.Link>
        <Navbar.Link href='#' className='text-white navbar__links'>Cosito</Navbar.Link>
        <Navbar.Link href='#' className='text-white navbar__links'>Contacto</Navbar.Link>
    </Navbar.Collapse>
</Navbar>
`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NavbarPage
