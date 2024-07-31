import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import DefaultNavbar from './assets/layout/DefaultNavbar'
import DocumentationPage from './pages/DocumentationPage'
import HomePage from './pages/HomePage'

function App () {
  return (
    <>
      <DefaultNavbar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/documentacion' element={<DocumentationPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </main>
    </>
  )
}

export default App
