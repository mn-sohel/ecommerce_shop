import React from 'react'
import Container from '../../layouts/Container'
import { IoIosSearch } from 'react-icons/io'
import CartIcon from '../../icons/CartIcon'
import UserIcon from '../../icons/UserIcon'

const MiddleBar = () => {
  return (
    <Container>
      <div className='flex justify-between items-center py-8'>
        <div>
          <img src="images/logo.png" alt="Logo" />
        </div>
        <div className='flex items-center'>
          <div className='relative mr-12'>
            <input 
            className='w-[332px] border border-[#CCC] py-[18px] px-6 rounded-[10px]' 
            type="text" 
            placeholder='Search Products ...' 
            />
            <IoIosSearch className='text-2xl absolute top-[50%] right-5 -translate-y-[40%]'/>
          </div>
          <div className='relative pl-[50px] mr-[90px]'>
            <div className='absolute top-[8px] left-0'>
              <CartIcon />
            </div>
            <p className='font-["Montserrat"] font-normal text-base leading-6'>Cart</p>
            <span className='font-["Montserrat"] font-bold text-sm leading-5'>$150,00</span>
          </div>
          <div className='relative pl-[50px] after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-45px] after:top-[50%] after:-translate-y-1/2'>
            <div className='absolute top-[8px] left-0'>
              <UserIcon/>
            </div>
            <p className='font-["Montserrat"] font-normal text-base leading-6'>User</p>
            <span className='font-["Montserrat"] font-bold text-sm leading-5'>Account</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default MiddleBar