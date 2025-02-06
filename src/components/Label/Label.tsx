import React from 'react'

function Label({name}:{name:string}) {
  return (
    <div>
      <label className=' font-bold' htmlFor="">{name}</label>
    </div>
  )
}

export default Label
