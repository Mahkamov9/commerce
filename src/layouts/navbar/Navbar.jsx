import React from 'react'
import ChangeLanguage from '../../components/changeLanguage/ChangeLanguage'
import { useTranslation } from 'react-i18next'

import { basket, favorite, Logo } from '../../assets/icons/icons';
import { Link } from 'react-router-dom';
import SearchInput from '../../components/searchInput/SearchInput';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <>
      <div className='bg-[#000] text-center h-[48px] flex items-center justify-center text-[#fff] '>
        <h1>{t("headline.headline_text")}</h1>
        <a href="/" className='decoration-solid underline ml-3'>{t("headline.headline_btn")}</a>
        <ChangeLanguage />
      </div>

      <div className='nav my-5'>
        <div className="container flex justify-between items-center">
          <Link to="/"><img className='text-[25px]' src={Logo} alt="Logo" /></Link>
          <div className='text-[18px] transition-all'>
            <Link className='px-3 hover:underline'>{t("nav.home")}</Link>
            <Link className='px-3 hover:underline'>{t("nav.contact")}</Link>
            <Link className='px-3 hover:underline'>{t("nav.about")}</Link>
            <Link className='px-3 hover:underline'>{t("nav.sing")}</Link>
          </div>
          <SearchInput/>
          <div className='flex gap-3'>
            <Link>
              <img src={favorite} alt="Like" />
            </Link>
            <Link to="/basket">
              <img src={basket} alt="Cart" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
