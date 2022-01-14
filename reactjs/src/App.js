import React from "react";
import Home from "./components/sections/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalle from "./components/pages/detalle";
import Acer from "./components/pages/Acer";
import Hp from "./components/pages/Hp";
import Asus from "./components/pages/Asus";
import Dell from "./components/pages/Dell";
import MSI from "./components/pages/MSI";


//Estilos CSS
import "./styles/styles.css";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
      
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/detalle" element={<Detalle />}></Route>
      <Route exact path="/acer" element={<Acer />}></Route>
      <Route exact path="/hp" element={<Hp />}></Route>
      <Route exact path="/asus" element={<Asus/>}></Route>
      <Route exact path="/dell" element={<Dell/>}></Route>
      <Route exact path="/msi" element={<MSI/>}></Route>
      <Route exact paht ="/detalle" element={<Detalle/>}></Route>
      

    </Routes>
    </BrowserRouter>
    </React.Fragment>
  )
}

export default App

