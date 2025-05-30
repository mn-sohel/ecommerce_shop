import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../conmponents/header/Header'

const CommonLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <div>Footer</div>
    </>
  )
}

export default CommonLayout