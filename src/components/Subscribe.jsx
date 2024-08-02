import React from 'react'
import LogoSubscribe from '../assets/images/Untitled-2.png'
import TelegramIcon from '../assets/images/telegram.png'
import EarthIcon from '../assets/images/earth-globe.png'

const Subscribe = () => {
    return (
        <section className='py-12 bg-[url(./assets/images/bg-gray.png)] border-t-8 border-t-green'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-20'>
                <h3 className='py-2 md:px-10 px-6 bg-orange text-white rounded-r-[50px] w-[45%] md:w-[350px] text-right md:text-3xl text-xl text-nowrap'>Где купить?</h3>
                <p className='text-xl text-center md:text-left'>Страница на стадии разработки.</p>
            </div>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col lg:flex-row justify-between items-center md:mt-10 mt-5'>
                    <div className='mb-8 lg:mb-0'>
                        <ul>
                            <li className='flex items-center md:gap-5 gap-2 md:mb-5 mb-2'>
                                <img className='w-[35px] h-[35px] rounded-full border-[2px] border-solid border-white' src={TelegramIcon} alt="telegram-icon" />
                                <a className='md:text-2xl text-lg' href="https://t.me/arzonaptekabot" target='_blank' rel="noreferrer">https://t.me/arzonaptekabot </a>
                            </li>
                            <li className='flex items-center md:gap-5 gap-2'>
                                <img className='w-[35px] h-[35px] rounded-full border-[2px] border-solid border-transparent' src={EarthIcon} alt="earth-icon" />
                                <a className='md:text-2xl text-lg' href="https://arzonapteka.uz/ru" target='_blank' rel="noreferrer">https://arzonapteka.uz/ru </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img className='w-full lg:w-[400px]' src={LogoSubscribe} alt="logo" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Subscribe
