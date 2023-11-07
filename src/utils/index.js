import { languages } from "../constants";

const currentLang = localStorage.getItem("locale") || languages.EN;

export const changeLang = () => {
  const switchedLang =
    currentLang === languages.AR ? languages.EN : languages.AR;
  localStorage.setItem("locale", switchedLang);
  window.location.reload();
};

export const getDirection = () => {
  if (currentLang === languages.EN) return "ltr";
  else return "rtl";
};

export const getLang = () => localStorage.getItem("locale") || languages.EN;
