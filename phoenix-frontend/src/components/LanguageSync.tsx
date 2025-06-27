import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LanguageSync = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = location.pathname.split('/')[1]; // get 'ro', 'en', etc.
    if (['ro', 'en', 'ru'].includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [location, i18n]);

  return null; // no UI, just logic
};

export default LanguageSync;