import React from 'react'
import AnimationButton from './AnimationButton'
import Image from '../assets/images/rombik.png'

const Aboutmedicine = () => {
  return (
    <div className="border-b-8 border-b-orange h-full py-[50px] md:py-[100px] about-img">
      <h3 className='py-2 px-[20px] md:px-[45px] bg-orange text-white rounded-r-[50px]  w-[300px] font-bold leading-relaxed text-lg md:text-2xl text-center md:text-left'>
        О Бифидо ПРО:
      </h3>
      <div className="container px-4 mx-auto md:px-0">
        <div className='pt-5 space-y-4 text-base leading-relaxed text-black md:text-2xl'>
          <div className='flex items-start text-left'>
            <img src={Image} className='w-5 h-5 mt-2 mr-3' alt="rombik" />
            <p>
              <span className='font-bold'>Бифидо ПРО </span> — пробиотик на основе живых бактерий,<br/> представителей рода <span className='font-bold'>Бациллюс субтилис, лакто-</span> и <span className='font-bold'>бифидо</span>бактерий.
            </p>
          </div>
          <div className='flex items-start text-left'>
            <img src={Image} className='w-5 h-5 mt-2 mr-3' alt="rombik" />
            <p>
              Эти микроорганизмы при попадание в организм способствуют нормализации качественного и количественного состава микрофлоры кишечника.
            </p>
          </div>
          <div className='flex items-start text-left'>
            <img src={Image} className='w-5 h-5 mt-2 mr-3' alt="rombik" />
            <p>
              <span className='font-bold'>Бифидо ПРО</span> выпускается на иностранном предприятие (ИП «IGN HEALTH GROUP») по американской технологии в виде <span>капсул и саше.</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-5 space-y-4 md:flex-row md:items-start md:space-y-0 md:space-x-4">
          <AnimationButton customClass="rounded-full bg-[#0EB1BA] inline-block text-white text-xl border-2 border-[#DD9043] w-[150px] text-center">
            Капсула
          </AnimationButton>
          <AnimationButton customClass="rounded-full bg-[#0EB1BA] inline-block text-white text-xl border-2 border-[#DD9043] w-[150px] text-center">
            Саше
          </AnimationButton>
        </div>
      </div>
    </div>
  )
}

export default Aboutmedicine
