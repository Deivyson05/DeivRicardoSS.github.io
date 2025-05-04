import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { getData } from "./core/lStorage";
//import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Router/>
      </BrowserRouter>
  )
}

export default App
