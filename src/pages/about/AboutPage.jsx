import React from 'react'
import { aboutImage } from '../../assets/images/images'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Label from '../../components/label/Label';
import { secure_icon, service_icon, support_icon } from '../../assets/icons/icons';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className="container">
          <div className='flex gap-2 font-medium text-[18px]'>
            <Link className='text-[#787474]' to="/">Home</Link>
            <span className='text-[#787474]'>/</span>
            <Link to="/about">About</Link>
          </div>
          <div className='flex justify-between  my-10 h-[80vh]'>
            <div className='flex justify-center items-start flex-col'>
              <h2 className='text-[50px] font-bold my-4 max-w-[40%]'>{t("about.content.text1")}</h2>
              <p className='my-2 text-[20px] max-w-[50%]'>{t("about.content.text2")}</p>
              <p className='my-2 text-[20px] max-w-[50%]'>{t("about.content.text3")}</p>
            </div>
            <div>
              <img className='w-[700px] absolute right-0 top-[30%]' src={aboutImage} alt="Mahkamov | Dev" />
            </div>

          </div>
          {/* Label */}
          <div className='mt-60 mb-16'>
            <div className='flex justify-around'>
              <Label image={service_icon} title={t("label.card1.text")} text={t("label.card1.title")} />
              <Label image={support_icon} title={t("label.card2.text")} text={t("label.card2.title")} />
              <Label image={secure_icon} title={t("label.card3.text")} text={t("label.card3.title")} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
