import React, { useState } from 'react'
import DefaultNavbar from '../assets/layout/DefaultNavbar'
import { Card } from 'flowbite-react'

const ComponentsPage = () => {
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
      <div className='justify-center flex'>
        <Card href='#' className='max-w-5xl pointer-events-none'>
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima perspiciatis perferendis excepturi expedita a consectetur laborum quae sunt. Quisquam dignissimos fuga fugiat maxime et modi consequuntur dolores voluptatem natus dolor?
          </h5>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quis! Iure architecto optio quia enim sit temporibus, harum fugiat voluptatibus, voluptatem asperiores eum qui porro aliquam praesentium facilis commodi tenetur.
          </p>
        </Card>
      </div>
    </main>
  )
}

export default ComponentsPage
