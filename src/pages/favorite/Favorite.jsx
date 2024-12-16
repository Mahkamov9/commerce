import React, { useContext } from 'react'
import { DataContext } from '../../App'
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import Caption from '../../components/caption/Caption';
import CardSlider from '../../components/slider/CardSlider';



export default function Favorite() {

  const data = useContext(DataContext)
  console.log(data.likeData, "favorite");

  const { t } = useTranslation();

  const removeLike = (id) => {
    data.likeData = data.likeData.filter((item) => item.id !== id)
    console.log(id, "shu bosildi");

  }

  return (
    <>
      <section>
        <div className="container">
          <div className='flex justify-between pt-10'>
            <p className='text-[30px] font-medium'>{t("favorite.title")} (2)</p>
            <button className='border-2 border-black px-5 py-3 text-[20px] rounded-md transition-all hover:text-[#fff] hover:bg-black'>{t("favorite.button")}</button>
          </div>
          <div className='flex flex-wrap gap-3 my-7'>
            {data?.likeData?.map((item) => (
              <div key={item?.id}>
                <div className="p-1">
                  <div className="relative bg-[#F5F5F5] rounded-lg w-[270px] flex justify-center items-center h-[250px]">
                    <img src={item?.images} alt="Image" />
                    {/* remove Like */}
                    <button onClick={() => removeLike(item?.id)} className="bg-white rounded-full p-3 absolute top-3 right-3"><RiDeleteBin5Line />                </button>
                    {/* add Basket */}
                    <button onClick={() => addCurt(item?.id)} className="absolute bottom-0 left-0 w-full bg-black/90 text-white font-bold text-center rounded-b-lg p-2">
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
                </div>
              </div>
            ))}
          </div>
          <Caption title={t("caption.text6")} />
          <CardSlider />




        </div>
      </section>
    </>
  )
}
