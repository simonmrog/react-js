import React from 'react';
import Product from "./Product";
import "./Cart.css";

const Cart = ({ cart, updateCart }) => {

  return (
    <div className="Cart">
      <h2>Shopping Cart</h2>
      { cart.length === 0 ? <p>Empty Cart</p> : cart.map(product => {
          return (
            <Product
              key={ product.id }
              type="cart"
              product={ product }
              updateCart={ updateCart }
            />
          );
        })
      }
    </div>
  );
}

export default Cart;
