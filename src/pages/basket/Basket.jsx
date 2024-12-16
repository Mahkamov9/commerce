import React, { useContext, useState } from 'react'
import { DataContext } from '../../App'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IoTrashOutline } from "react-icons/io5";
import { noproduct } from '../../assets/images/images';

export default function Basket() {
  const data = useContext(DataContext)
  const [price, setPrice] = useState(1);
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className="container">
          <div className='flex gap-2 font-medium text-[18px]'>
            <Link className='text-[#787474]' to="/">Home</Link>
            <span className='text-[#787474]'>/</span>
            <Link to="/basket">Cart</Link>
          </div>

          {
            data.likeData = 0 ? (
              <div className='text-[40px] flex justify-start mt-6 items-center flex-col gap-5'>
                <img src={noproduct} alt="Rams" />
                <p>Siz hali mahsulot qo'shmadingiz</p>
                <Link className='bg-[#0E5299] text-[20px] text-[#fff] p-1 px-4 transition-all  mb-10 font-bold rounded-lg border-[#0E5299] border-2  hover:text-[#0E5299] hover:bg-[#fff]' to="/" >Go Home</Link>
              </div>
            ) : (
              <div>
                <div className='my-5 py-5 px-2 shadow-xl rounded-md flex justify-between w-full'>
                  <label className='text-center font-bold text-[20px] max-w-[25%] w-full'>{t("basket.table.head.text1")}sdf</label>
                  <p className='text-center font-bold text-[20px] max-w-[25%] w-full'>{t("basket.table.head.text2")}</p>
                  <p className='text-center font-bold text-[20px] max-w-[25%] w-full'>{t("basket.table.head.text3")}</p>
                  <p className='text-center font-bold text-[20px] max-w-[25%] w-full'>{t("basket.table.head.text4")}</p>
                </div>
                {data?.curtData?.map((item) => (
                  <div key={item?.id} className='my-5 py-5 px-2 shadow-xl rounded-md flex justify-between w-full gap-1'>
                    <div className="flex justify-center items-center gap-3 max-w-[25%] w-full relative group py-2">
                      <img src={item?.images} alt="Rasm" className="max-w-[60px] max-h-[60px]" />
                      <p>{item?.title}</p>
                      <button className="absolute top-0 left-0 w-full h-full bg-[red] bg-opacity-70 rounded-lg text-white flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <IoTrashOutline size={"25px"} />
                      </button>
                    </div>

                    <p className='flex justify-center items-center text-[20px]  gap-3 max-w-[25%] w-full'>{item?.sale_price} $</p>
                    <p className='flex justify-center items-center text-[20px]  gap-3 max-w-[25%] w-full'><input onChange={(e) => setPrice(e.target.value)} className='border-2 border-black-700 w-14 outline-none rounded-lg h-10 p-2' min={1} placeholder='1' type="number" /></p>
                    <p className='flex justify-center items-center text-[20px]  gap-3 max-w-[25%] w-full'>{item.sale_price * price} $</p>
                  </div>
                ))}
              </div>
            )
          }







        </div>
      </section>
    </>
  )
}
