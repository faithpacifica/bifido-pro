import React from 'react'
import Image1 from "../assets/images/pic2-removebg-preview.png"
import Image2 from "../assets/images/medicine.png"
import Image3 from "../assets/images/Бифидо про КАПС. 3д-1.png"
import AnimationButton from './AnimationButton'

const AboutUs = () => {
   
  return (
    <div className="h-full py-5">
           <h3 className='py-2 px-6 bg-orange  text-white rounded-r-[50px] w-[350px]'>Откройте "Мир - семейного прибиотика</h3>
        <div className='flex justify-between'>      
                <div className='mx-[50px] my-[50px] w-[550px] text-black'>
                    <p>Пробиотик на основе живых бактерий</p>
                    <p>Нормализует микрофлору кишечника</p>
                    <p>Уничтожает рост и размножение патогенных бактерий</p>
                    <p>Повышает сопротивляемость организма к кишечным и 
                        дыхательным инфекциям</p>
                    <p>Улучшает усвояемость питательных веществ</p>
                    <AnimationButton customClass=" rounded-full p-3 bg-[#0EB1BA] mt-5 inline-block text-white  border-2 border-[#DD9043]">О Бифидо ПРО</AnimationButton>
                </div>
          
            <div>
             <img src={Image1}  width={600} />
            </div>
            <div>
                <img src={Image3}  width={400} height={400} alt="" />
                <img src={Image2}  width={400} height={400} alt="" className='mb-[65px]' />
                <AnimationButton customClass=" rounded-full p-3 bg-[#0EB1BA] mt-5 inline-block text-white  border-2 border-[#DD9043]">ИНСТРУКСИЯ</AnimationButton>
            </div>
        </div>
       
       


    </div>
  )
}

export default AboutUs