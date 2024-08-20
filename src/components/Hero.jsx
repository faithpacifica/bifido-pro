

import React from 'react';
import { useTranslation } from 'react-i18next';
import medicineGreen from '../assets/images/sashe-green.png';
import medicineOrange from '../assets/images/sashe-orange.png';

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className='border-t-8 border-b-8 border-b-green border-t-gray hero-bg'>
            <div className="container flex flex-col items-center justify-between py-8 mx-auto lg:flex-row lg:py-16">
                <div className="flex flex-col lg:w-1/2 w-full lg:max-w-[50%] px-4 lg:px-0">
                    <h1 data-aos="fade-right" data-aos-duration="1500" className='mb-8 text-4xl lg:mb-16 lg:text-5xl'>{t('heroTitle')}</h1>
                    <button className='hover-none flex flex-wrap px-6 leading-none py-3 mb-8  text-white rounded-full text-lg lg:py-3 w-[320px]  md:w-[310px] lg:w-[420px] lg:text-2xl bg-orange lg:mb-0' type="button">
                        {t('heroButton')}
                    </button>
                    <div className="flex justify-start gap-4 mt-8 xl:justify-end lg:gap-10 lg:mt-16">
                        <img src={medicineGreen} data-aos="fade-right" data-aos-duration="1500" className="w-1/3 lg:w-auto max-w-[40%] sm:max-w-[40%] xl:max-w-[40%]" alt='medicine' />
                        <img src={medicineOrange} data-aos="fade-right" data-aos-duration="1500" className="w-1/3 lg:w-auto max-w-[40%] sm:max-w-[40%] xl:max-w-[40%]" alt='medicine' />
                    </div>
                </div>
                <div className="lg:w-1/2 w-full lg:max-w-[50%] lg:flex lg:items-center">
                    {/* Additional content can be placed here */}
                </div>
            </div>
        </section>
    );
};