import { createContext, useState } from "react";
import en from "../i18n/en";
import kn from "../i18n/kn";

export const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  // Select dictionary based on language
  const dictionary = lang === "kn" ? kn : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
}
