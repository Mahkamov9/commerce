import React from 'react'
import { search } from '../../assets/icons/icons'
import { useTranslation } from 'react-i18next'


export default function SearchInput() {

  const { t } = useTranslation();

  return (
    <>
      <div>
        <form className='w-[350px] h-[38px] flex ml-4 bg-[#F5F5F5] justify-between border-solid  rounded-[4px] '>
          <input className='pl-[16px] text-[18px] w-full focus:outline-none bg-transparent ' type="text" placeholder={t("seach_input")} />
          <button className='mx-5 text-[18px]' type='submit'>
            <img src={search} alt="Search" />
          </button>
        </form>
      </div>
    </>
  )
}
