import React from 'react'
import LogoSubscribe from '../assets/images/Untitled-2.png'

const Subscribe = () => {
    return (
        <section className='py-12 bg-[url(./assets/images/bg-gray.png)]'>
            <div className='flex items-center gap-20'>
                <h3 className='py-2 pr-10 bg-orange  text-white rounded-r-[50px] w-[350px] text-right text-3xl'>Где купить?</h3>
                <p className='text-xl'>Страница на стадии разработки.</p>
            </div>
            <div>
                <div></div>
                <div>
                    <img className='w-[400px]' src={LogoSubscribe} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Subscribe