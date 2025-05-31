import React from 'react'
import Container from '../layouts/Container'
import ProductLayout from '../layouts/ProductLayout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import Button from './Button';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';

const BestSeller = () => {
  return (
    <div className='mt-20 '>
    <Container>
        <div className='flex justify-between'>
            <div className='max-w-[902px]'>
                <div className='flex justify-between mb-12'>
                    <div>
                        <h2 className='font-["Poppins"] font-semibold text-[36px] leading-[46px]'>Best Seller</h2>
                    </div>
                    <div className='flex items-center gap-3 text-[#FF624C]'>
                        <p className='font-["Montserrat"] font-bold text-base leading-6 '>View All </p>
                        <LiaLongArrowAltRightSolid />    
                    </div>
                </div>
                <div className='flex gap-4 flex-wrap'>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="120" price="256" border={true} bg="transparent" stock={true} stockAmount="10"/>
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="120" price="256" border={true} bg="transparent" stock={true} stockAmount="10"/>
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="120" price="256" border={true} bg="transparent" stock={true} stockAmount="10"/>
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="120" price="256" border={true} bg="transparent" stock={true} stockAmount="10"/>
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="120" price="256" border={true} bg="transparent" stock={true} stockAmount="10"/>
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="120" price="256" border={true} bg="transparent" stock={true} stockAmount="10"/>
                    </div>
                </div>
            </div>
            <div>
                <img src="images/bestSeller.png" alt="Best Seller" />
            </div>
        </div>
    </Container>
    </div>
  )
}

export default BestSeller