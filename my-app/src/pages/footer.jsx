import React from 'react'
import Img from "../assets/_2243895274448.png"
import Img2 from "../assets/Соцсети.png"
const Footer = () => {
  return (
    <div className='w-[80%] m-auto flex flex-wrap gap-[30px] md:justify-between items-start '>
      <div className='flex flex-col gap-[30px] items-start '>
        <img src={Img} alt="" />
        <img src={Img2} alt="" />
      </div>
      <div className='flex flex-col gap-[10px] items-start '>
        <p className='font-medium text-[15px] '>О компании</p>
        <p>Услуги</p>
        <p>Цены</p>
        <p>Отзывы</p>
        <p>Контакты
        </p>
        <p>Вакансии
        </p>
        <p>Соглашение о персональных данных
        </p>
        <p>Условия использования</p>
      </div>
      <div className='flex flex-col gap-[10px] items-start '>
        <p className='font-medium text-[15px] '>Полезное</p>
        <p>Как работает наш сервис
        </p>
        <p>Как покупать с оператором
        </p>
        <p>Ответы на частые вопросы
        </p>
        <p>Популярные магазины

        </p>
        <p>Черный список магазинов

        </p>
        <p>Актуальные распродажи
        </p>
      </div>
      <div className='flex flex-col gap-[10px] items-start '>
        <p className='font-medium text-[15px] '>Спецпроекты</p>
        <p>50% на первую доставку
        </p>
        <p>Скидки для постоянных клиентов
        </p>
        <p>Реферальная программа
        </p>
        <p>Кэшбек Mr. Rebates и Rakuten
        </p>
        <p>Stop Fraud
        </p>
      </div>
    </div>
  )
}

export default Footer
