import React, { useState } from 'react';

import Header from "./components/Header";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Footer from "./components/Footer";

const App = () => {

  // product list
  const [ products, setProducts ] = useState([
    { id: 1, name: "Shirt", price: "50" },
    { id: 2, name: "Jean", price: "30" }
  ]);

  // shopping cart
  const [ cart, setCart ] = useState([]);

  const updateCart = (op, productId) => {
    let newCart;
    console.log("entre");
    if (op === "add") {
      const product = products.find(product => product.id === productId);
      newCart = [ ...cart, product ];
    }
    if (op === "delete")
      newCart = cart.filter(product => product.id !== productId);

    setCart(newCart);
  };

  let footerText = `All Copyright &copy; ${new Date().getFullYear()}`;

  return (
    <div className="App">
      <Header title="Virtual Store" />
      <h1>Products List</h1>
      { products.map(product => {
        return (
          <Product
            key={ product.id }
            type="list"
            product={ product }
            updateCart={ updateCart }
          />
        );
      }) }
      <Cart cart={ cart } updateCart={ updateCart }/>
      <Footer text={ footerText }/>
    </div>
  );
}

export default App;
