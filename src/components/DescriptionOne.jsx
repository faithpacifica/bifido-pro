import React from 'react'
import BubblesGreen from '../assets/images/bubbles-green.png';
import medicineGreen from '../assets/images/sashe-green.png';
import { DescriptionShape } from './DescriptionShape';
import capsula from '../assets/images/capsula.png';

const DescriptionOne = () => {
    return (
        <section className='relative description-one'>
                           
                <DescriptionShape
                    className=""
                    imgCustomClass="w-[50px] h-[70px]"
                    customClass=" bg-green border-orange"
                    customImage={capsula}
                    imgDesc="capsule"
                    koeNumber="100"
                    capsule="капсула"
                />
                
                <div className="container">
                    <div className="flex desc-one-inner">
                        <div className=' max-w-[50%] w-full py-12 '>
                            <p>Дисбактериоз - нарушение нормальной микрофлоры </p>
                            <div>
                                <img src={BubblesGreen} className="" alt='intestine and bubbles' />
                            </div>
                        </div>
                        <div className=' max-w-[50%] w-full'>

                            <p>Применение Bifido PRO поможет восстановить нормальную микрофлору кишечника и избавит от симптомов дисбактериоза</p>
                            <div className="flex right-bottom">
                                <img src={medicineGreen} className="" alt='medicine' />
                                <div className="flex flex-col buttons">
                                    {/* 2 ta button */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
        </section>
    )
}

export default DescriptionOne