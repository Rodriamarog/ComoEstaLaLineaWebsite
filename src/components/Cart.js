// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto mt-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-secondary mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Your cart is empty</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {cartItems.map(item => (
              <li key={item.id} className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-secondary">{item.name}</h3>
                  <p className="text-secondary font-medium">${item.price}</p>
                </div>
                <button className="text-gray-500 hover:text-red-600">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between text-lg font-bold text-secondary">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            <button className="w-full mt-6 bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors font-semibold shadow-md hover:shadow-lg">
              Checkout Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
