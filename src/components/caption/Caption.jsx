import React from 'react'

export default function Caption(props) {

  return (
    <>
    <div className='flex justify-start items-center gap-5 mt-12'>
      <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-lg'></div>
      <p className='text-[#DB4444] text-[25px]'>{props.title}</p>
    </div>
    </>
  )
}
