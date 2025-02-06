'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
export interface InputValueType {
    userName:string;
    userEmail:string;
    userNumber:string;
    userMessage:string;
}


function Contact() {

    const [inputValue,setInput]=useState<InputValueType>({userName:'',userEmail:'',userNumber:'',userMessage:''})

    const OnHandelInput=(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    const {name,value}= e.target
    setInput((prev)=>({...prev,[name]:value}))
    }

    const OnSubmitHandel=(e:FormEvent)=>{
    e.preventDefault()
    }
  return (
    <section>
      {/* <h1 className='text-4xl font-extrabold'></h1> */}
      {/* img */}
      <div className=' pl-[750px] pb-[20px]'>
        {/* yellow */}
        <h1 className='text-7xl font-extrabold shadow-lg bg-[#fff200] size-[200px] rounded-full flex justify-center items-center  '>A.R</h1>
        {/* yellow/geen */}
        {/* <h1 className="text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-green-400 to-green-600 w-[200px] h-[200px] rounded-full flex justify-center items-center">
         A.R
          </h1> */}

          {/* yellow/black */}
          {/* <h1 className="text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-4000  to-yellow-300 w-[200px] h-[200px] rounded-full flex justify-center items-center"> 
             A.R
          </h1> */}


      </div>
      <form action="" onSubmit={OnSubmitHandel} className='pl-[370px]  flex flex-col justify-center items-center '>
        {/* userNAme */}
      <label htmlFor="" className='py-5  font-bold   '>User Name</label>
      <input className='shadow-lg outline-none  w-[450px] p-4 rounded-md  ' type="text" name="userName" id="" value={inputValue.userName} onChange={(e)=>OnHandelInput(e)} placeholder='Enter your Name'/>
      {/* userEmail */}
      <label htmlFor="" className='py-5  font-bold '>User Email</label>
      <input className='shadow-lg outline-none  w-[450px] p-2' type="text" name="userEmail" id="" value={inputValue.userEmail} onChange={(e)=>OnHandelInput(e)} placeholder='Enter your Email'/>
      {/* userNumber */}
      <label htmlFor="" className='py-5  font-bold '>User Number</label>
      <input className='shadow-lg outline-none  w-[450px] p-2' type="text" name="userNumber" id="" value={inputValue.userNumber} onChange={(e)=>OnHandelInput(e)} placeholder='Enter your Number'/>
       {/* userMessage */}
       <label htmlFor="" className='py-5  font-bold '>User Message</label>
      <textarea rows={8} name="userMessage" id="" className='shadow-lg rounded-md outline-none  w-[450px] p-2 resize-none' placeholder='Enter your Message' value={inputValue.userMessage} onChange={(e)=>OnHandelInput(e)} >UserMessage</textarea>

    <button className='mt-[100px] mb-[40px] py-3 px-6 rounded-md font-bold  bg-[#fff200] hover:bg-[#f1c40f]'>Submit</button>
      
      </form>  

    </section>
  )
}

export default Contact
