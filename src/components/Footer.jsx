import React from 'react'
import AnimationButton from './AnimationButton'

const Footer = () => {
    return (
        <footer className='bg-green py-10'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center'>
                    <div className='mb-8 lg:mb-0'>
                        <ul>
                            <li>
                                <p className='font-bold leading-5'>Товар сертифицирован</p>
                            </li>
                            <li>
                                <p className='font-bold leading-5'>TS-309954903-003:2023</p>
                            </li>
                            <li>
                                <p className='font-bold leading-5'>Производитель: ИП ООО «IGN HEALTH GROUP»,</p>
                            </li>
                            <li>
                                <address className='font-bold not-italic leading-5'>
                                    Республика Узбекистан, город Ташкент, ул. Шифокорлар-2. 32А/7.
                                </address>
                            </li>
                            <li className='leading-5'>
                                <a className='font-bold no-underline' href='www.ignproducts.com' target='_blank' rel="noreferrer">www.ignproducts.com</a>
                            </li>
                        </ul>
                        <ul className='mt-4'>
                            <li>
                                <p className='font-bold leading-5'>Биологически активная добавка к пище.</p>
                            </li>
                            <li>
                                <p className='font-bold leading-5'>Не является лекарственным средством.</p>
                            </li>
                            <li>
                                <p className='font-bold leading-5'>Вся информация на сайте запрещена <br />
                                    к копированию без разрешения владельца сайта</p>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full lg:w-auto lg:basis-[16%] flex flex-col gap-4'>
                        <AnimationButton customClass="text-lg w-full lg:w-auto block rounded-lg py-3 px-10 bg-white text-black font-bold border-2 border-transparent">Pharmclick</AnimationButton>
                        <AnimationButton customClass="text-lg w-full lg:w-auto block rounded-lg py-3 px-10 bg-white text-black font-bold border-2 border-transparent">Gopharm</AnimationButton>
                        <AnimationButton customClass="text-lg w-full lg:w-auto block rounded-lg py-3 px-10 bg-white text-black font-bold border-2 border-transparent">Arzonapteka</AnimationButton>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
