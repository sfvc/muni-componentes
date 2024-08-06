import React from 'react'
import { DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'

export function DefaultNavbar () {
  return (
    <div>
      <Navbar fluid className='navbar__muni'>
        <Navbar.Brand as={Link} to='/'>
          <img src='./src/images/logo_CATACAPI_claro.png' className='mr-3 h-20 sm:h-28' alt='Logito' />
        </Navbar.Brand>
        <div className='flex md:order-2 gap-4'>

          <Flowbite className='navbar__muni'>
            <DarkThemeToggle className='dark:text-gray-400 text-white hover:bg-[#3ec2ff]' />
          </Flowbite>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link as={Link} to='/' className='text-white navbar__links'>
            Instalación
          </Navbar.Link>
          <div className='text-white dark:text-gray-400 navbar__links'>
            <Dropdown
              inline
              label='Componentes'
            >
              <Navbar.Link as={Link} to='/botones'>
                <Dropdown.Item>
                  Botones
                </Dropdown.Item>
              </Navbar.Link>

              <Dropdown.Divider />

              <Navbar.Link as={Link} to='/navbar'>
                <Dropdown.Item>
                  Navbar
                </Dropdown.Item>
              </Navbar.Link>

              <Dropdown.Divider />

              <Navbar.Link as={Link} to='/login'>
                <Dropdown.Item>
                  Login
                </Dropdown.Item>
              </Navbar.Link>
            </Dropdown>
          </div>
          <Navbar.Link as={Link} to='/layout' className='text-white navbar__links'>Layout</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default DefaultNavbar
