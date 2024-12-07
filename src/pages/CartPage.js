// src/pages/CartPage.js
import React, { useState } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  const [cartItems] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    // Add more cart items
  ]);

  return (
    <div>
      <h2>Your Cart</h2>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default CartPage;
