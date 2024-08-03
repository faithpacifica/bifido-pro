// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import medicineGreen from '../assets/images/sashe-green.png'
// import medicineOrange from '../assets/images/sashe-orange.png'
// export const Hero = () => {
//     const { t } = useTranslation();
//     return (
//         <section className='border-t-8 border-b-8 border-b-green border-t-gray hero-bg'>
//             <div className="container flex items-center justify-start ">
//                 <div className="flex flex-col hero-left pt-16 max-w-[50%] w-full">
//                     <h1 className='mb-16 text-5xl '>{t('heroTitle')}</h1>
                  
//                     <button className='inline-flex px-4 py-3 text-2xl text-white rounded-full w-fit align-left bg-orange' type="button">
//                         {t('heroButton')}
//                     </button>

//                     <div className="flex justify-end  gap-10 mt-16 hero-image max-w-[70%]">
//                         <img src={medicineGreen} className="max-w-[40%]" alt='medicine' />
//                         <img src={medicineOrange} className="max-w-[40%]" alt='medicine' />
//                     </div>
//                 </div>
//             </div>
//             <div className="hero-right max-w-[50%] w-full"></div>

//         </section >
//     )
// }


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
                    <h1 className='mb-8 text-4xl lg:mb-16 lg:text-5xl'>{t('heroTitle')}</h1>
                    <button className='flex flex-wrap px-6 py-1 mb-8 text-sm text-white rounded-full lg:text-lg lg:py-3 w-[310px]  md:w-[310px] lg:w-[400px] lg:text-2xl bg-orange lg:mb-0' type="button">
                        {t('heroButton')}
                    </button>
                    <div className="flex justify-center gap-4 mt-8 lg:justify-end lg:gap-10 lg:mt-16">
                        <img src={medicineGreen} className="w-1/3 lg:w-auto max-w-[20%] xl:max-w-[40%]" alt='medicine' />
                        <img src={medicineOrange} className="w-1/3 lg:w-auto max-w-[20%] xl:max-w-[40%]" alt='medicine' />
                    </div>
                </div>
                <div className="lg:w-1/2 w-full lg:max-w-[50%] lg:flex lg:items-center">
                    {/* Additional content can be placed here */}
                </div>
            </div>
        </section>
    );
};