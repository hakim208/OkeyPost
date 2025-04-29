import React from 'react'

const Menu = ({ img, text }) => {
    return (
        <div>
            <div className='flex flex-col items-center gap-[30px] md:flex-row '>
                <img className='w-[280px]' src={img} alt="" />
                <div className='flex flex-col gap-[12px] items-start '>
                    <p className='font-medium text-[20px] '>{text}</p>
                    <p className='text-gray-600'>цены от <span className='text-[20px] font-medium text-black '>£7.99 (3365₽)</span> разделе: <br />
                        мужские вещи: <span className='text-[#00D17E] font-medium  '>CLEARANCE</span> <br />
                        женские вещи: <span className='text-[#00D17E] font-medium  '>CLEARANCE</span>
                    </p>
                    <p>качественные детские вещи <br />
                        на <span className='text-[#00D17E] font-medium  '>Abercrombie kids</span></p>
                    <p className='text-[#00D17E] font-medium  '>Только выкуп с оператором →</p>
                </div>
            </div>
        </div>
    )
}

export default Menu
