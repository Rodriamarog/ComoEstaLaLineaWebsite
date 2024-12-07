// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-secondary mt-auto shadow-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">About Us</h3>
            <p className="text-gray-600">Your trusted online shopping destination for quality products.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-primary">About</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-primary">Contact</a></li>
              <li><a href="/shipping" className="text-gray-600 hover:text-primary">Shipping Info</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-primary">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2024 GaritaShop, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
