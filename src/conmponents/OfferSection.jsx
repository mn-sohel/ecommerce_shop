import React from 'react'
import Container from '../layouts/Container'

const OfferSection = () => {
  return (
    <div className='mt-20'>
        <Container>
        <div className='flex justify-between'>
            <div>
                <img src="images/offerImage1.png" alt="Offer Image 1" />
            </div>
            <div>
                <img src="images/offerImage2.png" alt="Offer Image 1" />
            </div>
        </div>
    </Container>
    </div>
  )
}

export default OfferSection