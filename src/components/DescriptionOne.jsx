import React from 'react'
import BubblesGreen from '../assets/images/bubbles-green-rus.png';
import medicineGreen from '../assets/images/sashe-green.png';
import { DescriptionShape } from './DescriptionShape';
import capsula from '../assets/images/capsula.png';
import AnimationButton from './AnimationButton';


const DescriptionOne = () => {
    return (
        <section className='relative border-b-8 border-b-green description-one'>
            <DescriptionShape
                imgCustomClass="w-[50px] h-[70px]"
                customClass=" bg-green border-orange"
                customImage={capsula}
                imgDesc="capsule"
                koeNumber="100"
                capsule="капсула"
            />

            <div className="container px-4 mx-auto">
                <div className="flex flex-col justify-between gap-10 lg:flex-row">
                    <div className='flex flex-col w-full lg:max-w-[45%] pt-[150px] lg:py-14'>
                        <p className='mb-8 text-xl leading-tight xl:text-3xl xl:leading-normal'>
                            <b>Дисбактериоз</b> - нарушение нормальной микрофлоры <br className='hidden lg:block' />кишечника
                        </p>
                        <div className='flex items-center justify-center'>
                            <img data-aos="zoom-in" data-aos-duration="1600" src={BubblesGreen} className=" max-w-[70%] sm:max-w-[50%] lg:max-w-full  w-full lg:w-auto" alt='intestine and bubbles' />
                        </div>
                    </div>

                    <div className='flex flex-col w-full lg:max-w-[45%] lg:mt-[200px] mt-8'>
                        <p className='mb-8 text-xl leading-tight xl:text-3xl xl:leading-normal'>
                            Применение <b>Bifido PRO</b> поможет <b>восстановить</b> нормальную микрофлору кишечника и <b>избавит</b> от симптомов дисбактериоза
                        </p>

                        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <img data-aos="zoom-out" data-aos-duration="1600" src={medicineGreen} className="lg:block flex items-center lg:w-full lg:max-w-[45%] max-w-[35%]" alt='medicine' />
                            <div className="w-full lg:max-w-[40%] gap-6 mb-10 flex flex-col mt-6 lg:mt-0">
                                {/* TODO:linklarini quyish */}
                                <AnimationButton customClass="w-[250px] mx-auto lg:w-full rounded-full font-semibold px-2 sm:px-4 py-1 bg-orange hover:bg-opacity-75 transition duration-300 inline-flex items-center justify-center text-white border-2 border-green text-lg">
                                    <a href="/" target="_blank">Как принимать</a>
                                </AnimationButton>
                                <AnimationButton customClass="w-[250px] mx-auto lg:w-full rounded-full font-semibold px-2 sm:px-4 py-1 bg-green hover:bg-opacity-75 transition duration-300 inline-flex items-center justify-center text-white border-2 border-orange text-lg">
                                    <a href="/" target="_blank">Инструкция</a>
                                </AnimationButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DescriptionOne