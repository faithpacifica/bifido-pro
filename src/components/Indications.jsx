import React from 'react';
import { useTranslation } from 'react-i18next';
import medicineGreen from '../assets/images/sashe-green.png';
import medicineOrange from '../assets/images/sashe-orange.png';
import AnimationButton from './AnimationButton';

const Indications = () => {
    const { t } = useTranslation();
    return (
        <section className='overflow-x-hidden py-12 md:bg-[url(./assets/images/bg-gray.png)] bg-cover md:bg-inherit bg-[#dddee0] border-t-8 border-t-orange'>
            <h3 data-aos="fade-right" data-aos-duration="3000" className='py-2 md:px-10 px-8 bg-orange text-white rounded-r-[50px] w-[52%] md:w-[350px] text-right md:text-3xl text-xl text-nowrap'> {t('howToDrink')}</h3>
            <div className='container px-4 mx-auto'>
                <div className='flex flex-col justify-between gap-10 lg:flex-row lg:gap-20'>
                    <div className='pl-0 lg:pl-10 mt-10 !text-center basis-full lg:basis-[28%]'>
                        <img data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className='lg:w-full w-[200px] sm:w-[50%] mb-6 lg:mx-0 mx-auto' src={medicineGreen} alt="immuno-medicine" />
                        <img data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className='lg:w-full w-[200px]  sm:w-[50%] mb-6 lg:mx-0 mx-auto' src={medicineOrange} alt="babies-medicine" />
                    </div>

                    <div className='basis-full lg:basis-[70%]'>
                        <h4 className='mb-2 text-3xl font-semibold text-gray'>Bifido PRO <span className='!text-2xl'>{t('kapsula')}:</span></h4>
                        <div className='mb-10 overflow-auto '>
                            <table className='w-full'>
                                <thead>
                                    <tr>
                                        <th className='bg-green border-[2px] border-solid border-gray text-white text-xl whitespace-nowrap'>{t('age')}</th>
                                        <th className='bg-green border-[2px] border-solid border-gray text-white text-xl whitespace-nowrap'>{t('doze')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-lg'>
                                        <td className='text-lg bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>{t('td11')}:</td>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>{t('td12')}</td>
                                    </tr>
                                    <tr className='text-lg'>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>{t('td21')}:</td>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>{t('td22')}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className='w-full px-4 py-2 mt-3 leading-4 text-white bg-gray md:py-0 md:leading-10'>
                                {t('recommend')}</p>
                        </div>
                        <h4 className='mb-2 text-3xl font-semibold text-gray'>Bifido PRO <span className='!text-2xl'>{t('sashe')}:</span></h4>
                        <div className='overflow-auto '>
                            <table className='w-full'>
                                <thead>
                                    <tr>
                                        <th className='bg-orange border-[2px] border-solid border-gray text-white text-xl whitespace-nowrap'>{t('age')}</th>
                                        <th className='bg-orange border-[2px] border-solid border-gray text-white text-xl whitespace-nowrap'>{t('doze')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-lg'>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>{t('td31')}:</td>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>{t('td32')}</td>
                                    </tr>
                                    <tr className='text-lg'>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>{t('td41')}:</td>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>{t('td42')}</td>
                                    </tr>
                                    <tr className='text-lg'>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2'>{t('td51')}:</td>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2'>{t('td52')}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className='w-full px-4 py-4 mt-3 leading-4 text-white bg-gray md:leading-6'>{t('sasheRecommend')}</p>
                        </div>
                    </div>
                </div>
                <AnimationButton customClass="uppercase rounded-full  font-semibold px-4 bg-orange mt-6 inline-block text-white border-2 border-green text-lg ">
                    <span className='flex items-center justify-center py-3 leading-none' dangerouslySetInnerHTML={{ __html: t('fromBirth') }} />
                </AnimationButton>
            </div>
        </section>
    );
}

export default Indications;
