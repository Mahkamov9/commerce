import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { left, phone, right } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from 'uuid';



function ProductSlider(props) {

  const [productSliderData, setProductSliderData]= useState([
    {
      id: uuidv4(),
      image: phone,
      text: "Phones"
    },
    {
      id: uuidv4(),
      image: phone,
      text: "Computers"
    },
    {
      id: uuidv4(),
      image: phone,
      text: "Watches"
    },
    {
      id: uuidv4(),
      image: phone,
      text: "Camera"
    },
    {
      id: uuidv4(),
      image: phone,
      text: "HeadPhone"
    },
    {
      id: uuidv4(),
      image: phone,
      text: "Person"
    },
    {
      id: uuidv4(),
      image: phone,
      text: "Trees"
    },
    {
      id: uuidv4(),
      image: phone,
      text: "Apples"
    },
    {
      id: uuidv4(),
      image: phone,
      text: "Toys"
    },
    {
      id: uuidv4(),
      image: phone,
      text: "Clothers"
    }
  ])

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
    slidesToShow: 7,
    slidesToScroll: 2,
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
        {productSliderData?.map((item) => (
          <div key={item?.id}>
            <div className="group w-[150px] h-[150px] flex flex-col items-center justify-center border border-gray-300 cursor-pointer transition-all duration-300 hover:bg-red-500">
              <img src={item?.image} alt="Img" className="w-10 h-10 transition-all duration-300 group-hover:invert" />
              <p className="mt-3 text-black group-hover:text-white transition-all duration-300">{item?.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
