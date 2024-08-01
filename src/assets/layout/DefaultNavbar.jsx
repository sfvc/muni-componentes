import React from 'react'
import { DarkThemeToggle, Flowbite, Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'

export function DefaultNavbar () {
  return (
    <div>
      <Navbar fluid className='navbar__muni'>
        <Navbar.Brand as={Link} to='/'>
          <img src='/src/images/logo_CATACAPI.png' className='mr-3 h-20 sm:h-24' alt='Logito' />
        </Navbar.Brand>
        <div className='flex md:order-2 gap-4'>

          <Flowbite className='navbar__muni'>
            <DarkThemeToggle />
          </Flowbite>

          {/* <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='User settings' img='/src/images/laVieja.jpg' rounded />
          }
          >
            <Dropdown.Header>
              <span className='block text-sm'>El Papu</span>
              <span className='block truncate text-sm font-medium'>papurruli@gmail.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Rol: <span className='font-bold'>Capo</span></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Cambiar Contraseña</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Cerrar Sesión</Dropdown.Item>
          </Dropdown> */}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link as={Link} to='/' className='text-white navbar__links'>
            Instalación
          </Navbar.Link>
          <Navbar.Link as={Link} to='/componentes' className='text-white navbar__links'>Componentes</Navbar.Link>
          {/* <Navbar.Link as={Link} to='/empanadas' className='text-white navbar__links'>Servicio de empanadas</Navbar.Link>
        <Navbar.Link as={Link} to='/useful-sites' className='text-white navbar__links'>Sitios Útiles</Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default DefaultNavbar
