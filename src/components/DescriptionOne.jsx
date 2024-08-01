import React from 'react'
import BubblesGreen from '../assets/images/bubbles-green.png';
import medicineGreen from '../assets/images/sashe-green.png';

const DescriptionOne = () => {
    return (
      <section className='description-one'>
          <div className="container">
              <div className="flex desc-one-inner">
                        <div className=' max-w-[50%] w-full py-12 '>
                            <p>Дисбактериоз - нарушение нормальной микрофлоры </p>
                            <div>
                                <img src={BubblesGreen} className="" alt='intestine and bubbles' />
                            </div>
                        </div>
                        <div className=' max-w-[50%] w-full'>
                            {/* yashil shakl */}
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