import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './RootLayout.css'

const RootLayout = () => {
  return (
    <div id='root-layout'>
    <Header />
    <main className='content'>
    <Outlet />
    </main>
    <Footer />
    </div>
    
  )
}

export default RootLayout
