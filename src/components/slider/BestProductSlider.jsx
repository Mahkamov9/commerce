import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { card_star } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from 'uuid';
import { bag, clothers } from "../../assets/images/images";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa6";

function BestProductSlider(props) {

  const [bestProductData, setBestProductData] = useState([
    {
      id: uuidv4(),
      title: "The north coat",
      images: clothers,
      sale_price: 260,
      star: 65,
      like: false,
      price: 360,
      present: 0,
    },
    {
      id: uuidv4(),
      title: "GUCCI dufle bag",
      images: bag,
      sale_price: 700,
      star: 31,
      like: true,
      price: 900,
      present: 20,
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
    slidesToShow: 4,
    slidesToScroll: 4,
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
        {bestProductData.map((item) => (
          <div key={item?.id}>
            <div className="group p-1">
              <div className="relative bg-[#F5F5F5] rounded-lg w-[270px] flex justify-center items-center h-[250px]">
                <img src={item?.images} alt="Image" />
                {/* add Like */}
                <button onClick={() => addLikes(item?.id)} className="bg-white rounded-full p-3 absolute top-3 right-3">{item?.like ? (<FcLike size="25px" />) : (<FaRegHeart size="25px" />)}</button>
                {/* add Basket */}
                <button onClick={() => addCurt(item?.id)} className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center rounded-b-lg p-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <p>{t("button.text")}</p>
                </button>
                {/* Sale */}
                {item?.present === 0 ? (<span className="opacity-0">NO SALE</span>) : (<span className="text-[#fff] rounded-lg bg-[#db4444] py-1 px-2 absolute top-4 left-3 ">-{item?.present}%</span>)}
              </div>
              <p className="text-lg font-medium">{item?.title}</p>
              <div className="flex gap-3 mt-2 text-[20px]">
                <p className="text-[#DB4444]">${item?.sale_price}</p>
                <p className="line-through text-[#3b3838]">${item?.price}</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <img src={card_star} alt="star" />
                <span className="text-[#3b3838]">({item?.star})</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BestProductSlider;
