import React from 'react'
import LogoSubscribe from '../assets/images/Untitled-2.png'
import TelegramIcon from '../assets/images/telegram.png'
import EarthIcon from '../assets/images/earth-globe.png'

const Subscribe = () => {
    return (
        <section className='py-12 bg-[url(./assets/images/bg-gray.png)] border-t-8 border-t-green'>
            <div className='flex items-center gap-20'>
                <h3 className='py-2 pr-10 bg-orange  text-white rounded-r-[50px] w-[350px] text-right text-3xl'>Где купить?</h3>
                <p className='text-xl'>Страница на стадии разработки.</p>
            </div>
            <div className='container'>
                <div className=' flex justify-between items-center mt-10'>
                    <div>
                        <ul>
                            <li className='flex items-center gap-5 mb-5'>
                                <img className='w-[35px] h-[35px] rounded-full border-[2px] border-solid border-white' src={TelegramIcon} alt="telegram-icon" />
                                <a className='text-2xl' href="https://t.me/arzonaptekabot" target='_blank' rel="noreferrer">https://t.me/arzonaptekabot </a>
                            </li>
                            <li className='flex items-center gap-5'>
                                <img className='w-[35px] h-[35px] rounded-full border-[2px] border-solid border-transparent' src={EarthIcon} alt="earth-icon" />
                                <a className='text-2xl' href="https://arzonapteka.uz/ru" target=' _blank' rel="noreferrer">https://arzonapteka.uz/ru </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img className='w-[400px]' src={LogoSubscribe} alt="logo" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Subscribe