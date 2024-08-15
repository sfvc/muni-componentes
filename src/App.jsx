import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ButtonPage from './pages/ButtonPage'
import HomePage from './pages/HomePage'
import Error from './pages/404'
import NavbarPage from './pages/NavbarPage'
import Layout from './assets/layout/Layout'
import LoginPage from './pages/LoginPage'
import CardPage from './pages/CardPage'
import SideBarPage from './pages/SideBardPage'
import FooterPage from './pages/FooterPage'
import FormPage from './pages/FormPage'
import PaginationPage from './pages/PaginationPage'
import TablePage from './pages/TablaPage'

function App () {
  return (

    <Routes>
      {/* Rutas envueltas por el Layout */}
      <Route element={<Layout />}>

        <Route path='/' element={<HomePage />} />

        {/* Componentes */}
        <Route path='/botones' element={<ButtonPage />} />
        <Route path='/card' element={<CardPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/formulario' element={<FormPage />} />
        <Route path='/paginacion' element={<PaginationPage />} />
        <Route path='/tabla' element={<TablePage />} />

        {/* Layout */}
        <Route path='/navbar' element={<NavbarPage />} />
        <Route path='/sidebar' element={<SideBarPage />} />
        <Route path='/footer' element={<FooterPage />} />

      </Route>

      {/* Rutas fuera del Layout */}
      <Route path='*' element={<Navigate to='/404' />} />
      <Route path='/404' element={<Error />} />
    </Routes>
  )
}

export default App
