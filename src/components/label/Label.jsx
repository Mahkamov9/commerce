import React from 'react'

export default function Label(props) {
  return (
    <>
      <div className='flex flex-col items-center justify-center max-w-[300px] gap-2 text-center transition-all hover:scale-[1.1]'>
        <img className='my-2' src={props.image} alt="icon" />
        <h2 className='font-bold text-[18px] text-[#000]'>{props.title}</h2>
        <p className='text-[16px] text-[#000]'>{props.text}</p>
      </div>
    </>
  )
}
