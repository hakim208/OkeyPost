import React from 'react'
import Cart from './cart'
import ImgCart from "../assets/01 1.png"
import ImgCart2 from "../assets/02 1.png"
import ImgCart3 from "../assets/03 1.png"
import ImgCart4 from "../assets/04 1.png"
import ImgCart5 from "../assets/05 1.png"
const Raspradaja = () => {
    return (
        <div>
            <div className='bg-[#4C8CCB] w-[90%] flex flex-col items-start gap-[10px] px-[30px] py-[50px] m-auto my-[70px] rounded-[30px] md:px-[70px] '>
                <p className='text-[15px] text-white '>Главная  /  Как покупать</p>
                <p className='text-[30px] font-medium text-white md:text-[40px] '>Научим покупать вВеликобритании!</p>
                <p className='text-white font-medium  '>и экономить до 70%</p>
                <button className=' bg-[#00D580] py-[15px] px-[50px] mt-[40px] rounded-[50px] text-white '>Получить адрес в UK</button>
            </div>
            <div className='flex flex-col gap-[30px] w-[90%] m-auto md:w-[80%] my-[70px]'>
                <div className='flex flex-col gap-[30px] items-start '>
                    <p className='text-[25px] font-medium md:text-[35px] '>Покупать в Великобритании очень просто</p>
                    <p className='text-[13px] text-gray-600 '>Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать <br /> по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем <br /> и отправим их к вам домой.</p>
                </div>
                <Cart text="01" img={ImgCart} />
                <Cart text="02" img={ImgCart2} />
                <Cart text="03" img={ImgCart3} />
                <Cart text="04" img={ImgCart4} />
                <Cart text="05" img={ImgCart5} />
            </div>
        </div>
    )
}

export default Raspradaja
