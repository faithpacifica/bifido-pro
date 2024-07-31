// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uzTranslation from './locales/uz/translation.json';
import ruTranslation from './locales/ru/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: uzTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
    },
    lng: 'ru', // Default language
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;