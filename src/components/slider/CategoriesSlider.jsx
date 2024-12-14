import React, { useRef } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { sliderItem } from "../../assets/images/images";
import SliderTimer from "../timer/SliderTimer";

function CategoriesSlider() {
  const sliderRef = useRef(null);
  const { t } = useTranslation();
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slider-container  my-5 mt-8 ">
      <Slider ref={sliderRef} {...settings}>
        <div className="w-[1170px] h-[500px] slider_backround ">
          <div className="flex justify-between py-6">
            <div className="flex justify-start items-start flex-col py-10 pl-8">
              <p className="text-[#00FF66] text-[20px] font-bold">{t("categoriesSlider.text1")}</p>
              <p className="text-[#FAFAFA] text-[50px] font-bold">{t("categoriesSlider.text2")}</p>
              <SliderTimer />
              <button className="button duration-500 font-bold rounded-lg bg-[#00FF66]  px-5 py-2 mt-10 mb-7 text-[20px] text-[#fff] hover:bg-white border-2 border-[#00FF66] hover:text-[#00FF66] ">{t("categoriesSlider.text3")}</button>
            </div>
            <div className="flex justify-center items-center"><img src={sliderItem} alt="Mahkmov | Dev" /></div>
          </div>
        </div>

        <div className="w-[1170px] h-[500px] slider_backround ">
          <div className="flex justify-between py-6">
            <div className="flex justify-start items-start flex-col py-10 pl-8">
              <p className="text-[#00FF66] text-[20px] font-bold">{t("categoriesSlider.text1")}</p>
              <p className="text-[#FAFAFA] text-[50px] font-bold">{t("categoriesSlider.text2")}</p>
              <SliderTimer />
              <button className="button duration-500 font-bold rounded-lg bg-[#00FF66]  px-5 py-2 mt-10 mb-7 text-[20px] text-[#fff] hover:bg-white border-2 border-[#00FF66] hover:text-[#00FF66] ">{t("categoriesSlider.text3")}</button>
            </div>
            <div className="flex justify-center items-center"><img src={sliderItem} alt="Mahkmov | Dev" /></div>
          </div>
        </div>

        <div className="w-[1170px] h-[500px] slider_backround ">
          <div className="flex justify-between py-6">
            <div className="flex justify-start items-start flex-col py-10 pl-8">
              <p className="text-[#00FF66] text-[20px] font-bold">{t("categoriesSlider.text1")}</p>
              <p className="text-[#FAFAFA] text-[50px] font-bold">{t("categoriesSlider.text2")}</p>
              <SliderTimer />
              <button className="button duration-500 font-bold rounded-lg bg-[#00FF66]  px-5 py-2 mt-10 mb-7 text-[20px] text-[#fff] hover:bg-white border-2 border-[#00FF66] hover:text-[#00FF66] ">{t("categoriesSlider.text3")}</button>
            </div>
            <div className="flex justify-center items-center"><img src={sliderItem} alt="Mahkmov | Dev" /></div>
          </div>
        </div>

      </Slider>
    </div>
  );
}

export default CategoriesSlider;
