import React from 'react'
import { Clipboard, Table } from 'flowbite-react'
import table from '../json/table.json'
import DeleteButton from '../assets/components/DeleteButton'
import EditButton from '../assets/components/EditButton'
import DownloadButton from '../assets/components/DownloadButton'

const TablePage = () => {
  const downloadButtons = () => {
    const link = document.createElement('a')
    link.href = '/buttons.zip'
    link.download = 'buttons.zip'
    link.click()
  }

  return (
    <main>
      <div className='min-h-screen bg-white dark:bg-gray-900 text-white p-8'>
        <div className='max-w-6xl mx-auto overflow-x-hidden'>
          <div className='border-b border-gray-700 pb-8 mb-5'>
            <h1 className='text-5xl font-bold mb-4 text-center text-black dark:text-white'>Tabla</h1>
          </div>
          <div className='mb-10 text-black dark:text-white'>
            <div className='overflow-x-auto'>
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell className='text-center bg-gray-300'>Nombre</Table.HeadCell>
                  <Table.HeadCell className='text-center bg-gray-300'>Apellido</Table.HeadCell>
                  <Table.HeadCell className='text-center bg-gray-300'>Acciones</Table.HeadCell>
                </Table.Head>
                <Table.Body className='divide-y'>
                  <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                    <Table.Cell className='text-center dark:text-white'>Pepe</Table.Cell>
                    <Table.Cell className='text-center dark:text-white'>Pedrito</Table.Cell>
                    <Table.Cell className='flex gap-2 text-center items-center justify-center'>
                      <EditButton />

                      <DeleteButton />

                      <DownloadButton onClick={downloadButtons} />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>

            {table.map(({ title, code, description, buttonId }, index) => (
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

export default TablePage
