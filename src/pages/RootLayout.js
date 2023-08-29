import React from 'react'
import {Outlet} from 'react-router-dom'
import Manubar from '../components/Manubar'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <>
       <Manubar/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default RootLayout
