import React from 'react'

const Prisecart = ({img,text}) => {
  return (
    <div className='flex flex-col items-start gap-[20px]'>
      <img src={img} className='w-[250px]' alt="" />
      <div className='flex flex-col items-start gap-[20px] '>
        <p  className='text-[20px] w-[80%] '>{text}</p>
        <p className='text-gray-600'>на нашем современном <br /> автоматизированном складе в <br /> безналоговом Делавэре</p>
        <button className='bg-[#41B7E9] rounded-[5px] text-white py-[15px] px-[30px] '>Бесплатно</button>
      </div>
    </div>
  )
}

export default Prisecart
