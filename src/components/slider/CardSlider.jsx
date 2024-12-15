import React, { useContext, useRef, useState } from "react";
import Slider from "react-slick";
import { left, right } from "../../assets/icons/icons";
import EndTime from "../timer/EndTime";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from 'uuid';
import { productImg } from "../../assets/images/images";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../App";

function CardSlider(props) {

  const data = useContext(DataContext)
  console.log(data)

  const [productData, setProductData] = useState([
    {
      id: uuidv4(),
      title: "Hello product",
      images: productImg,
      sale_price: 120,
      star: 88,
      like: false,
      price: 160,
      present: 40,
    },
    {
      id: uuidv4(),
      title: "Hello product",
      images: productImg,
      sale_price: 120,
      star: 88,
      like: false,
      price: 160,
      present: 40,
    },
    {
      id: uuidv4(),
      title: "Hello product",
      images: productImg,
      sale_price: 120,
      star: 88,
      like: false,
      price: 160,
      present: 40,
    },
    {
      id: uuidv4(),
      title: "Hello product",
      images: productImg,
      sale_price: 120,
      star: 88,
      like: false,
      price: 160,
      present: 40,
    },
    {
      id: uuidv4(),
      title: "Hello product",
      images: productImg,
      sale_price: 120,
      star: 88,
      like: false,
      price: 160,
      present: 40,
    },
    {
      id: uuidv4(),
      title: "Hello product",
      images: productImg,
      sale_price: 120,
      star: 88,
      like: false,
      price: 160,
      present: 40,
    },
    {
      id: uuidv4(),
      title: "Hello product",
      images: productImg,
      sale_price: 120,
      star: 88,
      like: false,
      price: 160,
      present: 40,
    },
    {
      id: uuidv4(),
      title: "Hello product",
      images: productImg,
      sale_price: 120,
      star: 88,
      like: false,
      price: 160,
      present: 40,
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
    setProductData((prev) => {
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
    const curt = productData.find((item) => {
      return item.id === id
    })
    data.curtData.push(curt)
    console.log(data)
  }

  //CHAT GPT
  // const addCurt = (id) => {
  //   // Ma'lumotni topish
  //   const curt = productData.find((item) => item.id === id);

  //   // Agar arrayda mavjud bo'lmasa, qo'shamiz
  //   if (!data.curtData.some((item) => item.id === id)) {
  //     data.curtData.push(curt);
  //     console.log("Added to Cart:", curt);
  //   } else {
  //     console.log("Item already in Cart:", curt);
  //   }

  //   console.log("Current Cart Data:", data.curtData);
  // };


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
        {productData?.map((item) => (
          <div key={item?.id}>
            <h3 className="bg-[#160b05e7] text-[#fff] text-center max-w-[270px] max-h-[350px] w-full h-full">
              {item?.title}
            </h3>
            <img src={item?.images} alt="" />
            <p>${item?.price}</p>
            <button onClick={() => addLikes(item.id)} className="bg-[red]">Add Like</button>
            <button onClick={() => addCurt(item.id)} className="bg-[blue]">Add Card</button>
            <NavLink to={item?.id} className="bg-[yellow]">about</NavLink>
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

export default CardSlider;
