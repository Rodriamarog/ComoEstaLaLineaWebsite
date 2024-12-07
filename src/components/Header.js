// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white text-secondary shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-secondary">GaritaShop</Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-secondary hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-secondary hover:text-primary transition-colors">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
