import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../conmponents/header/Header'
import Footer from '../conmponents/footer/Footer'

const CommonLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default CommonLayout