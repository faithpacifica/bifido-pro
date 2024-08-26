import React from 'react'
import { useTranslation } from 'react-i18next';
import AnimationButton from './AnimationButton'
import Image from '../assets/images/rombik.png'

const Aboutmedicine = () => {
  const { t } = useTranslation();

  return (
    <section className="overflow-x-hidden border-b-8 border-b-orange h-full py-[50px] md:py-[100px] about-img">
      <h3 className='py-2 px-[20px] md:px-[45px] bg-orange text-white rounded-r-[50px]  w-[300px] font-bold leading-relaxed text-lg md:text-2xl text-center md:text-left'>
        {t('aboutBifido')} :
      </h3>
      <div className="container px-4 mx-auto ">
        <div className='pt-5 space-y-4 text-base leading-relaxed text-black md:text-xl lg:text-2xl'>
          <div className='flex items-start text-left'>
            <img src={Image} className='w-5 h-5 mt-2 mr-3' alt="rombik" />
            <p data-aos="fade-left" data-aos-duration="1100">
              <strong> {t('bifidopro')}  </strong>  —
              <span
                dangerouslySetInnerHTML={{ __html: t('bifidoText1') }} />
            </p>

          </div>
          <div className='flex items-start text-left'>
            <img src={Image} className='w-5 h-5 mt-2 mr-3' alt="rombik" />
            <p data-aos="fade-left" data-aos-duration="1100" >
              {t('bifidoText2')}
            </p>
          </div>
          <div className='flex items-start text-left'>
            <img src={Image} className='w-5 h-5 mt-2 mr-3' alt="rombik" />
            <p data-aos="fade-left" data-aos-duration="1100" >
              <strong>{t('bifidopro')}  </strong>
              <span dangerouslySetInnerHTML={{ __html: t('bifidoText3') }} />
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 space-y-4 md:flex-row md:items-start md:space-y-0 md:space-x-4">
          <AnimationButton customClass="rounded-full bg-[#0EB1BA] inline-block text-white text-xl border-2 border-[#DD9043] w-[150px] text-center">
            {t('capsule')}
          </AnimationButton>
          <AnimationButton customClass="rounded-full bg-[#0EB1BA] inline-block text-white text-xl border-2 border-[#DD9043] w-[150px] text-center">
            {t('sashe')}
          </AnimationButton>
        </div>
      </div>
    </section>
  )
}

export default Aboutmedicine
