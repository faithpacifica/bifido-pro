
import React from 'react'
import { useTranslation } from 'react-i18next';
import Image2 from "../assets/images/sashe-green.png"
import Image3 from "../assets/images/sashe-orange.png"
import Image from '../assets/images/rombik.png'
import Image1 from '../assets/images/pic2-removebg-preview.png'
import AnimationButton from './AnimationButton'

const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <section className="border-b-8 border-b-green h-full py-[40px] md:pt-[80px] md:pb-[60px] about-bg ">
      <h3 className='py-2 px-3 md:px-5 md:px-[45px] bg-orange text-white rounded-r-[50px] w-[80%] sm:w-[70%] md:w-[52%] lg:w-[450px] xl:w-[30%] 2xl:w-[24%] font-bold leading-relaxed text-lg md:text-2xl text-center md:text-left'>
      {t('aboutTitle')}
      </h3>
      <div className="container px-4 mx-auto md:mt-4 ">
        <div className='flex flex-col items-center justify-around space-y-8 lg:justify-between md:flex-row md:items-start md:space-y-0'>
          <div className=' mt-8 text-black font-bold max-w-full md:max-w-[380px] leading-normal text-base md:text-xl  md:mt-5'>
            <div  data-aos="fade-left" data-aos-duration="1500"  className='flex items-start mb-2 text-left'>
              <img src={Image} className='w-5 h-5 mr-3 md:mt-2' alt="rombik" />
              <p> {t('aboutText1')}</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1100"  className='flex items-start mb-2 text-left'>
              <img src={Image} className='w-5 h-5 mr-3 md:mt-2' alt="rombik" />
              <p>{t('aboutText2')}</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1300"  className='flex items-start mb-2 text-left'>
              <img src={Image} className='w-5 h-5 mr-3 md:mt-2' alt="rombik" />
              <p>{t('aboutText3')}</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1400"  className='flex items-start mb-2 text-left'>
              <img src={Image} className='w-5 h-5 mr-3 md:mt-2' alt="rombik" />
              <p>{t('aboutText4')}</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1500"  className='flex items-start text-left'>
              <img src={Image} className='w-5 h-5 mr-3 md:mt-2' alt="rombik" />
              <p>{t('aboutText5')}</p>
            </div>
            <AnimationButton customClass="inline-flex items-center hover:bg-opacity-75 transition duration-300 text-lg rounded-full text-center px-3 py-2 bg-[#0EB1BA] mt-[54px] inline-block text-white font-normal border-2 border-[#DD9043]">
             {/* TODO:link */}
              <a href="/"  target="_blank">{t('aboutButton')}</a>
            </AnimationButton>
          </div>
          <div >
            <img src={Image1} className=' w-auto lg:w-[500px] md:mt-[-100px] lg:mt-[-200px] xl:mt-[-300px] hidden lg:block' alt="family" />
          </div>
          <div className='mr-0  flex flex-col items-center space-y-8 md:items-end mr-[42px] mt-[-33px]'>
            <img  data-aos="zoom-in" data-aos-duration="1100" src={Image2} className=' w-[50%] sm:w-[40%] md:w-[200px] mb-[10px]' alt="medicine" />
            <img  data-aos="zoom-in" data-aos-duration="1100"  src={Image3} className=' w-[50%] sm:w-[40%] md:w-[200px]' alt="Бифидо про КАПС." />
            
            <AnimationButton customClass=" hover:bg-opacity-75 transition duration-300 w-full text-lg rounded-full text-center py-1  px-3 bg-[#0EB1BA] inline-block text-white font-normal capitalise border-2 border-[#DD9043]">
             {/* TODO:link */}
            <a href="/"  target="_blank"> {t('instruction')} </a>
            </AnimationButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs