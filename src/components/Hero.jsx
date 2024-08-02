import React from 'react';
import { useTranslation } from 'react-i18next';
import medicineGreen from '../assets/images/sashe-green.png'
import medicineOrange from '../assets/images/sashe-orange.png'
export const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className='border-t-8 border-b-8 border-b-green border-t-gray hero-bg'>
            <div className="container flex items-center justify-start ">
                <div className="flex flex-col hero-left pt-16 max-w-[50%] w-full">
                    <h1 className='mb-16 text-5xl '>{t('heroTitle')}</h1>
                  
                    <button className='inline-flex px-4 py-3 text-2xl text-white rounded-full w-fit align-left bg-orange' type="button">
                        {t('heroButton')}
                    </button>

                    <div className="flex justify-end  gap-10 mt-16 hero-image max-w-[70%]">
                        <img src={medicineGreen} className="max-w-[40%]" alt='medicine' />
                        <img src={medicineOrange} className="max-w-[40%]" alt='medicine' />
                    </div>
                </div>
            </div>
            <div className="hero-right max-w-[50%] w-full"></div>

        </section >
    )
}
