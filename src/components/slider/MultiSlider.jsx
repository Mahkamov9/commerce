import React, { useContext, useRef, useState } from "react";
import Slider from "react-slick";
import { card_star, left, right } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from 'uuid';
import { chairImg, keyboardImg, lcdImg, productImg } from "../../assets/images/images";
import { DataContext } from "../../App";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

function MultiSlider(props) {

  const data = useContext(DataContext)
  console.log(data)

  const [multiSliderData, setMultiSliderData] = useState([
    {
      id: uuidv4(),
      title: "HAVIT HV-G92 Gamepad",
      images: productImg,
      sale_price: 120,
      star: 88,
      like: false,
      price: 160,
      present: 40,
    },
    {
      id: uuidv4(),
      title: "AK-900 Wired Keyboard",
      images: keyboardImg,
      sale_price: 960,
      star: 75,
      like: false,
      price: 1160,
      present: 35,
    },
    {
      id: uuidv4(),
      title: "IPS LCD Gaming Monitor",
      images: lcdImg,
      sale_price: 210,
      star: 89,
      like: false,
      price: 330,
      present: 15,
    },
    {
      id: uuidv4(),
      title: "S-Series Comfort Chair ",
      images: chairImg,
      sale_price: 600,
      star: 99,
      like: false,
      price: 720,
      present: 1,
    },
    {
      id: uuidv4(),
      title: "Lorem and ipsum",
      images: chairImg,
      sale_price: 300,
      star: 11,
      like: false,
      price: 520,
      present: 2,
    },
    {
      id: uuidv4(),
      title: "What is your name?",
      images: keyboardImg,
      sale_price: 5464,
      star: 65,
      like: false,
      price: 654,
      present: 645,
    },
    {
      id: uuidv4(),
      title: "How are you",
      images: chairImg,
      sale_price: 499,
      star: 12,
      like: false,
      price: 299,
      present: 3,
    },
    {
      id: uuidv4(),
      title: "Where are you",
      images: chairImg,
      sale_price: 199,
      star: 56,
      like: false,
      price: 645,
      present: 101,
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

  const addLikes = (id) => {
    setMultiSliderData((prev) => {
      const updatedData = prev.map((item) =>
        item.id === id ? { ...item, like: !item.like } : item
      );
      const likedItem = updatedData.find((item) => item.id === id);
      if (likedItem.like) {
        data.likeData = [...data.likeData, likedItem];
      }
      else {
        data.likeData = data.likeData.filter((item) => item.id !== id);
      }
      console.log("Updated Like Data:", data.likeData);
      return updatedData;
    });
  };

  const addCurt = (id) => {
    const curt = multiSliderData.find((item) => {
      return item.id === id
    })
    data.curtData.push(curt)
    console.log(data)
  }

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
    centerPadding: "60px",
    autoplaySpeed: 2000,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slider-container  my-5 mt-8 ">
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
        {multiSliderData.map((item) => (
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
                {item?.present === 0 ? (<span className="opacity-0">NO SALE</span>) : (<span className="text-[#fff] rounded-lg bg-[#db4444] py-1 px-2 absolute top-4 left-3 ">-{item?.present}%</span>) }
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
      <div className="text-center">
        <button className="button duration-500 font-bold rounded-lg bg-[#DB4444]  px-5 py-2 mt-10 mb-7 text-[20px] text-[#fff] hover:bg-white border-2 border-[#DB4444] hover:text-[#DB4444] " onClick={next}>
          <p>{t("slider.btn_text")}</p>
        </button>
      </div>
    </div>
  );
}

export default MultiSlider;
