import React, {Fragment, useState} from 'react';
import Cart from './components/sections/Cart';
import Carusel from "./components/sections/Carusel";
import Header from "./components/sections/Header";
import Product from './components/sections/Product';

import "./styles/cart.css"



function App() {

  const [products, setProducts] = useState([
    { id: 5,  nombre: "SALTEÑA", precio: 250 },
    { id: 2,  nombre: "PORTEÑA", precio: 180 },
    { id: 3,  nombre: "CHICKEN", precio: 150 },
    { id: 4,  nombre: "CRIOLLA", precio: 200 },
    { id: 1,  nombre:"PATAGONIA", precio: 240 }
  ]);

  const [cart, setCart] = useState([]);
  

  return (
    <Fragment>
      <h3>Productos</h3>
      {products.map((product) => (
        <Product
        key={product.id}
        product={product}
        cart={cart}
        setCart={setCart}
        products={products}
        />
      ))}

      <Cart
      cart={cart}
      setCart={setCart}
      />
    </Fragment>
  );
}

export default App;
