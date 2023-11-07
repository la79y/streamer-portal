import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLang } from "../utils";

import en from "./en.json";
import ar from "./ar.json";

const resources = {
  en: {
    translation: {
      ...en,
    },
  },
  ar: {
    translation: {
      ...ar,
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: getLang(),
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});

export function translateCell(cell) {
  return i18n.t(cell);
}

export default i18n;
