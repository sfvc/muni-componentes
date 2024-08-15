import React from 'react'
import { Link } from 'react-router-dom'
import Illustration from '../images/laVieja.jpg'
import { Button } from 'flowbite-react'
function Error () {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-center py-20 dark:bg-slate-900'>
      <img src={Illustration} alt='' className='pointer-events-none h-56 w-56' />
      <div className='max-w-[546px] mx-auto w-full mt-12'>
        <h4 className='text-slate-900 mb-4 dark:text-white'>
          Página no encontrada
        </h4>
        <div className='dark:text-white text-base font-normal mb-10'>
          Esto pasa por curioso.
        </div>
      </div>
      <Button className='max-w-[300px] mx-auto w-full' as={Link} to='/'>
        Volver al inicio
      </Button>
    </div>
  )
}

export default Error
