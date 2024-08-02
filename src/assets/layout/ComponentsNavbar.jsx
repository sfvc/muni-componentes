import React from 'react'
import { DarkThemeToggle, Flowbite, Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'

export function ComponentsNavbar () {
  return (
    <div>
      <Navbar fluid className='navbar__muni fixed top-0 w-full z-40'>
        <Navbar.Brand as={Link} to='/'>
          <img src='./src/images/logo_CATACAPI.png' className='mr-3 h-20 sm:h-24' alt='Logito' />
        </Navbar.Brand>
        <div className='flex md:order-2 gap-4'>
          <Flowbite className='navbar__muni'>
            <DarkThemeToggle />
          </Flowbite>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link as={Link} to='/' className='text-white navbar__links'>
            Instalación
          </Navbar.Link>
          <Navbar.Link as={Link} to='/componentes' className='text-white navbar__links'>Botones</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default ComponentsNavbar
