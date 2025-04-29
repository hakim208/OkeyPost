import React from 'react'

const Cart = ({text,img}) => {
    return (
        <div>
            <div className='flex items-center flex-col mt-[50px] gap-[30px] md:flex-row md:gap-[70px] '>
                <img className='w-[250px]' src={img} alt="" />
                <div>
                    <div className='flex items-center gap-[40px] '>
                        <p className='text-[70px] font-extralight text-[#01D380]'>{text}</p>
                        <p className=' font-medium text-[13px] border-l-1 pl-[40px] mdd:text-[20px]  '>Получаем адрес для покупок <br /> в магазинах Великобритании </p>
                    </div>
                    <p className='text-[13px] md:text-[14px] text-gray-600 '>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.</p>
                </div>
            </div>
        </div>
    )
}

export default Cart
