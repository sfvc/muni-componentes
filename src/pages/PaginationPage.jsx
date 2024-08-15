import React, { useState } from 'react'
import { Clipboard, Pagination } from 'flowbite-react'
import pagination from '../json/pagination.json'

const PaginationPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const onPageChange = (page = 1) => setCurrentPage(page)
  return (
    <main>
      <div className='min-h-screen bg-white dark:bg-gray-900 text-white p-8'>
        <div className='max-w-6xl mx-auto overflow-x-hidden'>
          <div className='border-b border-gray-700 pb-8 mb-5'>
            <h1 className='text-5xl font-bold mb-4 text-center text-black dark:text-white'>Paginado</h1>
          </div>
          <div className='mb-10 text-black dark:text-white'>
            <div className='flex overflow-x-auto sm:justify-center'>
              <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
            </div>

            {pagination.map(({ title, code, description, buttonId }, index) => (
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

export default PaginationPage
