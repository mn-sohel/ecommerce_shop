import React from 'react'
import Container from '../layouts/Container'
import HeadPhone from '../icons/HeadPhone'

const Facility = () => {
  return (
    <div>
        <Container>
            <div className='flex justify-between items-center mb-20'>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center'>
                        <HeadPhone/>
                    </div>
                    <div>
                        <h4 className='font-["Montserrat"] font-bold text-base'>Responsive</h4>
                        <p className='font-["Montserrat"] font-normal text-base'>Customer service available 24/7</p>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center'>
                        <HeadPhone/>
                    </div>
                    <div>
                        <h4 className='font-["Montserrat"] font-bold text-base'>Secure</h4>
                        <p className='font-["Montserrat"] font-normal text-base'>Certified marketplace since 2017</p>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center'>
                        <HeadPhone/>
                    </div>
                    <div>
                        <h4 className='font-["Montserrat"] font-bold text-base'>Shipping</h4>
                        <p className='font-["Montserrat"] font-normal text-base'>Free, fast, and reliable worldwide</p>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center'>
                        <HeadPhone/>
                    </div>
                    <div>
                        <h4 className='font-["Montserrat"] font-bold text-base'>Transparent</h4>
                        <p className='font-["Montserrat"] font-normal text-base'>Hassle-free return policy</p>
                    </div>
                </div>

            </div>
        </Container>
    </div>
  )
}

export default Facility