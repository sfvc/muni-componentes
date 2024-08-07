import React from 'react'
import DefaultNavbar from '../assets/layout/DefaultNavbar'
import { Clipboard } from 'flowbite-react'
import instalacion from '../assets/components/instalacion.json'

const HomePage = () => {
  return (
    <main>
      <DefaultNavbar />
      <div className='min-h-screen bg-white dark:bg-gray-900 text-white p-8'>
        <div className='max-w-5xl mx-auto'>
          <div className='border-b border-gray-700 pb-8 mb-10'>
            <h1 className='text-5xl font-bold mb-4 rainbow__text text-center'>Munibite</h1>
            <p className='text-lg text-black dark:text-white'>
              Instalación de las librerías necesarias, compuestas por <a href='https://tailwindcss.com/docs/installation/using-postcss' target='_blank' rel='noreferrer' className='text-blue-500'>TailwindCSS</a> y <a href='https://flowbite-react.com/docs/getting-started/introduction' target='_blank' rel='noreferrer' className='text-blue-500'>Flowbite React</a>.
            </p>
          </div>

          {instalacion.map(({ title, description, code, buttonId, isLink, link, linkText }, index) => (
            <div className='mb-10 text-black dark:text-white' key={index}>
              <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
              <p className='mb-4'>{description}</p>
              {isLink
                ? (
                  <div className='mb-4'>
                    <a href={link} download className='inline-block bg-blue-500 text-white py-2 px-4 rounded'>{linkText}</a>
                  </div>
                  )
                : (
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
                  )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default HomePage
