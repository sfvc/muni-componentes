import React, { useState } from 'react'
import DefaultNavbar from '../assets/layout/DefaultNavbar'

const HomePage = () => {
  const [copiedText, setCopiedText] = useState(null)
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
        <div className='max-w-4xl mx-auto'>
          <div className='border-b border-gray-700 pb-8 mb-10'>
            <h1 className='text-5xl font-bold mb-4 rainbow__text text-center'>Munibite</h1>
            <p className='text-lg text-black dark:text-white'>
              Instalación de las librerías necesarias, compuestas por <a href='https://tailwindcss.com/docs/installation/using-postcss' target='_blank' rel='noreferrer' className='text-blue-500'>TailwindCSS</a> y <a href='https://flowbite-react.com/docs/getting-started/introduction' target='_blank' rel='noreferrer' className='text-blue-500'>Flowbite React</a>.
            </p>
          </div>

          {[
            {
              title: '1. Instalar TailwindCSS.',
              description: 'Instalar TailwindCSS y crear los archivos tailwind.config.js y postcss.config.js',
              code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p',
              buttonId: 'installTailwind'
            },
            {
              title: '2. Añadir Tailwind a tu configuración de PostCSS.',
              description: 'Añade TailwindCSS y autoprefixer a tu archivo postcss.config.js.',
              code: 'export default {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {}\n  }\n}',
              buttonId: 'addTailwindConfig'
            },
            {
              title: '3. Configurar las rutas de la plantilla.',
              description: 'Añade las rutas para el uso correcto de Tailwind en tu archivo tailwind.config.js.',
              code: '/** @type {import(\'tailwindcss\').Config} */\nmodule.exports = {\n  content: ["./src/**/*.{html,js}"],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}',
              buttonId: 'configRoutes'
            },
            {
              title: '4. Descargar los estilos propios.',
              description: 'Descarga el archivo index.css que contiene todos los estilos propios, y luego pégalo en tu carpeta de estilos.',
              code: '',
              buttonId: null,
              isLink: true,
              link: '/index.css',
              linkText: 'Descargar index.css'
            },
            {
              title: '5. Instalar Flowbite React.',
              description: 'Instala la dependencia de Flowbite React a tu proyecto.',
              code: 'npm i flowbite-react',
              buttonId: 'installFlowbite'
            },
            {
              title: '6. Configurar las rutas de Flowbite React.',
              description: 'Añade las rutas para el uso correcto de Flowbite React en tu archivo tailwind.config.js.',
              code: 'const flowbite = require(\'flowbite-react/tailwind\')\n/** @type {import(\'tailwindcss\').Config} */\nexport default {\n  content: [\n    \'./src/**/*.{js,jsx,ts,tsx}\',\n    \'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}\',\n    flowbite.content()\n  ],\n  theme: {\n    extend: {}\n  },\n  plugins: [flowbite.plugin()]\n}',
              buttonId: 'configFlowbite'
            }
          ].map(({ title, description, code, buttonId, isLink, link, linkText }, index) => (
            <div className='mb-10 text-black dark:text-white' key={index}>
              <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
              <p className='mb-4'>{description}</p>
              <div className='dark:bg-gray-800 bg-gray-200 p-4 rounded text-black dark:text-white'>
                <pre>
                  <code>
                    {code}
                  </code>
                </pre>
                <div className='flex justify-end mt-2'>
                  {isLink
                    ? (
                      <a
                        href={link}
                        download={linkText}
                        className='inline-block bg-blue-500 text-white py-2 px-4 rounded'
                      >
                        {linkText}
                      </a>
                      )
                    : (
                      <button
                        onClick={() => copyToClipboard(code, buttonId)}
                        className={`py-1 px-3 rounded ${copiedButton === buttonId ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}
                      >
                        {copiedButton === buttonId ? '¡Copiado!' : 'Copiar'}
                      </button>
                      )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default HomePage
