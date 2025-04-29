import React from 'react'
import { Link } from 'react-router-dom'
import ImgNav from "../assets/_2243895274448.png"
import ImgSigin from "../assets/Без названия.png"
const Footer = () => {
    return (
        <div>
            <header>
                <div className='flex items-center w-[90%] m-auto justify-between my-[30px]  md:w-[80%] ' >
                    <img className='w-[130px] md:w-[150px]' src={ImgNav} alt="" />
                    <div className='hidden md:flex items-center gap-[30px] '>
                        <Link to="/">
                            <p>Как покупать  </p>
                        </Link>
                        <Link to="/about">
                            <p>Распродажи</p>
                        </Link>
                        <Link to="/contact">
                            <p>Цены</p>
                        </Link>
                        <Link to="/pomosh">
                            <p>Помощь</p>
                        </Link>
                        <Link to="/bonus">
                            <p>Бонусы</p>
                        </Link>
                        <Link to="/blog">
                            <p>Блог</p>
                        </Link>
                        <Link to="/magazin">
                            <p>Магазины</p>
                        </Link>
                    </div>
                    <div className="flex items-center gap-[5px] ">
                        <img className="w-[30px]" src={ImgSigin} alt="" />
                        <p>Вход</p>
                    </div>
                    <button className=' p-[5px] bg-[#01D37F] text-white rounded-[70px] text-[10px] py-[5px] px-[2px] md:p-[10px] md:text-[15px] '>Связаться с нами</button>
                </div>
            </header>
        </div>
    )
}

export default Footer
