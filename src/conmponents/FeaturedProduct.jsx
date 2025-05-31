import React from 'react'
import Container from '../layouts/Container'
import ProductLayout from '../layouts/ProductLayout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "red" }}
    //   onClick={onClick}
    // />
    <div className={className} style={{ ...style,  color:"#303030", fontSize:"20px",width:"40px", height:"40px",borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center", border: "1px solid #303030"}} onClick={onClick}><FaAngleRight /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "green" }}
    //   onClick={onClick}
    // />
    <div className={className} style={{ ...style, color:"#303030", fontSize:"20px",width:"40px", height:"40px",borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center", border: "1px solid #303030"}} onClick={onClick}><FaAngleLeft /></div>
  );
}

const FeaturedProduct = () => {

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className='mt-20 '>
        <Container>
        <div className='flex justify-between mb-12'>
            <div>
                <h2 className='font-["Poppins"] font-semibold text-[36px] leading-[46px]'>Featured Products</h2>
            </div>
            <div className='flex items-center gap-3 text-[#FF624C]'>
                <p className='font-["Montserrat"] font-bold text-base leading-6 '>View All </p>
                <LiaLongArrowAltRightSolid />    
            </div>
        </div>
            <Slider {...settings}>
            <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="120" price="256" border={true} bg="transparent" stock={true} stockAmount="10"/>
            <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="100" price="526" border={true} bg="transparent" stock={false} stockAmount="30"/>
            <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="12" price="256" border={true} bg="transparent" stock={true} stockAmount="50"/>
            <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="10" price="695" border={true} bg="transparent" stock={false} stockAmount="80"/>
            <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="120" price="965" border={true} bg="transparent" stock={true} stockAmount="90"/>
            <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="120" price="965" border={true} bg="transparent" stock={true} stockAmount="90"/>
      </Slider>
    
    </Container>
    </div>
  )
}

export default FeaturedProduct