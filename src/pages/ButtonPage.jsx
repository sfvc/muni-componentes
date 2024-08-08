import React from 'react'
import DefaultNavbar from '../assets/layout/DefaultNavbar'
import { Button, Clipboard } from 'flowbite-react'
import { AiOutlineLoading } from 'react-icons/ai'
import botones from '../json/botones.json'

const ButtonPage = () => {
  const [botonesNormales] = botones
  const botonesPildora = botones[1]

  return (
    <main>
      <DefaultNavbar />
      <div className='min-h-screen bg-white dark:bg-gray-900 text-white p-8'>
        <div className='max-w-7xl mx-auto overflow-x-hidden'>
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
              <Button disabled>Deshabilitado</Button>
              <Button size='md' isProcessing processingSpinner={<AiOutlineLoading className='h-6 w-6 animate-spin' />}>
                Cargando
              </Button>
            </div>

            {[botonesNormales].map(({ title, code, description, buttonId }, index) => (
              <div className='mb-10 text-black dark:text-white overflow-x-auto' key={index}>
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

            <div className='flex flex-wrap gap-2 justify-center mb-5'>
              <Button pill>Default</Button>
              <Button color='blue' pill>Azul</Button>
              <Button color='success' pill>Enviar</Button>
              <Button color='failure' pill>Cancelar</Button>
              <Button color='warning' pill>Peligro</Button>
              <Button disabled pill>Deshabilitado</Button>
              <Button size='md' isProcessing pill processingSpinner={<AiOutlineLoading className='h-6 w-6 animate-spin' />}>
                Cargando
              </Button>
            </div>

            {[botonesPildora].map(({ title, code, description, buttonId }, index) => (
              <div className='mb-10 text-black dark:text-white overflow-x-auto' key={index}>
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

export default ButtonPage
