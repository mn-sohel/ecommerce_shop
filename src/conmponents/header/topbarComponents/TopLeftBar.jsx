import React from 'react'

import { Link } from 'react-router-dom'
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'
const TopLeftBar = () => {
  return (
     <div className='flex items-center gap-12 relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[61%] after:top-[50%] after:-translate-y-1/2'>
        <Link to="https://maps.app.goo.gl/hhV1QYKjYUQN5BAQA" target='_blank'  className='flex items-center gap-2'> 
            <IoLocationOutline /> 
            123 Main Street, Anytown USA
        </Link>
        <Link to="tel:01256963"  className='flex items-center gap-2'> 
            <IoCallOutline /> 
            +1 (555) 123-4567
        </Link>
    </div>
  )
}

export default TopLeftBar