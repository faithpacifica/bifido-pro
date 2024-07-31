import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg">My App</div>
      <button
        onClick={() => handleLanguageChange(i18n.language === 'ru' ? 'uz' : 'ru')}
        className="flex items-center space-x-2"
      >
        <span className="text-sm">
          {i18n.language === 'ru' ? 'RU' : 'UZ'}
        </span>
        <span className="text-xl">{i18n.language === 'ru' ? 'uz' : 'ru'}</span>
      </button>
    </nav>
  );
};

export default Navbar;