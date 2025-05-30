import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from './Container'
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