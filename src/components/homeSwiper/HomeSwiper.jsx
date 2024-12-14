import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { banner } from '../../assets/images/images';

export default function HomeSwiper() {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}

          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="max-w-[980px] w-full max-h-[500px] h-full"
        >

          <SwiperSlide className='w-full h-full'>
            <img className='w-full' src={banner} alt="Mahkamov | Dev" />
          </SwiperSlide>
          <SwiperSlide className='w-full h-full'>
            <img className='w-full' src={banner} alt="Mahkamov | Dev" />
          </SwiperSlide>
          <SwiperSlide className='w-full h-full'>
            <img className='w-full' src={banner} alt="Mahkamov | Dev" />
          </SwiperSlide>
          <SwiperSlide className='w-full h-full'>
            <img className='w-full' src={banner} alt="Mahkamov | Dev" />
          </SwiperSlide>


        </Swiper>
      </div>
    </>
  )
}
