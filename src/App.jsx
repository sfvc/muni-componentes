import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ButtonPage from './pages/ButtonPage'
import HomePage from './pages/HomePage'
import Error from './pages/404'
import NavbarPage from './pages/NavbarPage'
import Layout from './assets/layout/Layout'
import LoginPage from './pages/LoginPage'
import CardPage from './pages/CardPage'

function App () {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/botones' element={<ButtonPage />} />
          <Route path='/navbar' element={<NavbarPage />} />
          <Route path='/layout' element={<Layout />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/card' element={<CardPage />} />
          <Route path='*' element={<Navigate to='/404' />} />

          {/* Ruta de error */}
          <Route path='/404' element={<Error />} />
        </Routes>
      </main>
    </>
  )
}

export default App
