import React, { useState } from 'react'
import ComponentsNavbar from '../assets/layout/ComponentsNavbar'
import { Button } from 'flowbite-react'
import { AiOutlineLoading } from 'react-icons/ai'

const ComponentsPage = () => {
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
    <main className='pt-24'> {/* Añadido un padding-top para compensar la altura de la navbar */}
      <ComponentsNavbar />
      <div className='min-h-screen bg-white dark:bg-gray-900 text-white p-8'>
        <div className='max-w-5xl mx-auto'>
          <div className='border-b border-gray-700 pb-8 mb-5'>
            <h1 className='text-5xl font-bold mb-4 text-center text-black dark:text-white'>Botones</h1>
          </div>
          <div className='mb-10 text-black dark:text-white'>
            <div className='flex flex-wrap gap-2 justify-center mb-5'>
              <Button>Default</Button>
              <Button color='blue'>Azul</Button>
              <Button color='success'>Enviar</Button>
              <Button color='failure'>Cancelar</Button>
              <Button color='warning'>Peligro</Button>
              <Button size='md' isProcessing processingSpinner={<AiOutlineLoading className='h-6 w-6 animate-spin' />}>
                Cargando
              </Button>
            </div>
            <div className='dark:bg-gray-800 bg-gray-200 p-4 rounded text-black dark:text-white'>
              <pre>
                <code>
                  {`
<div className='flex flex-wrap gap-2'>
  <Button>Default</Button>
  <Button color='blue'>Azul</Button>
  <Button color='success'>Enviar</Button>
  <Button color='failure'>Cancelar</Button>
  <Button color='warning'>Peligro</Button>
  <Button size='md' isProcessing processingSpinner={<AiOutlineLoading className='h-6 w-6 animate-spin' />}>
    Cargando
  </Button>
</div>
`}
                </code>
              </pre>
              <div className='flex justify-end mt-2'>
                <button
                  onClick={() => copyToClipboard(
                    `<div className='flex flex-wrap gap-2'>
  <Button>Default</Button>
  <Button color='blue'>Azul</Button>
  <Button color='success'>Enviar</Button>
  <Button color='failure'>Cancelar</Button>
  <Button color='warning'>Peligro</Button>
  <Button size='md' isProcessing processingSpinner={<AiOutlineLoading className='h-6 w-6 animate-spin' />}>
    Cargando
  </Button>
</div>`,
                    'buttonCode'
                  )}
                  className={`py-1 px-3 rounded ${copiedButton === 'buttonCode' ? 'bg-green-500 text-white' : 'hover:bg-blue-700 bg-blue-500 dark:hover:bg-blue-600 text-white'}`}
                >
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

export default ComponentsPage
