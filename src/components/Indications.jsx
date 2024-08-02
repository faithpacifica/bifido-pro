import React from 'react'
import medicineGreen from '../assets/images/sashe-green.png';
import medicineOrange from '../assets/images/sashe-orange.png'
import AnimationButton from './AnimationButton';

const Indications = () => {
    return (
        <section className='py-12'>
            <h3 className='py-2 pr-10 bg-orange  text-white rounded-r-[50px] w-[350px] text-right'>Как принимать</h3>
            <div className='container'>
                <div className='flex'>
                    <div className='pl-8 mt-8'>
                        <img className='max-w-[55%] w-full' src={medicineGreen} alt="immuno-medicine" />
                        <img className='max-w-[55%] w-full' src={medicineOrange} alt="babies-medicine" />
                        <AnimationButton customClass=" rounded-full font-semibold px-6 bg-orange mt-8 inline-block text-white  border-2 border-green ">Разрешен с рождения</AnimationButton>
                    </div>
                    <div>
                        <h4 className='font-semibold text-3xl mb-2 text-gray'>Bifido PRO</h4>
                        <table>
                            <tr>
                                <th className='bg-green border-[2px] border-solid border-gray text-white'>Возраст</th>
                                <th className='bg-green border-[2px] border-solid border-gray text-white'>Дозировка</th>
                            </tr>
                            <tr>
                                <td className='bg-transparent border-[2px] border-solid border-gray pl-2'>Взрослым и детям старше 12 лет:</td>
                                <td className='bg-transparent border-[2px] border-solid border-gray pl-2'>по 1 капсуле 2 раза в день</td>
                            </tr>
                            <tr>
                                <td className='bg-transparent border-[2px] border-solid border-gray pl-2'>Детям от 6  до 12 лет:</td>
                                <td className='bg-transparent border-[2px] border-solid border-gray pl-2'>по 1 капсуле 1 раз в день</td>
                            </tr>
                        </table>
                        <p className='bg-gray text-white pl-4 w-full mt-3'>Капсулы - внутрь, до еды. Рекомендуемый курс  приёма - 10 дней</p>
                        <table className='mt-20'>
                            <tr>
                                <th className='bg-orange border-[2px] border-solid border-gray text-white'>Возраст</th>
                                <th className='bg-orange border-[2px] border-solid border-gray text-white'>Дозировка</th>
                            </tr>
                            <tr>
                                <td className='bg-transparent border-[2px] border-solid border-gray pl-2'>С рождения до 6 месяцев:</td>
                                <td className='bg-transparent border-[2px] border-solid border-gray pl-2'>по 1 саше 1 раз в день</td>
                            </tr>
                            <tr>
                                <td className='bg-transparent border-[2px] border-solid border-gray pl-2'>От 6 месяцев до 6 лет:</td>
                                <td className='bg-transparent border-[2px] border-solid border-gray pl-2'>по 1 саше 2 раз в день</td>
                            </tr>
                            <tr>
                                <td className='bg-transparent border-[2px] border-solid border-gray pl-2'>От 6 лет и старше:</td>
                                <td className='bg-transparent border-[2px] border-solid border-gray pl-2'>по 1 саше 3 раз в день</td>
                            </tr>
                        </table>
                        <p className='bg-gray text-white p-4 w-full leading-4 mt-3'>Саше пакетик - внутрь, во время еды, предварительно растворив содержимое в грудном молоке, молочной смеси или охлажденной до комнатной температуры кипяченной воде.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Indications