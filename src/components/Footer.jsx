import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className='py-10 bg-green'>
            <div className='container px-4 mx-auto'>
                <div className='flex flex-col items-start justify-between lg:flex-row lg:items-center'>
                    <div className='mb-8 lg:mb-0'>
                        <ul>
                            <li>
                                <p className='font-bold leading-5'> {t('footer1')}</p>
                            </li>
                            <li>
                                <p className='font-bold leading-5'>TS-309954903-003:2023</p>
                            </li>
                            <li>
                                <p className='font-bold leading-5'> {t('footer2')},</p>
                            </li>
                            <li>
                                <address className='not-italic font-bold leading-5'>
                                    {t('footer3')}
                                </address>
                            </li>
                            <li className='leading-5'>
                                <a className='font-bold no-underline' href='www.ignproducts.com' target='_blank' rel="noreferrer">www.ignproducts.com</a>
                            </li>
                        </ul>
                        <ul className='mt-4'>
                            <li>
                                <p className='font-bold leading-5'> {t('footer4')}</p>
                        </li>
                        <li>
                            <p className='font-bold leading-5'> {t('footer5')}</p>
                        </li>
                        <li>
                            <p className='font-bold leading-5'><span
                                dangerouslySetInnerHTML={{ __html: t('footer6') }} /></p>
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
        </footer >
    )
}

export default Footer
