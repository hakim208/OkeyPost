import React from 'react'
import ImgIllyzi from "../assets/Иллюстрация.png"
import ImgTabl from "../assets/Табы.png"
import ImgRasha from "../assets/Цена в России.png"
import ImgFutbolka from "../assets/Футболка.png"
import ImgKurtka from "../assets/Куртка.png"
import ImgKurtka2 from "../assets/Цена в UK.png"
import ImgPremushistva from "../assets/Преимущества.png"
import ImgIlluyzi from "../assets/Иллюстрация (1).png"
import ImgSratrana from "../assets/Страна_.png"
import ImgIcon from "../assets/Иконка.png"
import ImgIlyustra from "../assets/Иллюстрация (2).png"
import ImgIlyustra2 from "../assets/Иллюстрация (3).png"
import ImgPole from "../assets/Поле ввода.png"
import ImgCart from "../assets/Иконка (1).png"
import ImgFon from "../assets/фон (1).png"
import ImgFon2 from "../assets/фон (2).png"
import ImgFon3 from "../assets/фон (3).png"
import ImgFon4 from "../assets/фон (4).png"
import User from './user'

const Kakpokupat = () => {
  return (
    <div className='bg-[#FEFEFE]'>
      <div className='bg-[#4C89C9] flex flex-col items-start gap-[30px] p-[20px] w-[90%] m-auto rounded-[30px] md:flex-row md:items-center md:px-[100px] '>
        <div className='flex flex-col items-start gap-[20px] '>
          <p className='text-white text-[30px] font-medium md:text-[55px] '>Доставка товаров <br /> из Великобритании <br /> в Россию</p>
          <p className='text-gray-300 '>Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, <br /> чтобы покупать со скидками в UK одежду, обувь, гаджеты известных <br /> брендов и безопасно отправлять вещи в Россию.</p>
          <button className=' p-[10px] bg-[#01D37F] text-white rounded-[70px] text-[15px] py-[10px] px-[20px] '>Получить адрес в UK</button>
        </div>
        <img src={ImgIllyzi} alt="" />
      </div>
      <div className='w-[90%] m-auto my-[50px] '>
        <p className=' text-[25px] md:text-[35px] font-medium '>Насколько выгодно <br /> покупать?</p>
        <img src={ImgTabl} alt="" />
      </div>
      <div className='w-[90%] m-auto md:w-[80%] flex flex-col items-center md:flex-row gap-[50px]'>
        <div className='mt-[30px]'>
          <div className='flex flex-col gap-[50px] items-start '>
            <p className='text-[25px] font-medium '>Columbia Barlow Pass 550 <br /> Turbodown Jacket</p>
            <img className='w-[230px]' src={ImgRasha} alt="" />
            <img className='mt-[30px] md:mt-[150px]' src={ImgFutbolka} alt="" />
          </div>
        </div>
        <div className='flex flex-col items-center '>
          <img src={ImgKurtka} alt="" />
          <p className='text-gray-300'>Срок доставки примерно 10 дней</p>
          <p className='text-[22px] font-medium ' >Вы экономите до <span className='text-green-400' >$119.56</span></p>
        </div>
        <div className='mt-[30px]'>
          <div className='flex flex-col gap-[50px] items-end '>
            <p className='text-[25px] font-medium '>Доставка одежды из <br /> Великобритании  от <span className='text-green-500'>£7.79 </span></p>
            <img className='w-[230px]' src={ImgKurtka2} alt="" />
            <img className=' md-[30px] md:mt-[150px]' src={ImgFutbolka} alt="" />
          </div>
        </div>
      </div>
      <img className='my-[50px]' src={ImgPremushistva} alt="" />
      <div className='bg-[#4C89C9] flex flex-col items-start gap-[30px] p-[20px] w-[90%] m-auto rounded-[30px] md:flex-row md:items-center md:px-[100px] '>
        <img src={ImgIlluyzi} alt="" />
        <div className='flex flex-col items-start gap-[20px] '>
          <p className='text-white text-[15px] font-medium md:text-[25px] '>Поручите нашим мастерам шопинга оформить <br /> заказы в английских магазинах и освободите время <br /> для более важных дел.</p>
          <p className='text-gray-300 '>Такой способ покупки также подойдёт, если магазин принимает только английские карты.</p>
          <button className=' p-[10px] bg-[#01D37F] text-white rounded-[70px] text-[15px] py-[20px] px-[45px] '>Попробовать</button>
        </div>
      </div>
      <div className='w-[90%] m-auto md:w-[80%] my-[50px] '>
        <p className=' text-[19px] md:text-[35px] font-medium '>OkeyPost удобная и быстрая доставка <br /> посылок из Великобритании </p>
        <p className=' text-[12px] md:text-gray-400 my-[20px] '>Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши <br /> посылки на складе, при необходимости объединим несколько доставок в одну <br /> и отправим их к вам надежно упакованными.</p>
        <div className='py-[30px] bg-gray-100 px-[20px] rounded-[20px] my-[30px] flex flex-col gap-[25px] md:items-start '>
          <div>
            <div className='flex flex-col items-center gap-[30px] md:flex-row justify-between '>
              <img src={ImgSratrana} className='w-[170px]' alt="" />
              <img src={ImgSratrana} className='w-[170px]' alt="" />
              <img src={ImgSratrana} className='w-[170px]' alt="" />
              <img src={ImgSratrana} className='w-[170px]' alt="" />
              <img src={ImgSratrana} className='w-[170px]' alt="" />
            </div>
          </div>
          <button className=' p-[10px] bg-[#01D37F] text-white rounded-[70px] text-[15px] py-[20px] px-[45px] '>Рассчитать</button>
        </div>
      </div>
      <p className='text-[30px] font-medium w-[80%] m-auto my-[30px] '>Варианты доставки:</p>
      <div className='w-[80%] m-auto py-[10px] px-[30px] rounded-[20px] bg-gray-100 '>
        <div className='flex justify-between '>
          <div className='flex items-center gap-[30px] '>
            <img src={ImgIcon} alt="" />
            <p className=' text-[10px] md:text-[18px] font-medium '>Почта России</p>
          </div>
          <div className='flex'>
            <div className=' hidden md:block border-r-1 border-l-1 px-[30px]'>
              <p className='text-gray-400'>Сроки:</p>
              <p className='text-[18px] font-medium '>10-14 дней</p>
            </div>
            <div className=' hidden  md:block border-r-1 border-l-1 px-[30px]'>
              <p className='text-gray-400'>Сроки:</p>
              <p className='text-[18px] font-medium '>10-14 дней</p>
            </div>
            <div className='border-r-1 border-l-1 px-[30px]'>
              <p className='text-gray-400'>Сроки:</p>
              <p className='text-[18px] font-medium '>10-14 дней</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[80%] m-auto py-[10px] my-[40px] px-[30px] rounded-[20px] bg-gray-100 '>
        <div className='flex justify-between '>
          <div className='flex items-center gap-[30px] '>
            <img src={ImgIcon} alt="" />
            <p className=' text-[10px] md:text-[18px] font-medium '>Почта России</p>
          </div>
          <div className='flex'>
            <div className=' hidden md:block border-r-1 border-l-1 px-[30px]'>
              <p className='text-gray-400'>Сроки:</p>
              <p className='text-[18px] font-medium '>10-14 дней</p>
            </div>
            <div className=' hidden  md:block border-r-1 border-l-1 px-[30px]'>
              <p className='text-gray-400'>Сроки:</p>
              <p className='text-[18px] font-medium '>10-14 дней</p>
            </div>
            <div className='border-r-1 border-l-1 px-[30px]'>
              <p className='text-gray-400'>Сроки:</p>
              <p className='text-[18px] font-medium '>10-14 дней</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[80%] m-auto py-[10px] px-[30px] rounded-[20px] bg-gray-100 '>
        <div className='flex justify-between '>
          <div className='flex items-center gap-[30px] '>
            <img src={ImgIcon} alt="" />
            <p className=' text-[10px] md:text-[18px] font-medium '>Почта России</p>
          </div>
          <div className='flex'>
            <div className=' hidden md:block border-r-1 border-l-1 px-[30px]'>
              <p className='text-gray-400'>Сроки:</p>
              <p className='text-[18px] font-medium '>10-14 дней</p>
            </div>
            <div className=' hidden  md:block border-r-1 border-l-1 px-[30px]'>
              <p className='text-gray-400'>Сроки:</p>
              <p className='text-[18px] font-medium '>10-14 дней</p>
            </div>
            <div className='border-r-1 border-l-1 px-[30px]'>
              <p className='text-gray-400'>Сроки:</p>
              <p className='text-[18px] font-medium '>10-14 дней</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[80%] m-auto my-[70px] '>
        <p className='text-[30px] font-semibold '>4 простых шага для ваших <br /> покупок в Великобритании </p>
        <div className='flex flex-col items-center my-[30px] md:flex-row gap-[20px] '>
          <div>
            <img src={ImgIlyustra} className='w-[250px]' alt="" />
            <p className='text-[20px] font-medium my-[10px] '>вы ВЫБИРАЕТЕ <br /> ТОВАР</p>
            <p className='text-gray-400'>в английском магазине, оплачиваете и <br /> указываете <span className='text-green-600'>адрес склада</span> OkeyPost</p>
          </div>
          <div>
            <img src={ImgIlyustra} className='w-[250px]' alt="" />
            <p className='text-[20px] font-medium my-[10px] '>вы ВЫБИРАЕТЕ <br /> ТОВАР</p>
            <p className='text-gray-400'>в английском магазине, оплачиваете и <br /> указываете <span className='text-green-600'>адрес склада</span> OkeyPost</p>
          </div>
          <div>
            <img src={ImgIlyustra} className='w-[250px]' alt="" />
            <p className='text-[20px] font-medium my-[10px] '>вы ВЫБИРАЕТЕ <br /> ТОВАР</p>
            <p className='text-gray-400'>в английском магазине, оплачиваете и <br /> указываете <span className='text-green-600'>адрес склада</span> OkeyPost</p>
          </div>
          <div>
            <img src={ImgIlyustra} className='w-[250px]' alt="" />
            <p className='text-[20px] font-medium my-[10px] '>вы ВЫБИРАЕТЕ <br /> ТОВАР</p>
            <p className='text-gray-400'>в английском магазине, оплачиваете и <br /> указываете <span className='text-green-600'>адрес склада</span> OkeyPost</p>
          </div>
        </div>
        <p className='text-gray-500 my-[30px] '>Не хотите разбираться самостоятельно, наши мастера шопинга с радостью <br /> купят все товары за вас.</p>
        <button className=' p-[10px] bg-[#01D37F] text-white rounded-[70px] text-[15px] py-[20px] px-[45px] '>Быстрая покупка</button>
      </div>
      <div className='bg-[#4C89C9] flex flex-col items-start gap-[30px] p-[20px] w-[90%] m-auto rounded-[30px] md:flex-row md:items-center md:px-[100px] '>
        <img src={ImgIlyustra2} alt="" />
        <div className='flex flex-col items-start gap-[20px] '>
          <p className='text-white text-[15px] font-medium md:text-[25px] '>Виртуальный тур по нашему складу <br /> в реальном времени </p>
          <p className='text-gray-300 '>Вы можете всегда посмотреть на нашу слаженую работу на складе.</p>
          <button className=' p-[10px] bg-[#01D37F] text-white rounded-[70px] text-[15px] py-[20px] px-[45px] '>Попробовать</button>
        </div>
      </div>
      <div className='w-[80%] m-auto mt-[70px] '>
        <p className='text-[25px] md:text-[35px] font-medium '>120 000 довольных клиентов в России <br /> уже сделали свой выбор</p>
        <p className='text-gray-600 mt-[30px] '>За последний год десятки тысяч наших клиентов заказали <br /> товары из Англии и оставили 19 633 отзыва</p>
        <div className='flex gap-[30px] flex-wrap my-[50px] '>
          <div className='flex flex-col gap-[20px] items-start p-[15px] bg-gray-50 rounded-[30px] '>
            <img src={ImgCart} alt="" />
            <p className='text-[20px] font-medium '>Больше не значит дороже</p>
            <p className='text-gray-600'>С ростом веса посылки цена за каждые 0.5 кг <br /> уменьшается в прогрессии.</p>
          </div>
          <div className='flex flex-col gap-[20px] items-start p-[15px] bg-gray-50 rounded-[30px] '>
            <img src={ImgCart} alt="" />
            <p className='text-[20px] font-medium '>Больше не значит дороже</p>
            <p className='text-gray-600'>С ростом веса посылки цена за каждые 0.5 кг <br /> уменьшается в прогрессии.</p>
          </div>
          <div className='flex flex-col gap-[20px] items-start p-[15px] bg-gray-50 rounded-[30px] '>
            <img src={ImgCart} alt="" />
            <p className='text-[20px] font-medium '>Больше не значит дороже</p>
            <p className='text-gray-600'>С ростом веса посылки цена за каждые 0.5 кг <br /> уменьшается в прогрессии.</p>
          </div>
        </div>
      </div>
      <div className='w-[80%] m-auto '>
        <p className='text-[20px] font-medium md:text-[40px] '>Отзывы и цитаты блогеров:</p>
       <div className='flex gap-[30px] flex-wrap '>
       <User img={ImgFon} text="NIKOLAY S" />
       <User img={ImgFon2} text="NIKOLAY S" />
       <User img={ImgFon3} text="NIKOLAY S" />
       <User img={ImgFon4} text="NIKOLAY S" />
       <button className='bg-[#01D680] text-white py-[25px] px-[70px] rounded-[70px] '>Все отзывы</button>
       </div>
      </div>
      <div className='w-[80%] m-auto mt-[70px] flex flex-col items-start gap-[20px] '>
        <p className='text-[15px] font-medium md:text-[30px] '>Ваш личный адрес в Великобритании  для покупок</p>
        <p className='text-gray-400'>С нами вы получаете целых два адреса в UK! У нас есть два склада для приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из них, отправка <br /> на который обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь, а в Манчестер идут гаджеты и <br /> всё остальное. С OkeyPost вы всегда получаете максимальную выгоду!</p>
        <p className='text-gray-400'>С нами вы получаете целых два адреса в UK! У нас есть два склада для приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из них, отправка <br /> на который обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь, а в Манчестер идут гаджеты и <br /> всё остальное. С OkeyPost вы всегда получаете максимальную выгоду!</p>
        <p className='text-gray-400'>С нами вы получаете целых два адреса в UK! У нас есть два склада для приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из них, отправка <br /> на который обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь, а в Манчестер идут гаджеты и <br /> всё остальное. С OkeyPost вы всегда получаете максимальную выгоду!</p>
        <p className='text-gray-400'>С нами вы получаете целых два адреса в UK! У нас есть два склада для приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из них, отправка <br /> на который обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь, а в Манчестер идут гаджеты и <br /> всё остальное. С OkeyPost вы всегда получаете максимальную выгоду!</p>
      </div>
      <div className='bg-[#4E82C4] w-[95%] my-[50px] p-[30px] px-[60px] rounded-[30px] flex flex-col gap-[50px] m-auto md:flex-row md:items-center justify-between md:px-[120px] '>
        <p className='text-white text-[20px] '>Подпишитеть и будьте в курсе <br /> всех скидок и акций магазинов <br /> Великобритании!</p>
        <img src={ImgPole} alt="" />
        <button className=' p-[10px] bg-[#01D37F] text-white rounded-[70px] text-[15px] py-[20px] px-[45px] '>Подписаться</button>
      </div>
    </div>
  )
}

export default Kakpokupat
