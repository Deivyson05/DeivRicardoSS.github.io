import React from "react"
import { useTranslation } from "react-i18next";
import "./i18n";

import { Header } from "./components/Header";

function App() {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <main>
    <Header/>
      <button
        onClick={()=> changeLanguage('en')}
      >En</button>
      <button
        onClick={()=> changeLanguage('pt')}
      >Pt</button>
    </main>
  )
}

export default App
