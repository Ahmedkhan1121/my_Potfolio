import Image from 'next/image'
import React from 'react'

function HeroImg() {
  return (
    <div className='pt-[40px]'  >
      <Image 
       className='size-[250px] rounded-full'
      src={`/images/HeroImg/WhatsApp Image 2023-08-28 at 23.58.21.jpg`}
      alt='Heroimg'
      height={200}
      width={200}

      />
    </div>
  )
}

export default HeroImg
