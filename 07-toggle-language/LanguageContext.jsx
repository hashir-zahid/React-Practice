import React, { createContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    welcome: "Welcome to our website!",
    home: "Home",
    about: "About",
    toggle: "Switch to Urdu"
  },
  ur: {
    welcome: "ہماری ویب سائٹ پر خوش آمدید!",
    home: "ہوم",
    about: "متعلق",
    toggle: "انگریزی پر سوئچ کریں"
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((p) => (p === "en" ? "ur" : "en"));
  };

  const value = {
    language,
    t: translations[language],
    toggleLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
