import React from 'react'
import {useNavigate} from "react-router-dom"
import AboutUs from '../pages/aboutUs';

const Product = ({ product, cart, setCart, products }) => {
  const { nombre, image, precio, id } = product;
  const addProduct = (id) => {
    const product = products.filter((product) => product.id === id);
    setCart([...cart, ...product]);
    console.log(cart.length);
  };
  const delProduct = (id) => {
    const products = cart.filter((product) => product.id !== id);
    setCart(products);
  };
  //Ruta de navegación para la página de nosotros
  const navigate= useNavigate();
  return (
    <ul className="container__content__burgers">
      <img className="container__content__burgers--image" src={image}></img>
      <li className="container__content__burgers--nombre">{nombre}</li>
      <li className="container__content__burgers--precio">${precio}</li>
      {products ? (
        <button
          className="container__content__burgers--btnAdd"
          type="button"
          onClick={() => addProduct(id)}
        >
          Agregar +
        </button>
        //Detalle del producto
        
    ) :
       (
        <div>
          <button
            className="container__content__burgers--btnDel"
            type="button"
            onClick={() => delProduct(id)}
          >
            Eliminar
          </button>
          <button
            className="container__content__burgers--btnAdd"
            type="button"
            onClick={() => delProduct(id)}
          >
            Confirmar
          </button>
        </div>
      )}
      <button onClick={()=>{navigate("/aboutUs") }} className="container__content__burgers--btnDetels">Mas detalle</button>
    </ul>
    
  );
  
};


export default Product;
