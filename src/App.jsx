import React from "react"

import { Idioma } from "./components/Idioma";

import { Header } from "./components/Header";
import { Home } from "./sections/Home";
import { Sobre } from "./sections/Sobre";
import { Projetos } from "./sections/Projetos";

function App() {

  return (
    <main>
    <Header/>
    <Home/>
    <Sobre/>
    <Projetos/>
    <Idioma/>
    </main>
  )
}

export default App
