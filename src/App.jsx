import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ComponentsPage from './pages/ComponentsPage'
import HomePage from './pages/HomePage'
import Error from './pages/404'

function App () {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/componentes' element={<ComponentsPage />} />
          <Route path='*' element={<Navigate to='/404' />} />

          {/* Ruta de error */}
          <Route path='/404' element={<Error />} />
        </Routes>
      </main>
    </>
  )
}

export default App
