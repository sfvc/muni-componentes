import React from 'react'
import { Footer } from 'flowbite-react'

export function DefaultFooter () {
  return (
    <div className='z-20 ml-0 md:ml-48 navbar__muni'>
      <Footer container className='rounded-none navbar__muni'>
        <Footer.Copyright
          by='Municipalidad de la Ciudad de San Fernando Del Valle de Catamarca.'
          href='https://www.catamarcaciudad.gob.ar'
          target='_blank'
          className='text-white'
          year={new Date().getFullYear()}
        />
      </Footer>
    </div>
  )
}

export default DefaultFooter
