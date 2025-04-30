import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { getData } from "./core/lStorage";
//import './App.css'

function App() {
  const [theme, setTheme] = useState(getData("theme") || "light");

  return (
    <main className={theme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      
    </main>
  )
}

export default App
