import React, { Fragment } from "react";

import Product from "./Product";

const Cart = ({ cart, setCart }) => {
  const viewCart = () => {
    {
      document.querySelector(
        "div.container__header__cartDiv--list"
      ).style.display = "none"
        ? (document.querySelector(
            "div.container__header__cartDiv--list"
          ).style.display = "flex")
        : (document.querySelector(
            "div.container__header__cartDiv--list"
          ).style.display = "none");
    }
  };

  const closeDiv = () => {
    document.querySelector(
      "div.container__header__cartDiv--list"
    ).style.display = "none";
  };

  return (
    <Fragment>
      <div className="container__header__cartDiv">
        <p className="container__header__cartDiv--count">{cart.length}</p>
        <button
          className="container__header__cartDiv--btnCart"
          onClick={() => viewCart()}
        ></button>
      </div>
      <div className="container__header__cartDiv--list">
        <button
          className="container__content__burgers--btnClose"
          type="button"
          onClick={() => closeDiv()}
        >
          X
        </button>
        {cart.length === 0 ? (
          <p>No hay nada por aquí...</p>
        ) : (
          cart.map((product) => (
            <Product
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))
        )}
      </div>
    </Fragment>
  );
};
export default Cart;