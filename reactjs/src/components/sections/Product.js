import React from 'react'
import { useNavigate } from "react-router-dom"


const Product = ({ product, cart, setCart, products }) => {
  const { nombre, image, precio, id } = product;

  //Agregar producto al carrito
  const addProduct = (id) => {
    const product = products.filter(product => product.id === id);
    setCart([...cart, ...product]);
    console.log(cart.length);
  };
  //Eliminar producto
  const delProduct = (id) => {
    const products = cart.filter((product) => product.id !== id);
    setCart(products);
  };
  //Producto vendido
  const soldoutProduct = (id) => {
       // al hacer click en el boton comprar, se mostrara un modal que diga que el producto esta listo para retiro

    
  };


       
       //Ruta de navegación para la página de nosotros
  const navigate = useNavigate();
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
      <button onClick={() => { navigate("/detalle") }} className="container__content__burgers--btnDetels">Mas detalle</button>
    </ul>

  );

};


export default Product;
