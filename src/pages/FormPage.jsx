import React, { useState } from 'react'
import { Clipboard, Datepicker, Label, Select, TextInput } from 'flowbite-react'
import form from '../json/form.json'

const FormPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <main>
      <div className='min-h-screen bg-white dark:bg-gray-900 text-white p-8'>
        <div className='max-w-5xl mx-auto overflow-x-hidden'>
          <div className='border-b border-gray-700 pb-8 mb-5'>
            <h1 className='text-5xl font-bold mb-4 text-center text-black dark:text-white'>Formulario</h1>
          </div>
          <div>
            <div className='mb-10 text-black dark:text-white'>
              <div className='grid md:grid-cols-2 gap-4 grid-cols-1'>
                <div className='mb-4'>
                  <div className='mb-2 block dark:text-white'>
                    <Label
                      color='gray'
                      htmlFor='nombre'
                      value='Nombre'
                    />
                  </div>
                  <TextInput
                    name='nombre'
                    placeholder='Nombre'
                  />
                </div>

                <div className='mb-4'>
                  <div className='mb-2 block dark:text-white'>
                    <Label
                      color='gray'
                      htmlFor='apellido'
                      value='Apellido'
                    />
                  </div>
                  <TextInput
                    name='apellido'
                    placeholder='Apellido'
                  />
                </div>

                <div className='mb-4'>
                  <div className='mb-2 block dark:text-white'>
                    <Label
                      color='gray'
                      htmlFor='fecha'
                      value='Fecha'
                    />
                  </div>
                  <Datepicker language='es-AR' labelTodayButton='Hoy' labelClearButton='Limpiar' />
                </div>

                <div className='mb-4'>
                  <div className='mb-2 block dark:text-white'>
                    <Label
                      htmlFor='estadoCivil'
                      value='Estado civil'
                    />
                  </div>
                  <Select
                    name='estadoCivil'
                    id='estadoCivil'
                  >
                    <option value='' hidden>Selecciona tu estado civil</option>
                    <option value='Si'>Cornudo</option>
                    <option value='No'>Cornudon't</option>
                  </Select>
                </div>

                <div className='mb-4'>
                  <div className='mb-2 block'>
                    <Label htmlFor='password' value='Contraseña' />
                  </div>
                  <div className='relative'>
                    <TextInput
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Ingrese la contraseña'
                    />
                    <button
                      type='button'
                      className='absolute top-1/2 right-2 transform -translate-y-1/2'
                      title='Mostrar Contraseña'
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword
                        ? (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='icon icon-tabler icon-tabler-eye dark:stroke-white'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            strokeWidth='1'
                            stroke='#000000'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                            <path d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
                            <path d='M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6' />
                          </svg>
                          )
                        : (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='icon icon-tabler icon-tabler-eye-closed dark:stroke-white'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            strokeWidth='1'
                            stroke='#000000'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                            <path d='M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4' />
                            <path d='M3 15l2.5 -3.8' />
                            <path d='M21 14.976l-2.492 -3.776' />
                            <path d='M9 17l.5 -4' />
                            <path d='M15 17l-.5 -4' />
                          </svg>
                          )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {form.map(({ title, code, description, buttonId }, index) => (
              <div className='mb-10 text-black dark:text-white overflow-x-auto mt-5' key={index}>
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

export default FormPage
