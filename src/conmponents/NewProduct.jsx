import React from 'react'
import Container from '../layouts/Container'
import ProductLayout from '../layouts/ProductLayout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import Button from './Button';


const NewProduct = () => {

  return (
    <div className='mt-20 '>
        <Container>
        <div className='flex justify-between mb-12'>
            <div>
                <h2 className='font-["Poppins"] font-semibold text-[36px] leading-[46px]'>New Products</h2>
            </div>
            <div className='flex items-center gap-3 text-[#FF624C]'>
                <p className='text-[#303030]'>Sort by </p>
                <select 
                name=""
                className='font-["Montserrat"] font-bold text-base'
                >
                    <option value="All Categories">All Categories</option>
                    <option value="bdt">bdt</option>
                </select> 
            </div>
        </div>
            <div className='flex gap-5'>
            <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="120" price="256" border={true} bg="transparent" stock={true} stockAmount="10"/>
            <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="100" price="526" border={true} bg="transparent" stock={false} stockAmount="30"/>
            <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="12" price="256" border={true} bg="transparent" stock={true} stockAmount="50"/>
            <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="10" price="695" border={true} bg="transparent" stock={false} stockAmount="80"/>
            <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="120" price="965" border={true} bg="transparent" stock={true} stockAmount="90"/>
      </div>
      <div className='flex justify-center mt-16'>
        <Button text="Load More" bg="transparent" color='#FF624C' border='1px solid #FF624C'/>
      </div>
    </Container>
    </div>
  )
}

export default NewProduct