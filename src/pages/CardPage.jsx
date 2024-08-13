import React from 'react'
import { Card, TextInput, Clipboard, Table, Tooltip } from 'flowbite-react'
import card from '../json/card.json'

const CardPage = () => {
  const [primeraCard] = card
  const segundaCard = card[1]

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
                  <div>
                    <TextInput
                      className='w-56'
                      placeholder='Buscar...'
                    />
                  </div>
                </div>
              </Card>

              {[primeraCard].map(({ title, code, description, buttonId }, index) => (
                <div className='mb-10 mt-5 text-black dark:text-white overflow-x-auto' key={index}>
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

              <Card>
                <div className='md:flex justify-between items-center mb-6'>
                  <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Esta es una card con una tabla
                  </h5>
                  <div>
                    <TextInput
                      className='w-56'
                      placeholder='Buscar...'
                    />
                  </div>
                </div>
                <div className='overflow-x-auto'>
                  <Table hoverable>
                    <Table.Head>
                      <Table.HeadCell>Nombre</Table.HeadCell>
                      <Table.HeadCell>Apellido</Table.HeadCell>
                      <Table.HeadCell>DNI</Table.HeadCell>
                      <Table.HeadCell>Estado</Table.HeadCell>
                      <Table.HeadCell>Acciones</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className='bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700'>
                      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                          Pepito
                        </Table.Cell>
                        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>Peposo</Table.Cell>
                        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>12.345.678</Table.Cell>
                        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>ACTIVO</Table.Cell>
                        <div className='table-td flex justify-start'>
                          <Table.Cell>
                            <span className='text-white'>
                              <Tooltip content='Editar' placement='top' arrow animation='shift-away'>
                                <button
                                  className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700'
                                >
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-pencil'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    strokeWidth='2'
                                    stroke='currentColor'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  >
                                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                    <path d='M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' />
                                    <path d='M13.5 6.5l4 4' />
                                  </svg>
                                </button>
                              </Tooltip>
                            </span>
                          </Table.Cell>
                          <Table.Cell>
                            <Tooltip content='Eliminar' placement='top' arrow animation='shift-away'>
                              <button
                                className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-700'
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='icon icon-tabler icon-tabler-trash'
                                  width='24'
                                  height='24'
                                  viewBox='0 0 24 24'
                                  strokeWidth='1.5'
                                  stroke='currentColor'
                                  fill='none'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                >
                                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                  <path d='M4 7l16 0' />
                                  <path d='M10 11l0 6' />
                                  <path d='M14 11l0 6' />
                                  <path d='M5 7l1 12.5a1 1 0 0 0 1 0.5h10a1 1 0 0 0 1 -0.5l1 -12.5' />
                                  <path d='M9 7l0 -3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1l0 3' />
                                </svg>
                              </button>
                            </Tooltip>
                          </Table.Cell>
                        </div>
                      </Table.Row>
                      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                          Martin
                        </Table.Cell>
                        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>Martinsito</Table.Cell>
                        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>13.579.246</Table.Cell>
                        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>INACTIVO</Table.Cell>
                        <div className='table-td flex justify-start'>
                          <Table.Cell>
                            <span className='text-white'>
                              <Tooltip content='Editar' placement='top' arrow animation='shift-away'>
                                <button
                                  className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700'
                                >
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-pencil'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    strokeWidth='2'
                                    stroke='currentColor'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  >
                                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                    <path d='M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' />
                                    <path d='M13.5 6.5l4 4' />
                                  </svg>
                                </button>
                              </Tooltip>
                            </span>
                          </Table.Cell>
                          <Table.Cell>
                            <Tooltip content='Eliminar' placement='top' arrow animation='shift-away'>
                              <button
                                className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-700'
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='icon icon-tabler icon-tabler-trash'
                                  width='24'
                                  height='24'
                                  viewBox='0 0 24 24'
                                  strokeWidth='1.5'
                                  stroke='currentColor'
                                  fill='none'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                >
                                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                  <path d='M4 7l16 0' />
                                  <path d='M10 11l0 6' />
                                  <path d='M14 11l0 6' />
                                  <path d='M5 7l1 12.5a1 1 0 0 0 1 0.5h10a1 1 0 0 0 1 -0.5l1 -12.5' />
                                  <path d='M9 7l0 -3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1l0 3' />
                                </svg>
                              </button>
                            </Tooltip>
                          </Table.Cell>
                        </div>
                      </Table.Row>
                      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>Jhon</Table.Cell>
                        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>Smith</Table.Cell>
                        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>24.681.357</Table.Cell>
                        <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>ACTIVO</Table.Cell>
                        <div className='table-td flex justify-start'>
                          <Table.Cell>
                            <span className='text-white'>
                              <Tooltip content='Editar' placement='top' arrow animation='shift-away'>
                                <button
                                  className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700'
                                >
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-pencil'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    strokeWidth='2'
                                    stroke='currentColor'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  >
                                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                    <path d='M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' />
                                    <path d='M13.5 6.5l4 4' />
                                  </svg>
                                </button>
                              </Tooltip>
                            </span>
                          </Table.Cell>
                          <Table.Cell>
                            <Tooltip content='Eliminar' placement='top' arrow animation='shift-away'>
                              <button
                                className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-700'
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='icon icon-tabler icon-tabler-trash'
                                  width='24'
                                  height='24'
                                  viewBox='0 0 24 24'
                                  strokeWidth='1.5'
                                  stroke='currentColor'
                                  fill='none'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                >
                                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                  <path d='M4 7l16 0' />
                                  <path d='M10 11l0 6' />
                                  <path d='M14 11l0 6' />
                                  <path d='M5 7l1 12.5a1 1 0 0 0 1 0.5h10a1 1 0 0 0 1 -0.5l1 -12.5' />
                                  <path d='M9 7l0 -3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1l0 3' />
                                </svg>
                              </button>
                            </Tooltip>
                          </Table.Cell>
                        </div>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
              </Card>

              {[segundaCard].map(({ title, code, description, buttonId }, index) => (
                <div className='mb-10 mt-5 text-black dark:text-white overflow-x-auto' key={index}>
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
      </div>
    </main>
  )
}

export default CardPage
