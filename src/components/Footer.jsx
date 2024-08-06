import React from 'react'

const Footer = () => {
    return (
        <footer className='py-10 bg-green'>
            <div className='container px-4 mx-auto'>
                <div className='flex flex-col items-start justify-between lg:flex-row lg:items-center'>
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
                                <address className='not-italic font-bold leading-5'>
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
                        <a href="https://pharmaclick.uz/ru/" target="_blank" rel="noreferrer" className="block w-full px-10 py-3 text-lg font-bold text-black bg-white border-2 border-transparent rounded-lg hover:text-white hover:bg-orange lg:w-auto">Pharmclick</a>
                        <a href="https://gopharm.uz/" target="_blank" rel="noreferrer" className="block w-full px-10 py-3 text-lg font-bold text-black bg-white border-2 border-transparent rounded-lg hover:text-white hover:bg-orange lg:w-auto">Gopharm</a>
                        <a href="https://arzonapteka.uz/ru/bot" target="_blank" rel="noreferrer" className="block w-full px-10 py-3 text-lg font-bold text-black bg-white border-2 border-transparent rounded-lg hover:text-white hover:bg-orange lg:w-auto">Arzonapteka</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
