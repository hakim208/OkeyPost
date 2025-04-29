import React from 'react'
import ImgOtziv from "../assets/рейтинг.png"

const User = ({img,text}) => {
  return (
    <div className='flex flex-col items-center md:flex-row gap-[30px] p-[10px] bg-gray-50 rounded-[20px] '>
      <img src={img} alt="" />
      <div className='flex flex-col gap-[10px] items-start '>
        <p className='font-medium'>{text}</p>
        <img src={ImgOtziv} alt="" />
        <p className='text-gray-600 text-[15px] '>Ваша доставка самая быстрая и дешёвая!!!</p>
        <p className='mt-[50px] font-medium '>Дата: <span className='text-gray-600'>16 Ноября 2021</span></p>
        <p className='font-medium'>Город: <span className='text-gray-600'>Санкт-Петербург</span></p>
      </div>
    </div>
  )
}

export default User
