'use client'

import { Navbar } from 'flowbite-react'

export function DefaultNavbar () {
  return (
    <Navbar fluid className='navbar'>
      <Navbar.Brand href='/'>
        <img src='/src/images/logo_CATACAPI.png' className='mr-3 h-20 sm:h-24' alt='Logito' />
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href='/' className='text-white navbar__links'>
          Inicio
        </Navbar.Link>
        <Navbar.Link href='#' className='text-white navbar__links'>Documentación</Navbar.Link>
        <Navbar.Link href='https://nahuewe.github.io/empanadas/' className='text-white navbar__links'>Servicio de empanadas</Navbar.Link>
        <Navbar.Link href='#' className='text-white navbar__links'>Sitios Utiles</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default DefaultNavbar
