
import React from 'react'
import Image2 from "../assets/images/sashe-green.png"
import Image3 from "../assets/images/sashe-orange.png"
import Image from '../assets/images/rombik.png'
import Image1 from '../assets/images/pic2-removebg-preview.png'
import AnimationButton from './AnimationButton'

const AboutUs = () => {
  return (
    <div className="h-full py-[40px] md:py-[80px] about-bg ">
      <h3 className='py-2 px-[20px] md:px-[45px] bg-orange text-white rounded-r-[50px] w-full md:w-[450px] font-bold leading-relaxed text-lg md:text-2xl text-center md:text-left'>
        Откройте "Мир - семейного прибиотика
      </h3>
      <div className="container px-4 mx-auto md:px-0">
        <div className='flex flex-col items-center justify-between space-y-8 md:flex-row md:items-start md:space-y-0'>
          <div className='text-black font-bold max-w-full md:max-w-[380px] leading-normal text-base md:text-xl  md:mt-5'>
            <div className='flex items-start text-left'>
              <img src={Image} className='w-5 h-5 mt-2 mr-3' alt="rombik" />
              <p>Пробиотик на основе живых бактерий</p>
            </div>
            <div className='flex items-start text-left'>
              <img src={Image} className='w-5 h-5 mt-2 mr-3' alt="rombik" />
              <p>Нормализует микрофлору кишечника</p>
            </div>
            <div className='flex items-start text-left'>
              <img src={Image} className='w-5 h-5 mt-2 mr-3' alt="rombik" />
              <p>Уничтожает рост и размножение патогенных бактерий</p>
            </div>
            <div className='flex items-start text-left'>
              <img src={Image} className='w-5 h-5 mt-2 mr-3' alt="rombik" />
              <p>Повышает сопротивляемость организма к кишечным и дыхательным инфекциям</p>
            </div>
            <div className='flex items-start text-left'>
              <img src={Image} className='w-5 h-5 mt-2 mr-3' alt="rombik" />
              <p>Улучшает усвояемость питательных веществ</p>
            </div>
            <AnimationButton customClass=" rounded-full text-center px-3 bg-[#0EB1BA] mt-[54px] inline-block text-white font-normal border-2 border-[#DD9043]">
              О Бифидо ПРО
            </AnimationButton>
          </div>
          <div >
            <img src={Image1} className='w-[500px] mt-[-282px]' alt="family" />
          </div>
          <div className='flex flex-col items-center space-y-8 md:items-end mr-[42px] mt-[-33px]'>
            <img src={Image3} className='w-full md:w-[200px]' alt="Бифидо про КАПС." />
            <img src={Image2} className='w-full md:w-[200px] mb-[60px]' alt="medicine" />
            <AnimationButton customClass="rounded-full text-center px-3 bg-[#0EB1BA] inline-block text-white font-normal border-2 border-[#DD9043]">
              ИНСТРУКЦИЯ
            </AnimationButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs