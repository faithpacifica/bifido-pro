import React from 'react'

export const DescriptionShape = ({ customClass, customImage, imgDesc, koeNumber, capsule, imgCustomClass }) => {
  return (
    <div className={`border-b-[7px] border-l-[7px] rounded-bl-[70px] pr-[10%] pl-[4%] absolute top-0 right-0 ${customClass}`}>
      <div className='flex items-center justify-center py-5'>
        <img className={` ${imgCustomClass}`} src={customImage} alt={imgDesc} />

        <div className='w-[2px] h-[70px] mx-8 bg-white'></div>

        <div className=' flex flex-col items-center justify-center w-20 h-20  text-white border-[3px] border-white rounded-full bg-gray'>
          <span className='text-2xl font-bold leading-none'>{koeNumber} </span>
          <span className='leading-none'>млрд <br /> КОЕ</span>
        </div>

        <div className='mx-8 flex flex-col items-center justify-center w-20 h-20  text-white border-[3px] border-white rounded-full bg-gray'>
          <span className='text-3xl font-bold leading-none'>10</span>
          <span className='leading-none'>{capsule}</span>
        </div>

        <div className='flex flex-col items-center justify-center w-20 h-20  text-white border-[3px] border-white rounded-full bg-gray'>
          <span className='flex text-3xl font-bold leading-none'>6</span>
          <span className='flex leading-none'>штамма</span>
        </div>
      </div>
    </div>
  )
}
