import React from "react";
import Home from "./components/sections/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalle from "./components/pages/detalle";

import "./styles/styles.css";
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
      
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/detalle" element={<Detalle />}></Route>
    </Routes>
    </BrowserRouter>
    </React.Fragment>
  )
}

export default App

