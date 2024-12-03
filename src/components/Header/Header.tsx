import React from 'react'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <header className='fixed top-0 left-0 shadow-lg h-screen  px-[60px] bg-[#FAFAFD] z-40 pt-[20px]'>
      <Navbar />
    </header>
  )
}

export default Header
