import React from 'react'


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
      ) : (
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
    </ul>
  );
  
};


export default Product;
