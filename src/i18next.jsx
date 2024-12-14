import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ruTranslation from "./locales/ru.json";
import uzTranslation from "./locales/uz.json";
import enTranslation from "./locales/en.json";

const lang = localStorage.getItem("i18nextLng") || "en";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: lang,
    debug: true,
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
      uz: { translation: uzTranslation },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;