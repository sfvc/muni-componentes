import React, { useState } from 'react'
import DefaultNavbar from '../assets/layout/DefaultNavbar'
import { Avatar, DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react'
import { FaCopy } from 'react-icons/fa'

const NavbarPage = () => {
  const [, setCopiedText] = useState(null)
  const [copiedButton, setCopiedButton] = useState(null)

  const copyToClipboard = (text, buttonId) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedText(text)
        setCopiedButton(buttonId)
        setTimeout(() => {
          setCopiedText(null)
          setCopiedButton(null)
        }, 2000)
      })
      .catch(err => {
        console.error('Error al copiar el código: ', err)
      })
  }

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
                      <Avatar alt='User settings' img='https://flowbite.com/docs/images/people/profile-picture-5.jpg' rounded />
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
            <div className='dark:bg-gray-800 bg-gray-200 p-4 rounded text-black dark:text-white'>
              <pre>
                <code>
                  {`
import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";


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
        <Avatar alt='User settings' img='https://flowbite.com/docs/images/people/profile-picture-5.jpg' rounded />
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
              <div className='flex justify-end mt-2'>
                <button
                  onClick={() => copyToClipboard(
                    `import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
                    
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
        <Avatar alt='User settings' img='https://flowbite.com/docs/images/people/profile-picture-5.jpg' rounded />
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
</Navbar>`,
                    'buttonCode'
                  )}
                  className={`py-1 px-3 rounded flex items-center justify-center gap-2 ${
                    copiedButton === 'buttonCode' ? 'bg-green-500 text-white' : 'hover:bg-blue-700 bg-blue-500 dark:hover:bg-blue-600 text-white'
                    }`}
                >
                  <FaCopy className='mt-1' />
                  {copiedButton === 'buttonCode' ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NavbarPage
