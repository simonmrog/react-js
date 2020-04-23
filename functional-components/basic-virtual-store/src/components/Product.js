import React from 'react';

const Product = ({ type, product, updateCart }) => {

  const { id, name, price } = product;

  const addProduct = id => {
    updateCart("add", id);
    console.log(`Product ${id} added to the cart`);
  };

  const deleteProduct = id => {
    updateCart("delete", id);
    console.log(`Product ${id} deleted from the cart`);
  };

  return (
    <div className="Product">
      <h2>{ name }</h2>
      <p>${ price }</p>
      {
        type === "list"
        ? <button onClick={ addProduct.bind(this, id) }>Add to Cart</button>
        : <button onClick={ deleteProduct.bind(this, id) }>Delete from Cart</button>
      }
    </div>
  );
}

export default Product;
