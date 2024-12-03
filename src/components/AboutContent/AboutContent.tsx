import React from 'react'

function AboutContent() {
  return (
    <>
    <div className='flex  '>
      <div className='pt-[50px] pl-[20px]'>
        <h2 className=' text-4xl text-[#f1c40f] font-bold pb-[30px]'>Assalam-O-Alikum,</h2>
        {/* with */}
        <p className='w-[500px]'>I Am <span className='text-[#f1c40f] font-extrabold'>Ahmed Raza</span>, A Fresh Front -End - Developer I Am Passionate About My Work And Specialize In Creative Designs. I Love To Make Modern And Trending Designs That Will Match The Latest Trend. I Always Focus On Client Satisfaction. Feel Free To Discuss Your Next Project With Me Thanks
        </p>
      </div>
      {/* img */}
      <div className='pl-[90px] pt-[20px]'>
        <h1 className='text-8xl font-bold bg-[#f1c40f] size-[260px] rounded-full flex justify-center items-center  '>A.R</h1>
      </div>
    </div>
    {/* Eduction */}
    <div className='flex justify-center items-center pt-[60px] mr-[90px]'>
        <button className='shadow-lg text-4xl font-bold py-4 px-10 text-[#f1c40f] '>EDUCATION</button>
    </div>

    <div className='flex justify-around pt-[40px]'>
    <div className='shadow-lg py-[30px] px-[20px]'>
        <h2 className='text-2xl  font-bold'>MATRICULATION</h2>
        <p><span className='text-[#f1c40f]'>School</span>:M.H Grammer Pre/sec Boys And Girls School</p>
        <p><span className='text-[#f1c40f]'>Passing Year</span>:2021</p>
    </div> 

    <div className='shadow-lg py-[30px] px-[20px]'>
        
    <h2 className='text-2xl  font-bold'>INTERMEDIATE</h2>
        <p><span className='text-[#f1c40f]'>Collage</span>:Government Boys Degree College KMC Stores Karachi</p>
        <p><span className='text-[#f1c40f]'>Passing Year</span>:2024</p>
    </div>

    </div>




    </>

  )
}

export default AboutContent
