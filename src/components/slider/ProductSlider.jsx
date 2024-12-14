import React, { useRef } from "react";
import Slider from "react-slick";
import { left, right } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";

function ProductSlider(props) {

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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slider-container  my-5 mt-8 mb-8 ">
      <div className={`${props?.time ? props?.style || "flex justify-between items-end my-5" : "my-5 text-right"}`} >
        {props?.time}
        <div>
          <button className="button rounded-full bg-[#F5F5F5] p-2" onClick={previous}>
            <img src={left} alt="left" />
          </button>
          <button className="button rounded-full bg-[#F5F5F5] p-2 ml-4" onClick={next}>
            <img src={right} alt="right" />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {["Slide 1","Slide 2","Slide 3", "Slide 4", "Slide 5"].map((item, index) => (
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

export default ProductSlider;
