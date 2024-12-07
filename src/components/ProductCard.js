// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border border-gray-100">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-secondary">{product.name}</h3>
        <p className="text-secondary font-bold mt-2">${product.price}</p>
        <button className="w-full mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors font-semibold shadow-md hover:shadow-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;