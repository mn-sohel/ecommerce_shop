import React, { useEffect, useState } from 'react'
import Container from '../layouts/Container'
import ProductLayout from '../layouts/ProductLayout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import Button from './Button';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style,  color:"#303030", fontSize:"20px",width:"40px", height:"40px",borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center", border: "1px solid #303030"}} onClick={onClick}><FaAngleRight /></div>
  );
}

const SpringSale = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft(){
        const saleEndDate = new Date('Jun 10, 2025 08:35 AM +06').getTime();
        const now = new Date().getTime();
        const difference = saleEndDate - now;

        if(difference < 0) {
            return {days: 0, hours: 0, minutes: 0, seconds: 0};
        }
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60) / 1000 ))
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        },1000)
        return () => clearInterval(timer)
    },[])

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };
  return (
    <div className='mt-20' style={{background: "url('images/faqBg.png')"}}>
    <Container>
        <div className='flex justify-between'>
            <div>
               <h2 className=''>Spring Sale</h2>
               <span>{timeLeft.days <= 9 ? `0${timeLeft.days}` : timeLeft.days }</span> : <span>{timeLeft.hours <= 9 ? `0${timeLeft.hours}`: timeLeft.hours}</span> : <span>{timeLeft.minutes <= 9 ? `0${timeLeft.minutes}` : timeLeft.minutes}</span> : <span>{timeLeft.seconds <= 9 ? `0${timeLeft.seconds}`: timeLeft.seconds}</span>
            </div>
            <div className='max-w-[902px]'>
            <Slider {...settings}>
                <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="120" price="256" border={true} bg="transparent" stock={true} stockAmount="10"/>
                <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="100" price="526" border={true} bg="transparent" stock={true} stockAmount="30"/>
                <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="12" price="256" border={true} bg="transparent" stock={true} stockAmount="50"/>
                <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="10" price="695" border={true} bg="transparent" stock={true} stockAmount="80"/>
                <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="120" price="965" border={true} bg="transparent" stock={true} stockAmount="90"/>
                <ProductLayout percentTag={true} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="120" price="965" border={true} bg="transparent" stock={true} stockAmount="90"/>
          </Slider>
            </div>
            
        </div>
    </Container>
    </div>
  )
}

export default SpringSale