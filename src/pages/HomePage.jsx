import React, { Component } from 'react'
import DefaultNavbar from '../assets/layout/DefaultNavbar'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      copiedText: null
    }
    this.copyToClipboard = this.copyToClipboard.bind(this)
  }

  copyToClipboard (text) {
    navigator.clipboard.writeText(text).then(() => {
      this.setState({ copiedText: text }, () => {
        setTimeout(() => this.setState({ copiedText: null }), 2000)
      })
    }).catch(err => {
      console.error('Error al copiar el código: ', err)
    })
  }

  render () {
    return (
      <main>
        <DefaultNavbar />
        <div className='min-h-screen bg-white dark:bg-gray-900 text-white p-8'>
          <div className='max-w-4xl mx-auto'>
            <div className='border-b border-gray-700 pb-8 mb-10'>
              <h1 className='text-5xl font-bold mb-4 rainbow__text text-center'>Munibite</h1>
              <p className='text-lg text-black dark:text-white'>
                Instalacion de las librerias necesarias, compuestas por <a href='https://tailwindcss.com/docs/installation/using-postcss' target='_blank' rel='noreferrer' className='text-blue-500'>TailwindCSS</a> y <a href='https://flowbite-react.com/docs/getting-started/introduction' target='_blank' rel='noreferrer' className='text-blue-500'>Flowbite React</a>.
              </p>
            </div>

            <div className='mb-10 text-black dark:text-white'>
              <h2 className='text-2xl font-semibold mb-4'>1. Instalar TailwindCSS.</h2>
              <p className='mb-4'>Instalar <code className='p-1 rounded dark:bg-gray-800 bg-gray-200'>TailwindCSS</code> y crear los archivos <code className='p-1 rounded dark:bg-gray-800 bg-gray-200'>tailwind.config.js</code> y <code className='p-1 rounded dark:bg-gray-800 bg-gray-200'>postcss.config.js</code></p>
              <div className='dark:bg-gray-800 bg-gray-200 p-4 rounded text-black dark:text-white'>
                <pre>
                  <code>
                    npm install -D tailwindcss postcss autoprefixer{'\n'}npx tailwindcss init -p
                  </code>
                </pre>
                <div className='flex justify-end mt-2'>
                  <button
                    onClick={() => this.copyToClipboard('npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p')}
                    className='bg-blue-500 text-white py-1 px-3 rounded'
                  >
                    Copiar
                  </button>
                  {this.state.copiedText === 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p' && <span className='ml-4 text-green-500'>¡Copiado!</span>}
                </div>
              </div>
            </div>

            <div className='mb-10 text-black dark:text-white'>
              <h2 className='text-2xl font-semibold mb-4'>2. Añadir Tailwind a tu configuracion de PostCSS.</h2>
              <p className='mb-4'>Añade <code className='p-1 rounded dark:bg-gray-800 bg-gray-200'>TailwindCSS</code> y <code className='p-1 rounded dark:bg-gray-800 bg-gray-200'>autoprefixer</code> a tu archivo <code className='p-1 rounded dark:bg-gray-800 bg-gray-200'>postcss.config.js</code>.</p>
              <div className='dark:bg-gray-800 bg-gray-200 p-4 rounded text-black dark:text-white'>
                <pre>
                  <code>
                    {'export default {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {}\n  }\n}'}
                  </code>
                </pre>
                <div className='flex justify-end mt-2'>
                  <button
                    onClick={() => this.copyToClipboard('export default {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {}\n  }\n}')}
                    className='bg-blue-500 text-white py-1 px-3 rounded'
                  >
                    Copiar
                  </button>
                  {this.state.copiedText === 'export default {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {}\n  }\n}' && <span className='ml-4 text-green-500'>¡Copiado!</span>}
                </div>
              </div>
            </div>

            <div className='mb-8 text-black dark:text-white'>
              <h2 className='text-2xl font-semibold mb-4'>3. Configurar las rutas de la plantilla.</h2>
              <p className='mb-4'>Añade las rutas para el uso correcto de Tailwind en tu archivo <code className='p-1 rounded dark:bg-gray-800 bg-gray-200'>tailwind.config.js</code>.</p>
              <div className='dark:bg-gray-800 bg-gray-200 p-4 rounded text-black dark:text-white'>
                <pre>
                  <code>
                    {'/** @type {import(\'tailwindcss\').Config} */\nmodule.exports = {\n  content: ["./src/**/*.{html,js}"],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}'}
                  </code>
                </pre>
                <div className='flex justify-end mt-2'>
                  <button
                    onClick={() => this.copyToClipboard('/** @type {import(\'tailwindcss\').Config} */\nmodule.exports = {\n  content: ["./src/**/*.{html,js}"],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}')}
                    className='bg-blue-500 text-white py-1 px-3 rounded'
                  >
                    Copiar
                  </button>
                  {this.state.copiedText === '/** @type {import(\'tailwindcss\').Config} */\nmodule.exports = {\n  content: ["./src/**/*.{html,js}"],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}' && <span className='ml-4 text-green-500'>¡Copiado!</span>}
                </div>
              </div>
            </div>

            <div className='mb-8 text-black dark:text-white'>
              <h2 className='text-2xl font-semibold mb-4'>4. Descargar los estilos propios.</h2>
              <p className='mb-4'>Descarga el archivo <code className='p-1 rounded dark:bg-gray-800 bg-gray-200'>index.css</code> que contiene todos los estilos propios, y luego pegalo en tu carpeta de estilos.</p>
              <a
                href='/index.css'
                download='index.css'
                className='inline-block bg-blue-500 text-white py-2 px-4 rounded'
              >
                Descargar index.css
              </a>
            </div>

            <div className='mb-10 text-black dark:text-white'>
              <h2 className='text-2xl font-semibold mb-4'>5. Instalar Flowbite React.</h2>
              <p className='mb-4'>Instala la dependencia de <code className='p-1 rounded dark:bg-gray-800 bg-gray-200'>Flowbite React</code>a tu proyecto.</p>
              <div className='dark:bg-gray-800 bg-gray-200 p-4 rounded text-black dark:text-white'>
                <pre>
                  <code>
                    npm i flowbite-react
                  </code>
                </pre>
                <div className='flex justify-end mt-2'>
                  <button
                    onClick={() => this.copyToClipboard('npm i flowbite-react')}
                    className='bg-blue-500 text-white py-1 px-3 rounded'
                  >
                    Copiar
                  </button>
                  {this.state.copiedText === 'npm i flowbite-react' && <span className='ml-4 text-green-500'>¡Copiado!</span>}
                </div>
              </div>
            </div>

            <div className='mb-8 text-black dark:text-white'>
              <h2 className='text-2xl font-semibold mb-4'>6. Configurar las rutas de Flowbite React.</h2>
              <p className='mb-4'>Añade las rutas para el uso correcto de <code className='p-1 rounded dark:bg-gray-800 bg-gray-200'>Flowbite React</code> en tu archivo <code className='p-1 rounded dark:bg-gray-800 bg-gray-200'>tailwind.config.js</code>.</p>
              <div className='dark:bg-gray-800 bg-gray-200 p-4 rounded text-black dark:text-white'>
                <pre>
                  <code>
                    {'const flowbite = require(\'flowbite-react/tailwind\')\n/** @type {import(\'tailwindcss\').Config} */\nexport default {\n  content: [\n    \'./src/**/*.{js,jsx,ts,tsx}\',\n    \'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}\',\n    flowbite.content()\n  ],\n  theme: {\n    extend: {}\n  },\n  plugins: [flowbite.plugin()]\n}'}
                  </code>
                </pre>
                <div className='flex justify-end mt-2'>
                  <button
                    onClick={() => this.copyToClipboard('const flowbite = require(\'flowbite-react/tailwind\')\n/** @type {import(\'tailwindcss\').Config} */\nexport default {\n  content: [\n    \'./src/**/*.{js,jsx,ts,tsx}\',\n    \'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}\',\n    flowbite.content()\n  ],\n  theme: {\n    extend: {}\n  },\n  plugins: [flowbite.plugin()]\n}')}
                    className='bg-blue-500 text-white py-1 px-3 rounded'
                  >
                    Copiar
                  </button>
                  {this.state.copiedText === 'const flowbite = require(\'flowbite-react/tailwind\')\n/** @type {import(\'tailwindcss\').Config} */\nexport default {\n  content: [\n    \'./src/**/*.{js,jsx,ts,tsx}\',\n    \'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}\',\n    flowbite.content()\n  ],\n  theme: {\n    extend: {}\n  },\n  plugins: [flowbite.plugin()]\n}' && <span className='ml-4 text-green-500'>¡Copiado!</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default HomePage
