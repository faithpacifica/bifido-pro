import React from 'react';
import { useTranslation } from 'react-i18next';
import medicineGreen from '../assets/images/sashe-green.png'
import medicineOrange from '../assets/images/sashe-orange.png'
export const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className=' hero-bg'>
            <div className="container flex items-center justify-start ">
                <div className="flex flex-col hero-left pt-16 max-w-[50%] w-full">
                    <h1 className='mb-16 text-5xl '>{t('heroTitle')}</h1>
                    {/* TODO:buttonni chuzishh */}
                    <button className='inline-flex px-4 py-3 text-2xl text-white rounded-full w-fit align-left bg-orange' type="button">
                        {t('heroButton')}
                    </button>

                    <div className="flex mt-10 hero-image">
                        <img src={medicineGreen} className="" alt='medicine' />
                        <img src={medicineOrange} className="" alt='medicine' />
                    </div>
                </div>
            </div>
            <div className="hero-right max-w-[50%] w-full"></div>

        </section >
    )
}
