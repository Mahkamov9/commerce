import React from 'react'
import { Link } from 'react-router-dom'
import { BsTelephone } from "react-icons/bs";
import { IoMailOpen } from "react-icons/io5";

export default function ContactPage() {
  return (
    <>
      <section>
        <div className="container">
          <div className='flex gap-2 font-medium text-[18px]'>
            <Link className='text-[#787474]' to="/">Home</Link>
            <span className='text-[#787474]'>/</span>
            <Link to="/about">Contact</Link>
          </div>


          <div className='flex gap-3 my-32'>
            <div>
              <div className='shadow-xl max-w-[340px] px-5 py-5'>
                <div className='text-[20px] border_bottom mb-5 pb-5'>
                  <div className='flex gap-3 items-center my-2'>
                    <div className='bg-[#db4444] rounded-full p-2'>
                      <BsTelephone color='#fff' size={"22px"} />
                    </div>
                    <p className='font-bold text-[20px]'>Call To US</p>
                  </div>
                  <p className='my-2'>We are available 24/7, 7 days a week.</p>
                  <p className='my-2'>Phone: +8801611112222</p>
                </div>
                <div>
                  <div className='text-[20px]'>
                    <div className='flex gap-3 items-center my-2'>
                      <div className='bg-[#db4444] rounded-full p-2'>
                        <IoMailOpen color='#fff' size={"22px"} />
                      </div>
                      <p className='font-bold text-[20px]'>Write To US</p>
                    </div>
                    <p className='my-2'>Fill out our form and we will contact you within 24 hours.</p>
                    <p className='my-2'>Emails: customer@exclusive.com</p>
                    <p className='my-2'>Emails: customer@exclusive.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='shadow-xl px-5 py-5 w-full'>
              <form className='flex flex-col'>
                <div className='flex gap-2'>
                  <input className='bg-[#F5F5F5] outline-none rounded h-[50px] w-[33%] p-2 text-[20px]' required placeholder='Name *' type="text" />
                  <input className='bg-[#F5F5F5] outline-none rounded h-[50px] w-[33%] p-2 text-[20px]' placeholder='Surname *' type="text" />
                  <input className='bg-[#F5F5F5] outline-none rounded h-[50px] w-[33%] p-2 text-[20px]' placeholder='Mail *' type="text" />
                </div>
                <textarea className='bg-[#F5F5F5] outline-none rounded my-5 max-h-[400px] h-[200px] mb-10 w-[100%] p-2 text-[20px]' name="" id=""></textarea>
                <div className='text-right'>
                  <button className='bg-[#db4444] text-[20px] text-[#fff] p-1 px-4 transition-all w-[215px]  mb-10  rounded border-[#db4444] border-2  hover:text-[#db4444] hover:bg-[#fff]' >Sumbit</button>
                </div>
              </form>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}
