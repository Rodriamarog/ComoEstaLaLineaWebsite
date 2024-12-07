// src/pages/Home.js
import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const [products] = useState([
    { 
      id: 1, 
      name: 'Premium Headphones', 
      price: 299.99, 
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' 
    },
    { 
      id: 2, 
      name: 'Smart Watch', 
      price: 199.99, 
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500' 
    },
    { 
      id: 3, 
      name: 'Wireless Earbuds', 
      price: 149.99, 
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500' 
    },
    { 
      id: 4, 
      name: 'Laptop Pro', 
      price: 1299.99, 
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500' 
    }
  ]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-secondary text-center mb-8">Para gente que pasa mucho tiempo haciendo fila para cruzar</h2>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
