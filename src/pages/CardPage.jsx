import React from 'react'
import { Card, TextInput, Clipboard, Table } from 'flowbite-react'
import card from '../json/card.json'
import DeleteButton from '../assets/components/DeleteButton'
import EditButton from '../assets/components/EditButton'
import DownloadButton from '../assets/components/DownloadButton'

const CardContent = ({ title, code, description, buttonId }) => (
  <div className='mb-10 mt-5 text-black dark:text-white overflow-x-auto'>
    <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
    <p className='mb-4'>{description}</p>
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
        <code>{code}</code>
      </pre>
    </div>
  </div>
)

const CardPage = () => {
  const downloadButtons = () => {
    const link = document.createElement('a')
    link.href = '/buttons.zip'
    link.download = 'buttons.zip'
    link.click()
  }
  const [primeraCard, segundaCard] = card

  return (
    <main>
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
                    Esta es una card por defecto
                  </h5>
                  <TextInput className='w-56' placeholder='Buscar...' />
                </div>
              </Card>

              <CardContent {...primeraCard} />

              <Card>
                <div className='md:flex justify-between items-center mb-6'>
                  <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Esta es una card con una tabla
                  </h5>
                  <TextInput className='w-56' placeholder='Buscar...' />
                </div>
                <div className='overflow-x-auto'>
                  <Table hoverable>
                    <Table.Head>
                      <Table.HeadCell className='text-center bg-gray-300'>Nombre</Table.HeadCell>
                      <Table.HeadCell className='text-center bg-gray-300'>Apellido</Table.HeadCell>
                      <Table.HeadCell className='text-center bg-gray-300'>DNI</Table.HeadCell>
                      <Table.HeadCell className='text-center bg-gray-300'>Domicilio</Table.HeadCell>
                      <Table.HeadCell className='text-center bg-gray-300'>Acciones</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className='divide-y'>
                      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell className='text-center dark:text-white'>Pepe</Table.Cell>
                        <Table.Cell className='text-center dark:text-white'>Pedrito</Table.Cell>
                        <Table.Cell className='text-center dark:text-white'>12.345.678</Table.Cell>
                        <Table.Cell className='text-center dark:text-white'>Calle Falsa 123</Table.Cell>
                        <Table.Cell className='flex gap-2 text-center items-center justify-center'>
                          <EditButton />

                          <DeleteButton />

                          <DownloadButton onClick={downloadButtons} />
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
              </Card>

              <CardContent {...segundaCard} />

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CardPage
