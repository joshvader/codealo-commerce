import React from 'react'

const Product = ({product, cart,setCart,products}) => {
    //Constante que guarda las propiedades del estado de los productos
  const {nombre,precio,id} = product;

  //Función para agregar producto al carrito
  const addProduct = () => {
      const product = products.filter((product) => product.id === id);
      setCart([...cart, ...product]);
  }
  //Función para eliminar producto del carrito
  const delProduct = (id) => {
      const products = cart.filter(product => product.id !== id);
      setCart(products);
  }

    return (
        <div>
            <ul>
                <li>{nombre}</li>
                <li>{precio}</li>
                {products ? (
                    (
                    <button type='button' onClick={()=>addProduct(id)}>
                    Agregar al carrito
                    </button>
                    )
                ) : (
                    <div>
                    <button type='button' onClick={()=>addProduct(id)}>
                    Confirmar
                    </button>

                    <button type='button' onClick={()=>delProduct(id)}>
                    Eliminar
                   </button>
                    </div>
                )}

                
                
                

            </ul>
        </div>
    )
    
}

export default Product
