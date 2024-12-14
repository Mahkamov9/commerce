import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18next';

export default function ChangeLanguage() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng') || 'en');
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage)
    localStorage.setItem('i18nextLng', selectedLanguage)
    i18n.changeLanguage(selectedLanguage)
  }

  return (
    <>
      <div className='mx-10'>
        <select value={language} onChange={handleChange} className="bg-black text-[#fff] outline-none">
          <option value="uz">Uzbek</option>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
      </div>
    </>
  );
}
