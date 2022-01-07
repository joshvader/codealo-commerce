import React from "react";
import Home from "./components/sections/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalle from "./components/pages/detalle";
import Acer from "./components/pages/Acer";
import Hp from "./components/pages/Hp";

import "./styles/styles.css";


const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
      
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/detalle" element={<Detalle />}></Route>
      <Route exact path="/detalle" element={<Acer />}></Route>
      <Route exact path="/detalle" element={<Hp />}></Route>
    </Routes>
    </BrowserRouter>
    </React.Fragment>
  )
}

export default App

