import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { drop } from '../../assets/icons/icons'

export default function Sidebar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenOpen, setIsMenOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const mensOpen = () =>{
    setIsMenOpen(!isMenOpen)
  }


  return (
    <>
      <div className='max-w-[250px] flex flex-col gap-3 w-full  cursor-pointer'>
        <div onClick={toggleOpen} className='flex justify-between items-center hover:text-[#3433339a]'>
          <p>{t("sidebar.text1")}</p>
          <img src={drop} alt=">" />
        </div>
        {isOpen && (
          <div className='flex flex-col py-1 px-1'>
            <p className='hover:text-[#3433339a]'>{t("sidebar.subtext1")}</p>
            <p className='hover:text-[#3433339a]'>{t("sidebar.subtext2")}</p>
          </div>
        )}
        <div onClick={mensOpen} className='flex justify-between items-center hover:text-[#3433339a]'>
          <p>{t("sidebar.text2")}</p>
          <img src={drop} alt=">" />
        </div>
        {isMenOpen && (
          <div className='flex flex-col py-1 px-1'>
            <p className='hover:text-[#3433339a]'>{t("sidebar.subtext1")}</p>
            <p className='hover:text-[#3433339a]'>{t("sidebar.subtext2")}</p>
          </div>
        )}
        <div className='flex justify-between items-center hover:text-[#3433339a]'>
          <p>{t("sidebar.text3")}</p>
        </div>
        <div className='flex justify-between items-center hover:text-[#3433339a]'>
          <p>{t("sidebar.text4")}</p>
        </div>
        <div className='flex justify-between items-center hover:text-[#3433339a]'>
          <p>{t("sidebar.text5")}</p>
        </div>
        <div className='flex justify-between items-center hover:text-[#3433339a]'>
          <p>{t("sidebar.text6")}</p>
        </div>
        <div className='flex justify-between items-center hover:text-[#3433339a]'>
          <p>{t("sidebar.text7")}</p>
        </div>
        <div className='flex justify-between items-center hover:text-[#3433339a]'>
          <p>{t("sidebar.text8")}</p>
        </div>
        <div className='flex justify-between items-center hover:text-[#3433339a]'>
          <p>{t("sidebar.text9")}</p>
        </div>
      </div>
    </>
  )
}
