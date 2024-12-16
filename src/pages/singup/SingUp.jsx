import React from 'react'
import { Link } from 'react-router-dom'
import { register } from '../../assets/images/images'
import { useTranslation } from 'react-i18next'
import { FcGoogle } from "react-icons/fc";

export default function SingUp() {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className="container">

          <div className='flex justify-between my-10 h-[100vh]'>
            <div>
              <img className='w-[800px] absolute left-0 top-[28%]' src={register} alt="Mahkamov | Dev" />
            </div>
            <div className='flex justify-center items-end flex-col'>


              <div className='text-start w-[380px]'>
                <p className='font-normal text-[40px]'>Create an Accaunt</p>
                <p className='text-[24px] mt-2 mb-8'>Enter your details below</p>
                <form >
                  <input className='border_bottom w-full text-[25px] outline-none px-3 my-5' type="text" required placeholder='Name' />
                  <input className='border_bottom w-full text-[25px] outline-none px-3 my-5' type="text" required placeholder='Phone number or Email ' />
                  <input className='border_bottom w-full text-[25px] outline-none px-3 my-5' type="password" required placeholder='Password' />
                  <div className='w-full'>
                    <button className='bg-[#db4444] text-[20px] text-[#fff] p-1 px-4 transition-all w-full h-[56px] mb-3 mt-10  rounded border-[#db4444] border-2  hover:text-[#db4444] hover:bg-[#fff]'>Create Account</button>
                    <button className='text-[20px] p-1 px-4 w-full h-[56px] mb-3 rounded border-[#5b5757] border-2 flex justify-center items-center gap-4'>
                      <div><FcGoogle size={"25px"} /></div>
                      <p>Sign up with Google</p>
                    </button>
                  </div>
                </form>
                <div className='flex gap-4 justify-center'>
                  <p>Already have account?</p>
                  <Link className='underline' to="/login">Login</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
