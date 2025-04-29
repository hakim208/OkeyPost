import React from 'react'
import Menu from './menu'
import Menu1 from "../assets/фон.png"
import ImgList from "../assets/Пагинатор.png"
import ImgWhatsap from "../assets/Ватсап.png"
import ImgWheypsat from "../assets/Вайбер.png"
import ImgChat from "../assets/Чат.png"
const Sena = () => {
    return (
        <div>
            <div className='bg-[#4C8CCB] w-[90%] flex flex-col items-start gap-[10px] px-[30px] py-[50px] m-auto my-[70px] rounded-[30px] md:px-[70px] '>
                <p className='text-[15px] text-white '>Главная  /  Распродажи</p>
                <p className='text-[30px] font-medium text-white md:text-[40px] '>Распродажи</p>
                <p className='text-white font-medium  '>ранний доступ к распродажам в магазинах</p>
                <button className=' bg-[#00D580] py-[15px] px-[50px] mt-[40px] rounded-[50px] text-white '>Получить адрес в UK</button>
            </div>
            <div className='flex flex-col gap-[30px] items-start my-[50px] w-[90%] m-auto md:w-[80%]  '>
                <p className='text-[23px] font-medium my-[50px] md:text-[40px] '>Black Friday Early Access <br />
                    ранний доступ к распродажам <br />
                    в магазинах Великобритании!</p>
            </div>
            <div className='w-[90%] m-auto items-center md:w-[80%] flex gap-[20px] flex-wrap mb-[70px] '>
                <Menu img={Menu1} text="Abercrombie & Fitch" />
                <Menu img={Menu1} text="Abercrombie & Fitch" />
                <Menu img={Menu1} text="Abercrombie & Fitch" />
                <Menu img={Menu1} text="Abercrombie & Fitch" />
                <Menu img={Menu1} text="Abercrombie & Fitch" />
                <Menu img={Menu1} text="Abercrombie & Fitch" />
                <Menu img={Menu1} text="Abercrombie & Fitch" />
                <Menu img={Menu1} text="Abercrombie & Fitch" />
                <Menu img={Menu1} text="Abercrombie & Fitch" />
                <Menu img={Menu1} text="Abercrombie & Fitch" />
            </div>
            <div className='mb-[70px] flex flex-col items-center '>
                <img src={ImgList} alt="" />
            </div>
            <div className='bg-[#4C8CCB] w-[90%] flex flex-col items-center md:flex-row justify-between gap-[10px] px-[50px] py-[50px] m-auto my-[70px] rounded-[30px] md:px-[70px] '>
                <p className='text-[25px] font-medium text-white md:text-[35px] '>Остались вопросы? Спросите нас в соцсетях!</p>
                <div className='flex items-center'>
                    <img src={ImgWhatsap} alt="" />
                    <img src={ImgWheypsat} alt="" />
                    <img src={ImgChat} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sena
