import React from 'react'
import BubblesOrange from '../assets/images/bubbles-orange.png';
import medicineOrange from '../assets/images/sashe-orange.png';
import { DescriptionShape } from './DescriptionShape';
import sashe from '../assets//images/sashe.png';
import AnimationButton from './AnimationButton';


const DescriptionTwo = () => {
    return (
        <section className='relative description-two'>
            <DescriptionShape
                imgCustomClass=" h-[55px]"
                customClass=" bg-orange border-green"
                customImage={sashe}
                imgDesc="capsule"
                koeNumber="2"
                capsule="Саше"
            />

            <div className="container px-4 mx-auto">
                <div className="flex flex-col justify-between gap-10 lg:flex-row">
                    <div className='flex flex-col w-full lg:max-w-[45%] pt-[150px] lg:py-14'>
                        <p className='mb-8 text-xl leading-[-1px] xl:text-2xl '>
                            Кишечная  <b>колика 70%</b> из всех жалоб
                            в первые полгода жизни ребенка составляют кишечные колики, они возникают в результате <b>нарушений</b> микрофлоры кишечника. </p>
                        <div className='flex items-center justify-center'>
                            <img src={BubblesOrange} className="max-w-[70%] sm:max-w-[50%] lg:max-w-full  w-full lg:w-auto" alt='intestine' />
                        </div>
                    </div>
                    {/* TODO:tilga uzgaritirish keyin */}
                    <div className='flex flex-col w-full lg:max-w-[45%] lg:mt-[200px] mt-8'>
                        <p className='mb-8 text-xl leading-snug xl:text-2xl '>
                            Применение <b>Bifido PRO</b> поможет <b>восстановить </b> нормальную микрофлору кишечника и снижает газообразования<br /><br />
                            При совместном применение с симетиконом быстро избавит от симптомов кишечной колики</p>
                        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <img src={medicineOrange} className="lg:block flex items-center lg:w-full lg:max-w-[45%] max-w-[35%]" alt='medicine' />
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

export default DescriptionTwo