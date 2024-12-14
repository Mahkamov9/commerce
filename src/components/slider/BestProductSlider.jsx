import React, { useRef } from "react";
import Slider from "react-slick";
import { left, right } from "../../assets/icons/icons";
import EndTime from "../timer/EndTime";
import { useTranslation } from "react-i18next";

function BestProductSlider(props) {

  const { t } = useTranslation();

  const sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

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
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slider-container  my-5 mt-8 ">
      <div className={`${props?.time ? props?.style || "flex justify-between items-end my-5" : "my-5 text-right"}`} >
        {props?.time}
        <div className="text-center">
          <button className="button duration-500 font-bold rounded-lg bg-[#DB4444]  px-5 py-2 mt-10 mb-7 text-[20px] text-[#fff] hover:bg-white border-2 border-[#DB4444] hover:text-[#DB4444] " onClick={next}>
            <p>{t("slider.btn_text2")}</p>
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"].map((item, index) => (
          <div key={index}>
            <h3 className="bg-[#160b05e7] text-[#fff] text-center max-w-[270px] max-h-[350px] w-full h-full">
              {item}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BestProductSlider;
