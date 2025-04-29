import React from 'react'
import Prisecart from './prisecart'
import Img from "../assets/01 1.png"
const Pomosh = () => {
    return (
        <div>
            <div className='bg-[#4C8CCB] w-[90%] flex flex-col items-start gap-[10px] px-[30px] py-[50px] m-auto my-[70px] rounded-[30px] md:px-[70px] '>
                <p className='text-white'>Главная  /  Цены</p>
                <p className=' text-white font-medium text-[30px] md:text-[45px] '>Услуги доставки из Великобритании</p>
            </div>
           <div className='flex flex-wrap gap-[15px] w-[80%] m-auto my-[70px] '>
           <Prisecart img={Img} text="Ваш личный адрес для покупок" />
           <Prisecart img={Img} text="Ваш личный адрес для покупок" />
           <Prisecart img={Img} text="Ваш личный адрес для покупок" />
           <Prisecart img={Img} text="Ваш личный адрес для покупок" />
           </div>
        </div>
    )
}

export default Pomosh
