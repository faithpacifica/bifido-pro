import React from 'react';
import medicineGreen from '../assets/images/sashe-green.png';
import medicineOrange from '../assets/images/sashe-orange.png';
import AnimationButton from './AnimationButton';

const Indications = () => {
    return (
        <section className='py-12 md:bg-[url(./assets/images/bg-gray.png)] bg-cover md:bg-inherit bg-[#dddee0] border-t-8 border-t-orange'>
            <h3 data-aos="fade-right" data-aos-duration="3000" className='py-2 md:px-10 px-8 bg-orange text-white rounded-r-[50px] w-[52%] md:w-[350px] text-right md:text-3xl text-xl text-nowrap'>Как принимать</h3>
            <div className='container px-4 mx-auto'>
                <div className='flex flex-col justify-between gap-10 lg:flex-row lg:gap-20'>
                    <div className='pl-0 lg:pl-10 mt-10 !text-center basis-full lg:basis-[28%]'>
                        <img data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className='lg:w-full w-[200px] sm:w-[50%] mb-6 lg:mx-0 mx-auto' src={medicineGreen} alt="immuno-medicine" />
                        <img data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className='lg:w-full w-[200px]  sm:w-[50%] mb-6 lg:mx-0 mx-auto' src={medicineOrange} alt="babies-medicine" />
                        <AnimationButton customClass="uppercase rounded-full  font-semibold px-4 bg-orange mt-8 inline-block text-white border-2 border-green text-lg">Разрешен с рождения</AnimationButton>
                    </div>
                    <div className='basis-full lg:basis-[70%]'>
                        <h4 className='mb-2 text-3xl font-semibold text-gray'>Bifido PRO <span className='!text-2xl'>капсула:</span></h4>
                        <div className='mb-10 overflow-auto '>
                            <table className='w-full'>
                                <thead>
                                    <tr>
                                        <th className='bg-green border-[2px] border-solid border-gray text-white text-xl whitespace-nowrap'>Возраст</th>
                                        <th className='bg-green border-[2px] border-solid border-gray text-white text-xl whitespace-nowrap'>Дозировка</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-lg'>
                                        <td className='text-lg bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>Взрослым и детям старше 12 лет:</td>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>по 1 капсуле 2 раза в день</td>
                                    </tr>
                                    <tr className='text-lg'>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>Детям от 6  до 12 лет:</td>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>по 1 капсуле 1 раз в день</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className='w-full px-4 py-2 mt-3 leading-4 text-white bg-gray md:py-0 md:leading-10'>Капсулы - внутрь, до еды. Рекомендуемый курс приёма - 10 дней</p>
                        </div>
                        <h4 className='mb-2 text-3xl font-semibold text-gray'>Bifido PRO <span className='!text-2xl'>саше:</span></h4>
                        <div className='overflow-auto '>
                            <table className='w-full'>
                                <thead>
                                    <tr>
                                        <th className='bg-orange border-[2px] border-solid border-gray text-white text-xl whitespace-nowrap'>Возраст</th>
                                        <th className='bg-orange border-[2px] border-solid border-gray text-white text-xl whitespace-nowrap'>Дозировка</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-lg'>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>С рождения до 6 месяцев:</td>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>по 1 саше 1 раз в день</td>
                                    </tr>
                                    <tr className='text-lg'>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>От 6 месяцев до 6 лет:</td>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2 whitespace-nowrap'>по 1 саше 2 раз в день</td>
                                    </tr>
                                    <tr className='text-lg'>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2'>От 6 лет и старше:</td>
                                        <td className='bg-transparent border-[2px] border-solid border-gray pl-2'>по 1 саше 3 раз в день</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className='w-full px-4 py-4 mt-3 leading-4 text-white bg-gray md:leading-6'>Саше пакетик - внутрь, во время еды, предварительно растворив содержимое в грудном молоке, молочной смеси или охлажденной до комнатной температуры кипяченной воде.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Indications;
