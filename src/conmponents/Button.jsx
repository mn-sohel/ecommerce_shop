import React from 'react'

const Button = ({text, bg="#FF624C", fontName="Montserrat", fontWeight="bold", size="xl", color="white", paddingY="16px", paddingX="40px", radius="10"}) => {
  return (
    <button 
    className={`bg-[${bg}] font-${fontName} font-${fontWeight} text-${color} rounded-[${radius}px]`}
    style={{
        fontSize: "20px",
        padding: paddingY  + " " + paddingX
    }}

    >{text}</button>
  )
}

export default Button