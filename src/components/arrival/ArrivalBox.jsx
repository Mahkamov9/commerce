import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function ArrivalBox(props) {
  const { t } = useTranslation();
  return (
    <div className={`max-w-[1170px] w-full ${props.image}  p-3 relative my-2 transition-all hover:scale-[1.02]`}>
      <div className='max-w-[400px] absolute bottom-3 left-3  text-[#fff]'>
        <h2 className='py-2 font-bold'>{props.title}</h2>
        <p className='py-2 max-w-[70%]'>{props.text}</p>
        <Link className='decoration-solid underline hover:no-underline' to={props.link}>{t("headline.headline_btn")}</Link>
      </div>
    </div>
  )
}
