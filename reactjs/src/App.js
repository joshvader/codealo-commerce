import React, {Fragment, useState} from 'react';
import Cart from './components/sections/Cart';
import Carusel from "./components/sections/Carusel";
import Header from "./components/sections/Header";


import "./styles/styles.css"

//IMPORT IMAGENES
import Salteña from "./images/Salteña.png";
import Porteña from "./images/Porteña.png";
import Chicken from "./images/Chicken.png";
import Criolla from "./images/Criolla.png";
import Patagonia from "./images/patagonia.png";
import Product from './components/sections/Product';


function App() {

  const [products, setProducts] = useState([
    { id: 5, image: Salteña, nombre: "SALTEÑA", precio: 250 },
    { id: 2, image: Porteña, nombre: "PORTEÑA", precio: 180 },
    { id: 3, image: Chicken, nombre: "CHICKEN", precio: 150 },
    { id: 4, image: Criolla, nombre: "CRIOLLA", precio: 200 },
    { id: 1, image: Patagonia, nombre: "PATAGONIA", precio: 240 },
  ]);

  const [cart, setCart] = useState([]);


  return (
    <Fragment>
        {/* SECTION CONTENEDOR GLOBAL */}
        <section className="container">
        {/* SECTION DE LA CABECERA */}
        <section className="container__header">
          {/* BOTON DE LA CABECERA */}
          <div className="container__header__menu">
            <button className="container__header__menu--button"></button>
          </div>

          {/* TITULO DE LA CABECERA */}
          <div className="container__header__title">
            <h3 className="container__header__title--text">PCNIEL</h3>
          </div>

          {/* CART DE LA CABECERA */}
          <div className="container__header__cartDiv">
            <Cart cart={cart} setCart={setCart} />
          </div>
        </section>

        {/* SECTION CONTENEDOR PRINCIPAL */}
        <section className="container__content">

          <div className="container__content__title">
            <h1>Aprovecha solo por tiempo limitado combos 50% off!</h1>
          </div>

          <div className="container__content__listBurgers">
          {products.map(product => (
          <Product
        key={product.id}
        product={product}
        cart={cart}
        setCart={setCart}
        products={products}
        />
      ))}
          </div>

        </section>

        {/* SECTION FOOTER */}
        <section className="container__footer">
          <p>PCNIEL 2021 - Todos los derechos reservados</p>
        </section>
        
      </section>
     
     

      
    </Fragment>
  );
}

export default App;
