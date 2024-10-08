import React, { useState } from 'react';
import Logo from '../assets/images/logo-black.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  // const handleLanguageChange = (lng) => {
  //   i18n.changeLanguage(lng);
  //   localStorage.setItem('language', lng);
  // };

  React.useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative text-white bg-orange">
      <div className="container flex items-center justify-between py-8">
        <Link to="/">
          <img src={Logo} className="w-1/2 min-w-[120px] inline-block" alt="logo" />
        </Link>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className={`text-white focus:outline-none ${isOpen ? 'hidden' : 'block'}`}
          >
            {/* Hamburger Icon */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Full-screen overlay menu */}
        <nav
          className={`fixed inset-0 bg-orange bg-opacity-95 z-20 flex flex-col items-center justify-center lg:static lg:bg-transparent lg:flex-row lg:justify-between text-xl font-bold transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
            }`}
        >
          <ul className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0">
            <li className="hover:text-[#727376] transition duration-300 "><Link to="/" onClick={() => setIsOpen(false)}>{t('navLink1')}</Link></li>
            <li className="transition duration-300 hover:text-[#727376]"><Link to="/" onClick={() => setIsOpen(false)}>{t('navLink2')}</Link></li>
            <li className="hover:text-[#727376] transition duration-300"><Link to="/" onClick={() => setIsOpen(false)}>{t('navLink3')}</Link></li>
          </ul>
          <button
            onClick={() => {
              const nextLanguage = language === 'ru' ? 'uz' : 'ru';
              changeLanguage(nextLanguage);
              setIsOpen(false);
            }}
            className="flex items-center mt-4 ml-8 space-x-2 text-xl font-bold lg:mt-0 hover:text-[#00BCC6] hover:font-bold"
          >
            <span className="text-xl">
              {language === 'ru' ? 'RU' : 'UZ'}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
