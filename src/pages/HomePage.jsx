import React from 'react'
import Banner from '../conmponents/Banner'
import Facility from '../conmponents/Facility'
import FeaturedProduct from '../conmponents/FeaturedProduct'
import OfferSection from '../conmponents/OfferSection'
import NewProduct from '../conmponents/NewProduct'
import BestSeller from '../conmponents/BestSeller'
import Faq from '../conmponents/faq/Faq'
import SpringSale from '../conmponents/SpringSale'

const HomePage = () => {
  return (
    <>
      <Banner/>
      <Facility />
      <FeaturedProduct/>
      <OfferSection/>
      <NewProduct />
      <SpringSale/>
      <BestSeller/>
      <Faq/>
    </>
  )
}

export default HomePage