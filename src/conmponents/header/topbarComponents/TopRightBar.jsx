import React, { useState } from 'react'

const TopRightBar = () => {
    const [selectedCountry, setSelectedCountry] = useState(null)

    const countries = [
        { name: 'United States', value: 'US', flag: 'https://flagcdn.com/16x12/us.png' },
        { name: 'Canada', value: 'CA', flag: 'https://flagcdn.com/16x12/ca.png' },
        { name: 'United Kingdom', value: 'GB', flag: 'https://flagcdn.com/16x12/gb.png' },
        { name: 'Australia', value: 'AU', flag: 'https://flagcdn.com/16x12/au.png' },
        { name: 'Germany', value: 'DE', flag: 'https://flagcdn.com/16x12/de.png' },
        { name: 'France', value: 'FR', flag: 'https://flagcdn.com/16x12/fr.png' },
    ]

  return (
    <div className='flex justify-end items-center gap-[49px]'>
        <div>curr</div>
        <div className='relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-25px] after:top-[50%] after:-translate-y-1/2 before:content-[""] before:absolute before:w-[1px] before:h-[32px] before:bg-[#BFBFBF] before:left-[135px] before:top-[50%] before:-translate-y-1/2'>
        {/* <img src="https://flagcdn.com/16x12/us.png" alt="" /> */}
            <select 
                className='w-[112px]'
                name="country"
                value={selectedCountry?.value}
                onChange={(e) => {
                    // console.log(e.target.value);
                    const country = countries.find((c) => c.value === e.target.value)
                    setSelectedCountry(country)
                }}
                >
                    {countries.map((item) => (
                        <option key={item.value} value={item.value}>{item.name}</option>
                    ))}
            </select>
        </div>
        <div>social media</div>
    </div>
  )
}

export default TopRightBar