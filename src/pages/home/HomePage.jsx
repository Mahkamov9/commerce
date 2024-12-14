import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import HomeSwiper from '../../components/homeSwiper/HomeSwiper';
import CardSlider from '../../components/slider/CardSlider';
import EndTime from '../../components/timer/EndTime';
import Caption from '../../components/caption/Caption';
import { useTranslation } from 'react-i18next';
import ProductSlider from '../../components/slider/ProductSlider';
import BestProductSlider from '../../components/slider/BestProductSlider';
import CategoriesSlider from '../../components/slider/CategoriesSlider';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <section className='border_top'>
        <div className="container">
          <div className='flex justify-between'>
            <div className='border_right py-5 pr-5'>
              <Sidebar />
            </div>
            <div className='max-w-[1000px] pt-5 pl-5 pb-0'>
              <HomeSwiper />
            </div>
          </div>
          <Caption title={t("caption.text")} />
          <div className='border_bottom'>
            <CardSlider style="flex justify-between items-end my-5" time={<EndTime />} />
          </div>
          <Caption title={t("caption.text2")} />
          <div className='border_bottom'>
            <ProductSlider style="flex justify-between items-end my-5 font-bold text-[40px]" time={<h2>{t("product.title1")}</h2>} />
          </div>
          <Caption title={t("caption.text3")} />
          <div>
            <BestProductSlider style="flex justify-between items-center my-5 font-bold text-[40px]" time={<h2>{t("product.title2")}</h2>} />
            <CategoriesSlider />
          </div>

        </div>
      </section>
    </>
  )
}
