import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function HeroContent() {
  return (
    
    <>
     <div className=' pt-[20px]'>
      <h1 className='text-6xl font-extrabold '>Ahmed Raza</h1>
      <h2 className='text-2xl font-extrabold text-[#f1c40f] pt-3 pb-4' >FRONT-END-DEVELOPER</h2>
      <button className='py-3 px-6 rounded-md shadow-lg font-bold bg-[#fff42c]  hover:cursor-pointer hover:bg-[#f1c40f]'>Download CV</button>
    </div>

    <div className='flex  gap-2 m-14 '>
    <FaFacebookF />
    <FaInstagram />
    <FaTwitter />
    <FaLinkedin />
    </div>
    </>
  )
}

export default HeroContent
