import React from 'react'
import HeroImg from '../HeroImg/HeroImg'
import HeroContent from '../HeroContent/HeroContent'

function Hero() {
  return (
    <section className=' flex flex-col items-center text-center pl-[400px] h-screen '>
        <HeroImg />
        <HeroContent />
      
    </section>
  )
}

export default Hero
