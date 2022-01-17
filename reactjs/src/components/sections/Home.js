import React, {Fragment, useState} from 'react';

//IMPORT IMAGENES
import Acer from "../images/Acer.png";
import HP from "../images/Hp.png";
import MSI from "../images/MSI.png";
import Asus from "../images/Asus.png";
import Dell from "../images/Dell.png";
import Cart from './Cart';
import Product from './Product';




const Home = () => {
    const [products, setProducts] = useState([
        { id: 5, image: Acer, nombre: "Acer Nitro", precio:  969990	 },
        { id: 2, image: HP, nombre: "HP Pavillion", precio: 1099990	 },
        { id: 3, image: MSI, nombre: "MSI", precio: 899990 },
        { id: 4, image: Asus, nombre: "Asus", precio: 999990 },
        { id: 1, image: Dell, nombre: "Dell", precio: 839990 },
      ]);
    
      const [cart, setCart] = useState([]);
    
    return (
        <div>
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
            <h1>Aprovecha solo por tiempo limitado estas ofertas Gamers!</h1>
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
          <p>PCNIEL 2022 - Todos los derechos reservados</p>
        </section>
        
      </section> 
            </Fragment>
        </div>
    )
}

export default Home

