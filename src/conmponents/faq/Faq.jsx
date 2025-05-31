import React, { useState } from 'react'
import Container from '../../layouts/Container'
import ProductLayout from '../../layouts/ProductLayout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import Button from '../Button';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';
import AccordionItem from './AccordionItem';

const Faq = () => {
    let [openIndex, setOpenIndex] = useState(null);
     let accordionData = [
        {
            title: "What payment methods do you accept?",
            content: "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history."
        },
        {
            title: "How long does the product shipping take?",
            content: "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history."
        },
        {
            title: "Do you offer international shipping?",
            content: "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history."
        },
        {
            title: "Can I track my order?",
            content: "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history."
        },
    ]

  return (
    <div className='mt-20 py-16' style={{background: "url('images/faqBg.png')"}}>
    <Container>
        <div className='flex justify-between'>
            <div className='w-[902px]'>
                {accordionData.map((item,index) => (
                   <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    isOpen={openIndex === index}
                   /> 
                ))}
            </div>
            <div>
                {/* <img src="images/bestSeller.png" alt="Best Seller" /> */}
            </div>
        </div>
    </Container>
    </div>
  )
}

export default Faq