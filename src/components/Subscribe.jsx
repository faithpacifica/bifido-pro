import React from 'react'
import LogoSubscribe from '../assets/images/Untitled-2.png'
import TelegramIcon from '../assets/images/telegram.png'
import EarthIcon from '../assets/images/earth-globe.png'
import { useTranslation } from 'react-i18next';

const Subscribe = () => {
    const { t } = useTranslation();

    return (
        <section className='overflow-x-hidden py-12 bg-[url(./assets/images/bg-gray.png)] bg-cover border-t-8 border-t-green'>
            <div className='flex flex-col gap-4 md:flex-row md:gap-20'>
                <h3 data-aos="fade-right" data-aos-duration="3000" className='py-2 md:px-10 px-6 bg-orange text-white rounded-r-[50px] w-[45%] md:w-[350px] text-right md:text-3xl text-xl text-nowrap'> {t('toBuy')}</h3>
                <p className='flex items-center text-2xl text-center md:text-left'> {t('developing')}</p>
            </div>
            <div className='container px-4 mx-auto'>
                <div className='flex flex-col items-center justify-between mt-5 lg:flex-row md:mt-10'>
                    <div className='mb-8 lg:mb-0'>
                        <ul>
                            <li className='flex items-center gap-2 mb-2 md:gap-5 md:mb-5'>
                                <img className='w-[35px] h-[35px] rounded-full border-[2px] border-solid border-white' src={TelegramIcon} alt="telegram-icon" />
                                <a className='text-lg md:text-2xl' href="https://t.me/arzonaptekabot" target='_blank' rel="noreferrer">https://t.me/arzonaptekabot </a>
                            </li>
                            <li className='flex items-center gap-2 md:gap-5'>
                                <img className='w-[35px] h-[35px] rounded-full border-[2px] border-solid border-transparent' src={EarthIcon} alt="earth-icon" />
                                <a className='text-lg md:text-2xl' href="https://arzonapteka.uz/ru" target='_blank' rel="noreferrer">https://arzonapteka.uz/ru </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img className=' flex mx-auto w-[50%] lg:w-[400px]' src={LogoSubscribe} alt="logo" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Subscribe
