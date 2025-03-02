import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Deshboard from './components/Dashboard/Dashboard'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    <Deshboard/>
    </>
  )
}

export default Layout
