import React, { useContext } from 'react'
import ChangeLanguage from '../../components/changeLanguage/ChangeLanguage'
import { useTranslation } from 'react-i18next'

import { basket, favorite, Logo, user } from '../../assets/icons/icons';
import { Link, NavLink } from 'react-router-dom';
import SearchInput from '../../components/searchInput/SearchInput';
import { DataContext } from '../../App';

export default function Navbar() {
  
  const data = useContext(DataContext);

  // const likeNumber = data.length;
  console.log("Likesoni : ", data.likeData.length);

  const { t } = useTranslation();
  return (
    <>
      <div className='bg-[#000] text-center h-[48px] flex items-center justify-center text-[#fff] '>
        <h1>{t("headline.headline_text")}</h1>
        <a href="/" className='decoration-solid underline ml-3 hover:no-underline'>{t("headline.headline_btn")}</a>
        <ChangeLanguage />
      </div>

      <div className='nav my-5'>
        <div className="container flex justify-between items-center">
          <Link to="/"><img className='text-[25px]' src={Logo} alt="Logo" /></Link>
          <div className='text-[18px] transition-all'>
            <Link to="/" className='px-3 hover:underline'>{t("nav.home")}</Link>
            <Link to="/contact" className='px-3 hover:underline'>{t("nav.contact")}</Link>
            <Link to="/about" className='px-3 hover:underline'>{t("nav.about")}</Link>
            <Link to="/singup" className='px-3 hover:underline'>{t("nav.sing")}</Link>
          </div>
          <SearchInput />
          <div className='flex gap-3'>
            <NavLink to="/favorite" className="relative">
              <img src={favorite} alt="Like" />
              <span className={data.likeData.length ? "absolute top-0 right-0 w-[20px] h-[20px] rounded-full bg-[red] p-1 text-[15px] flex justify-center items-center text-[#fff]" : "hidden"}>
                {data.likeData.length}
              </span>
            </NavLink>
            <NavLink to="/basket">
              <img src={basket} alt="Cart" />
            </NavLink>
            <NavLink to="/account" className={({ isActive }) => isActive ? "bg-[red] rounded-full p-[2px] group" : "p-[2px] group"}>
              <img className="group-[.bg-\[red\]]:invert" src={user} alt="User" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
