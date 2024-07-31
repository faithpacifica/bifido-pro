import React from 'react';
import Logo from '../assets/images/logo-black.png';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="text-white bg-orange">
      <div className='container flex items-center justify-between py-8 '>
      <Link  to="/"> <img   src={Logo} className="w-1/2 min-w-[120px] inline-block " alt='logo' /></Link>
      
      <div className="flex items-center justify-center text-lg font-bold navbar">
        <ul className='flex '>
          <li className='px-3'><Link to="/">Взрослым</Link></li>
          <li className='px-3'><Link to="/">Детям</Link></li>
          <li className='px-3'><Link to="/">Где купить?</Link></li>
        </ul>

        <button
        onClick={() => handleLanguageChange(i18n.language === 'ru' ? 'uz' : 'ru')}
        className="flex items-center ml-4 space-x-2"
      >
        <span className="text-sm">
          {i18n.language === 'ru' ? 'RU' : 'UZ'}
        </span>
        <span className="text-xl">{i18n.language === 'ru' ? 'uz' : 'ru'}</span>
      </button>
      </div>
     
      </div>
    </nav>
  );
};

export default Navbar;