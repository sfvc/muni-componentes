import React, { useState } from 'react'
import DefaultNavbar from '../assets/layout/DefaultNavbar'
import { TextInput } from 'flowbite-react'
import { FaCopy, FaExpand, FaCompress } from 'react-icons/fa'

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [expandCode, setExpandCode] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

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
    <>
      <div>
        <DefaultNavbar />
        <div className='min-h-screen bg-white dark:bg-gray-900 text-white p-8'>
          <div className='max-w-5xl mx-auto'>
            <div className='border-b border-gray-700 pb-8 mb-5'>
              <h1 className='text-5xl font-bold mb-4 text-center text-black dark:text-white'>Login</h1>
            </div>
            <div className='dark:bg-gray-800 bg-gray-200 p-4 rounded text-black dark:text-white'>
              <div className='flex justify-end mb-2'>
                <button
                  onClick={() => setExpandCode(!expandCode)}
                  className='py-1 px-3 rounded flex items-center justify-center gap-2 hover:bg-blue-700 bg-blue-500 dark:hover:bg-blue-600 text-white'
                >
                  {expandCode ? <FaCompress className='mt-1' /> : <FaExpand className='mt-1' />}
                  {expandCode ? 'Ocultar Código' : 'Mostrar Código'}
                </button>
              </div>
              {expandCode && (
                <pre>
                  <code>
                    {`        <div className='loginwrapper'>
            <div className='lg-inner-column'>
              <div className='left-column relative z-[1]'>

                <div className='h-full w-full pointer-events-none'>
                  <img
                    src='/src/images/fotoLogin.jpg'
                    alt='Imagen del la libreria de componentes'
                    className='h-dvh w-full'
                  />
                </div>

              </div>
              <div className='right-column relative bg-gray-100 dark:bg-gray-700'>
                <div className='inner-content h-full flex flex-col'>
                  <div className='auth-box h-full flex flex-col justify-center'>

                    <img
                      src='/src/images/logo_CATACAPI_oscuro.png'
                      alt='Logo en modo claro'
                      className='w-48 md:w-64 pb-6 inline-block mx-auto pointer-events-none dark:hidden'
                    />
                    <img
                      src='/src/images/logo_CATACAPI_claro.png'
                      alt='Logo en modo oscuro'
                      className='w-48 md:w-64 pb-6 mx-auto pointer-events-none hidden dark:inline-block'
                    />

                    <div className='text-center 2xl:mb-10 mb-4'>
                      <h4 className='font-bold dark:text-white'>Iniciar Sesión</h4>
                      <div className='text-slate-500 text-base dark:text-white'>
                        Completa los datos para ingresar al sistema
                      </div>
                    </div>

                    <form className='relative'>
                      <TextInput
                        name='username'
                        label='usuario'
                        autoComplete='username'
                        className='mb-2'
                        placeholder='Usuario'
                        style={{ backgroundColor: 'white', color: 'gray', border: 'none' }}
                      />
                      <TextInput
                        name='password'
                        label='Contraseña'
                        type={showPassword ? 'text' : 'password'}
                        autoComplete='current-password'
                        className='mb-2 mt-2'
                        placeholder='Contraseña'
                        style={{ backgroundColor: 'white', color: 'gray', border: 'none' }}
                      />

                      <button
                        type='button'
                        className='absolute top-1/2 right-2 transform -translate-y-1/2'
                        title='Mostrar Contraseña'
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword
                          ? (
                            <Tooltip content='Ocultar Contraseña'>
                              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-eye' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='#000000' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                <path d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
                                <path d='M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6' />
                              </svg>
                            </Tooltip>
                            )
                          : (
                            <Tooltip content='Mostrar Contraseña'>
                              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-eye-closed' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='#000000' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                <path d='M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4' />
                                <path d='M3 15l2.5 -3.8' />
                                <path d='M21 14.976l-2.492 -3.776' />
                                <path d='M9 17l.5 -4' />
                                <path d='M15 17l-.5 -4' />
                              </svg>
                            </Tooltip>
                            )}
                      </button>

                      <button className='btn btn-primary block w-full text-center mt-2'>Iniciar Sesión</button>
                    </form>

                  </div>
                  <div className='auth-footer text-center text-black dark:text-white'>
                    Copyright &copy; <span className='auth-footer'>{(new Date().getFullYear())}</span>, Municipalidad de la Ciudad de San Fernando Del Valle de Catamarca.
                  </div>
                </div>
              </div>
            </div>
          </div>
`}
                  </code>
                </pre>
              )}
              <div className='flex justify-end mt-2'>
                <button
                  onClick={() => copyToClipboard(
                    `<div className='loginwrapper'>
            <div className='lg-inner-column'>
              <div className='left-column relative z-[1]'>

                <div className='h-full w-full pointer-events-none'>
                  <img
                    src='/src/images/fotoLogin.jpg'
                    alt='Imagen del la libreria de componentes'
                    className='h-dvh w-full'
                  />
                </div>

              </div>
              <div className='right-column relative bg-gray-100 dark:bg-gray-700'>
                <div className='inner-content h-full flex flex-col'>
                  <div className='auth-box h-full flex flex-col justify-center'>

                    <img
                      src='/src/images/logo_CATACAPI_oscuro.png'
                      alt='Logo en modo claro'
                      className='w-48 md:w-64 pb-6 inline-block mx-auto pointer-events-none dark:hidden'
                    />
                    <img
                      src='/src/images/logo_CATACAPI_claro.png'
                      alt='Logo en modo oscuro'
                      className='w-48 md:w-64 pb-6 mx-auto pointer-events-none hidden dark:inline-block'
                    />

                    <div className='text-center 2xl:mb-10 mb-4'>
                      <h4 className='font-bold dark:text-white'>Iniciar Sesión</h4>
                      <div className='text-slate-500 text-base dark:text-white'>
                        Completa los datos para ingresar al sistema
                      </div>
                    </div>

                    <form className='relative'>
                      <TextInput
                        name='username'
                        label='usuario'
                        autoComplete='username'
                        className='mb-2'
                        placeholder='Usuario'
                        style={{ backgroundColor: 'white', color: 'gray', border: 'none' }}
                      />
                      <TextInput
                        name='password'
                        label='Contraseña'
                        type={showPassword ? 'text' : 'password'}
                        autoComplete='current-password'
                        className='mb-2 mt-2'
                        placeholder='Contraseña'
                        style={{ backgroundColor: 'white', color: 'gray', border: 'none' }}
                      />

                      <button
                        type='button'
                        className='absolute top-1/2 right-2 transform -translate-y-1/2'
                        title='Mostrar Contraseña'
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword
                          ? (
                            <Tooltip content='Ocultar Contraseña'>
                              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-eye' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='#000000' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                <path d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
                                <path d='M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6' />
                              </svg>
                            </Tooltip>
                            )
                          : (
                            <Tooltip content='Mostrar Contraseña'>
                              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-eye-closed' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='#000000' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                <path d='M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4' />
                                <path d='M3 15l2.5 -3.8' />
                                <path d='M21 14.976l-2.492 -3.776' />
                                <path d='M9 17l.5 -4' />
                                <path d='M15 17l-.5 -4' />
                              </svg>
                            </Tooltip>
                            )}
                      </button>

                      <button className='btn btn-primary block w-full text-center mt-2'>Iniciar Sesión</button>
                    </form>

                  </div>
                  <div className='auth-footer text-center text-black dark:text-white'>
                    Copyright &copy; <span className='auth-footer'>{(new Date().getFullYear())}</span>, Municipalidad de la Ciudad de San Fernando Del Valle de Catamarca.
                  </div>
                </div>
              </div>
            </div>
          </div>`, 'boton4')}
                  className={`py-1 px-3 rounded flex items-center justify-center gap-2 ${copiedButton === 'boton4' ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white'}`}
                >
                  <FaCopy className='mt-1' />
                  {copiedButton === 'boton4' ? 'Copiado!' : 'Copiar Código'}
                </button>
              </div>
            </div>
          </div>
          <div className='loginwrapper'>
            <div className='lg-inner-column'>
              <div className='left-column relative z-[1]'>

                <div className='h-full w-full pointer-events-none'>
                  <img
                    src='/src/images/fotoLogin.jpg'
                    alt='Imagen del la libreria de componentes'
                    className='h-dvh w-full'
                  />
                </div>

              </div>
              <div className='right-column relative bg-gray-100 dark:bg-gray-700'>
                <div className='inner-content h-full flex flex-col'>
                  <div className='auth-box h-full flex flex-col justify-center'>

                    <img
                      src='/src/images/logo_CATACAPI_oscuro.png'
                      alt='Logo en modo claro'
                      className='w-48 md:w-64 pb-6 inline-block mx-auto pointer-events-none dark:hidden'
                    />
                    <img
                      src='/src/images/logo_CATACAPI_claro.png'
                      alt='Logo en modo oscuro'
                      className='w-48 md:w-64 pb-6 mx-auto pointer-events-none hidden dark:inline-block'
                    />

                    <div className='text-center 2xl:mb-10 mb-4'>
                      <h4 className='font-bold dark:text-white'>Iniciar Sesión</h4>
                      <div className='text-slate-500 text-base dark:text-white'>
                        Completa los datos para ingresar al sistema
                      </div>
                    </div>

                    <form className='relative'>
                      <TextInput
                        name='username'
                        label='usuario'
                        autoComplete='username'
                        className='mb-2'
                        placeholder='Usuario'
                        style={{ backgroundColor: 'white', color: 'gray', border: 'none' }}
                      />
                      <TextInput
                        name='password'
                        label='Contraseña'
                        type={showPassword ? 'text' : 'password'}
                        autoComplete='current-password'
                        className='mb-2 mt-2'
                        placeholder='Contraseña'
                        style={{ backgroundColor: 'white', color: 'gray', border: 'none' }}
                      />

                      <button
                        type='button'
                        className='absolute top-1/2 right-2 transform -translate-y-1/2'
                        title='Mostrar Contraseña'
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword
                          ? (
                            <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-eye' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='#000000' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                              <path d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
                              <path d='M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6' />
                            </svg>
                            )
                          : (
                            <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-eye-closed' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='#000000' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                              <path d='M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4' />
                              <path d='M3 15l2.5 -3.8' />
                              <path d='M21 14.976l-2.492 -3.776' />
                              <path d='M9 17l.5 -4' />
                              <path d='M15 17l-.5 -4' />
                            </svg>

                            )}
                      </button>

                      <button className='btn btn-primary block w-full text-center mt-2'>Iniciar Sesión</button>
                    </form>

                  </div>
                  <div className='auth-footer text-center text-black dark:text-white'>
                    Copyright &copy; <span className='auth-footer'>{(new Date().getFullYear())}</span>, Municipalidad de la Ciudad de San Fernando Del Valle de Catamarca.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
