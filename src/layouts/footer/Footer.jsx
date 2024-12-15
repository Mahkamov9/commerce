import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import { app_store, play_market, qr_icon, send_icon } from '../../assets/icons/icons';

import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div className='bg-[#000] text-[#fff]'>
        <div className="container my-5">
          <ul className='flex justify-between text-[20px] py-20'>
            <li>
              <div>
                <Link to="/"><h2 className='text-[24px] font-bold '>Exclusive</h2></Link>
                <p className='my-4'>{t("footer.col1.text1")}</p>
                <p className='my-2'>{t("footer.col1.text2")}</p>
                <form className='flex items-center text-[#fff] relative max-w-[350px] my-5'>
                  <input className='bg-transparent h-[38px] py-1 px-3 outline-none pr-10 border-2 border-[#fff] rounded-md' type="email" required minLength={5} placeholder={t("footer.col1.text3")} />
                  <button className='absolute top-2 right-2'><img src={send_icon} alt="Send" /></button>
                </form>
              </div>
            </li>
            <li>
              <div className='flex flex-col justify-center max-w-[240px] items-start gap-3'>
                <NavLink className="mb-5 font-bold transition-all hover:text-[#605c5c]">{t("footer.col2.text1")}</NavLink>
                <p>{t("footer.col2.text2")}</p>
                <a href="mailto:mahkamov.dev@gmail.com">{t("footer.col2.text3")}</a>
                <a href="tel:+998931919737">{t("footer.col2.text4")}</a>
              </div>
            </li>

            <li>
              <div className='flex flex-col justify-center items-start gap-3'>
                <NavLink className="mb-5 font-bold transition-all hover:text-[#605c5c]">{t("footer.col3.text1")}</NavLink>
                <Link className='transition-all hover:underline'>{t("footer.col3.text2")}</Link>
                <Link className='transition-all hover:underline'>{t("footer.col3.text3")}</Link>
                <Link className='transition-all hover:underline'>{t("footer.col3.text4")}</Link>
                <Link className='transition-all hover:underline'>{t("footer.col3.text5")}</Link>
                <Link className='transition-all hover:underline'>{t("footer.col3.text6")}</Link>
              </div>
            </li>

            <li>
              <div className='flex flex-col justify-center items-start gap-3'>
                <NavLink className="mb-5 font-bold transition-all hover:text-[#605c5c]">{t("footer.col4.text1")}</NavLink>
                <Link className='transition-all hover:underline'>{t("footer.col4.text2")}</Link>
                <Link className='transition-all hover:underline'>{t("footer.col4.text3")}</Link>
                <Link className='transition-all hover:underline'>{t("footer.col4.text4")}</Link>
                <Link className='transition-all hover:underline'>{t("footer.col4.text5")}</Link>
              </div>
            </li>

            <li>
              <div className='flex flex-col justify-center items-start gap-3'>
                <NavLink className="mb-5 font-bold transition-all hover:text-[#605c5c]">{t("footer.col5.text1")}</NavLink>
                <p className='text-[12px] text-[#7b7373]'>{t("footer.col5.text2")}</p>

                <div className='flex gap-2'>
                  <div>
                    <Link><img src={qr_icon} alt="QR" /></Link>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Link><img src={play_market} alt="Mahkamov | Dev" /></Link>
                    <Link><img src={app_store} alt="Mahkamov | Dev" /></Link>
                  </div>
                </div>


                <div className='flex gap-9 my-3'>
                  <Link><FaFacebookF /></Link>
                  <Link> <FaXTwitter /></Link>
                  <Link><FaInstagram /></Link>
                  <Link><FaLinkedinIn /></Link>
                </div>

              </div>
            </li>

          </ul>
          <p className='text-[#575353c7] text-center pb-5'>ⓒ Copyright Rimel 2022. All right reserved | <a href="mahkamov.uz">Mahkamov</a></p>
        </div>
      </div>
    </>
  )
}
