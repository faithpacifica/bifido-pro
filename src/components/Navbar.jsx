import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="text-white bg-gray-800">
      <div className='container flex items-center justify-between p-4 '>
      <div className="text-lg ">My App</div>
      <button
        onClick={() => handleLanguageChange(i18n.language === 'ru' ? 'uz' : 'ru')}
        className="flex items-center space-x-2"
      >
        <span className="text-sm">
          {i18n.language === 'ru' ? 'RU' : 'UZ'}
        </span>
        <span className="text-xl">{i18n.language === 'ru' ? 'uz' : 'ru'}</span>
      </button>
      </div>
    </nav>
  );
};

export default Navbar;