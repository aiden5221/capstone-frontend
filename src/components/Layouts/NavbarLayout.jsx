import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

function NavbarLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default NavbarLayout