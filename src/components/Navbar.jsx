import React from 'react';
import Logo from '../assets/images/logo-black.png';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="text-white bg-orange">
      <div className='container flex items-center justify-between py-8 '>
      <Link  to="/">
       <img   src={Logo} className="w-1/2 min-w-[120px] inline-block " alt='logo' />
       </Link>
      
      <nav className="flex items-center justify-center text-lg font-bold navbar">
        <ul className='flex '>
          <li className='mr-3 hover:text-gray-700'><Link to="/">{t('navLink1')}</Link></li>
          <li className='mr-3 hover:text-gray-700'><Link to="/">{t('navLink2')}</Link></li>
          <li className='mr-3 hover:text-gray-700'><Link to="/">{t('navLink3')}</Link></li>
        </ul>
{/* TODO:localStorage ga saqlash */}
        <button
        onClick={() => handleLanguageChange(i18n.language === 'ru' ? 'uz' : 'ru')}
        className="flex items-center ml-4 space-x-2 text-xl font-bold hover:text-gray-600"
      >
        <span className="text-xl ">
          {i18n.language === 'ru' ? 'RU' : 'UZ'}
        </span>
         </button>
      </nav>
     
      </div>
    </header>
  );
};

export default Navbar;