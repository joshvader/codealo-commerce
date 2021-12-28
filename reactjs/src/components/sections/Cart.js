import React from 'react'
import Product from './Product'
const Cart = ({cart, setCart}) => {
    return (
        <div className='cart'>
            <h3>Carrito</h3>
            {cart.length === 0 ? (<p>0</p>) : (cart.map((product => <Product key={product.id} product={product} cart={cart} setCart={setCart}/>)))}
        </div>
    )
}

export default Cart
