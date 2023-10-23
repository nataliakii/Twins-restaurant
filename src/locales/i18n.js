import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "./en.json";
import translationsEl from "./el.json";

i18n.use(initReactI18next).init({
  lng: "en",
  // fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: translationsEn,
    },
    el: {
      translation: translationsEl,
    },
  },
});

export default i18n;
