import React from "react"
import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <>
      <h1>{t('title')}</h1>
      <h2>{t('text')}</h2>
      <button
        onClick={()=> changeLanguage('en')}
      >En</button>
      <button
        onClick={()=> changeLanguage('pt')}
      >Pt</button>
    </>
  )
}

export default App
