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
import ArrivalBox from '../../components/arrival/ArrivalBox';
import Label from '../../components/label/Label';
import { secure_icon, service_icon, support_icon } from '../../assets/icons/icons';
import MultiSlider from '../../components/slider/MultiSlider';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <section className='border_top'>
        <div className="container">
          {/* Sidebar && Banner */}
          <div className='flex justify-between'>
            <div className='border_right py-5 pr-5'>
              <Sidebar />
            </div>
            <div className='max-w-[1000px] pt-5 pl-5 pb-0'>
              <HomeSwiper />
            </div>
          </div>

          {/* Flash Sales */}
          <Caption title={t("caption.text")} />
          <div className='border_bottom'>
            <CardSlider style="flex justify-between items-end my-5" time={<EndTime />} />
          </div>

          {/* Categories */}
          <Caption title={t("caption.text2")} />
          <div className='border_bottom'>
            <ProductSlider style="flex justify-between items-end my-5 font-bold text-[40px]" time={<h2>{t("product.title1")}</h2>} />
          </div>

          {/* This Month */}
          <Caption title={t("caption.text3")} />
          <div>
            <BestProductSlider style="flex justify-between items-center my-5 font-bold text-[40px]" time={<h2>{t("product.title2")}</h2>} />
            <CategoriesSlider />
          </div>


          {/* Our Products */}
          <Caption title={t("caption.text4")} />
          <div>
            <MultiSlider style="flex justify-between font-bold text-[40px] items-end my-5" time={<h2>{t("product.title3")}</h2>} />
          </div>


          {/* Featured */}
          <Caption title={t("caption.text5")} />
          <h2 className="text-left text-[40px] font-bold my-5">{t("product.title4")}</h2>

          <div className='flex justify-between max-h-[600px] h-full gap-10'>

            <div className='max-w-2/4 w-full '>
              <ArrivalBox image={"arrival_image1 h-[500px]"} title={t("arrival.card1.title")} text={t("arrival.card1.text")} link="/" />
            </div>

            <div className='max-w-2/4 w-full max-h-2/4 h-full gap-10 flex  flex-col'>
              <div className='h-2/4'>
                <ArrivalBox image={"arrival_image2 h-[220px]"} title={t("arrival.card2.title")} text={t("arrival.card2.text")} link="/" />
              </div>
              <div className='flex gap-10'>
                <ArrivalBox image={"arrival_image3 h-[220px] "} title={t("arrival.card3.title")} text={t("arrival.card3.text")} link="/" />
                <ArrivalBox image={"arrival_image4 "} title={t("arrival.card4.title")} text={t("arrival.card4.text")} link="/" />
              </div>
            </div>

          </div>

          {/* Label */}
          <div className='my-14'>
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
