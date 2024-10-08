import React, { useEffect, useState } from 'react'
import BubblesOrangeRu from '../assets/images/bubbles-orange-rus.png';
import BubblesOrangeUz from '../assets/images/bubbles-orange-uzb.png';
import medicineOrange from '../assets/images/sashe-orange.png';
import { DescriptionShape } from './DescriptionShape';
import sashe from '../assets//images/sashe.png';
import AnimationButton from './AnimationButton';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';


const DescriptionTwo = () => {
    const { language } = useLanguage();
    const [currentImage, setCurrentImage] = useState(BubblesOrangeRu);
    const { t } = useTranslation();
    useEffect(() => {
        if (language === 'ru') {
            setCurrentImage(BubblesOrangeRu);
        } else if (language === 'uz') {
            setCurrentImage(BubblesOrangeUz);
        } else {
            setCurrentImage(BubblesOrangeRu);
        }
    }, [language]);


    return (
        <section className='overflow-x-hidden relative description-two'>
            <DescriptionShape
                imgCustomClass=" h-[55px]"
                customClass=" bg-orange border-green"
                customImage={sashe}
                imgDesc="capsule"
                koeNumber="2"
                capsule={t('sashe')}
            />

            <div className="container px-4 mx-auto">
                <div className="flex flex-col justify-between gap-10 lg:flex-row">
                    <div className='flex flex-col w-full lg:max-w-[45%] pt-[150px] lg:py-14'>
                        <p data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className='mb-8 text-xl leading-[-1px] xl:text-2xl '>
                            <span
                                dangerouslySetInnerHTML={{ __html: t('intestinalColic') }} />
                        </p>
                        <div className='flex items-center justify-center'>
                            <img data-aos="fade-up"
                                data-aos-duration="3000" src={currentImage} className="max-w-[70%] sm:max-w-[50%] lg:max-w-full  w-full lg:w-auto" alt='intestine' />
                        </div>
                    </div>
                    {/* TODO:tilga uzgaritirish keyin */}
                    <div className='flex flex-col w-full lg:max-w-[45%] lg:mt-[200px] mt-8'>
                        <p data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className='mb-8 text-xl leading-snug xl:text-2xl '>
                            <span
                                dangerouslySetInnerHTML={{ __html: t('rebuild') }} />
                        </p>

                        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <img data-aos="fade-up"
                                data-aos-duration="3000" src={medicineOrange} className="lg:block flex items-center lg:w-full lg:max-w-[45%] max-w-[35%]" alt='medicine' />
                            <div className="w-full lg:max-w-[40%] gap-6 mb-10 flex flex-col mt-6 lg:mt-0">
                                {/* TODO:linklarini quyish */}
                                <AnimationButton customClass="w-[250px] mx-auto lg:w-full rounded-full font-semibold px-2 sm:px-4 py-1 bg-orange hover:bg-opacity-75 transition duration-300 inline-flex items-center justify-center text-white border-2 border-green text-lg">
                                    <a href="/" target="_blank">  {t('howToTake')}</a>
                                </AnimationButton>
                                <AnimationButton customClass="w-[250px] mx-auto lg:w-full rounded-full font-semibold px-2 sm:px-4 py-1 bg-green hover:bg-opacity-75 transition duration-300 inline-flex items-center justify-center text-white border-2 border-orange text-lg">
                                    <a href="/" target="_blank">  {t('instruction')}</a>
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