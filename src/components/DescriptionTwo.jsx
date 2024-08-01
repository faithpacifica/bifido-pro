import React from 'react'
import BubblesOrange from '../assets/images/bubbles-orange.png';
import medicineOrange from '../assets/images/sashe-orange.png';
const DescriptionTwo = () => {

    return (
        <section className=' description-two'>
            <div className="container">
                <div className="flex desc-one-inner">
                    <div className=' max-w-[50%] w-full py-12'>
                        <p>Кишечная колика 70% из всех жалоб
                            в первые полгода жизни ребенка составляют кишечные колики, они возникают в результате нарушений микрофлоры кишечника. </p>
                        <div>
                            <img src={BubblesOrange} className="" alt='intestine' />
                        </div>
                    </div>
                    <div className=' max-w-[50%] w-full'>
                        {/* oranjeviy shakl */}
                        {/* TODO:tilga uzgaritirish keyin */}
                        <p>Применение Bifido PRO поможет восстановить нормальную микрофлору кишечника и снижает газообразования
                            При совместном применение с симетиконом быстро избавит от симптомов кишечной колики</p>
                        <div className="flex right-bottom">
                            <img src={medicineOrange} className="" alt='medicine' />
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

export default DescriptionTwo