import React, { useState } from 'react'
import DefaultNavbar from '../assets/layout/DefaultNavbar'
import { FaCopy } from 'react-icons/fa'
import { Card, Datepicker, TextInput } from 'flowbite-react'

const CardPage = () => {
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
            <h1 className='text-5xl font-bold mb-4 text-center text-black dark:text-white'>Cards</h1>
          </div>
          <div className='mb-10 text-black dark:text-white'>
            <div className='gap-2 mb-5'>
              <Card>
                <div className='md:flex justify-between items-center mb-6'>
                  <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Esta es una card de prueba donde colocar un titulo
                  </h5>
                  <div>
                    <TextInput
                      className='w-56'
                      placeholder='Buscar...'
                    />
                  </div>
                </div>
              </Card>
              <Datepicker language='es-AR' labelTodayButton='Hoy' labelClearButton='Limpiar' />
            </div>
            <div className='dark:bg-gray-800 bg-gray-200 p-4 rounded text-black dark:text-white'>
              <pre>
                <code>
                  {`
import { Card } from 'flowbite-react'

<Card>
    <div className='md:flex justify-between items-center mb-6'>
        <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Esta es una card de prueba donde colocar un titulo
        </h5>
        <div>
        <TextInput
            className='w-56'
            placeholder='Buscar...'
        />
        </div>
    </div>
</Card>
`}
                </code>
              </pre>
              <div className='flex justify-end mt-2'>
                <button
                  onClick={() => copyToClipboard(
                    `import { Card } from 'flowbite-react'

              <Card>
                <div className='md:flex justify-between items-center mb-6'>
                  <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Esta es una card de prueba donde colocar un titulo
                  </h5>
                  <div>
                    <TextInput
                        className='w-56'
                        placeholder='Buscar...'
                    />
                  </div>
                </div>
              </Card>`,
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

export default CardPage
