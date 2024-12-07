// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-secondary mt-auto shadow-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Si eres de Tijuana, estas en el lugar correcto...</h3>
            <p className="text-gray-600">Porque el envio te va a salir gratis jaja.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-primary">Sobre Nosotros</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-primary">Contacto</a></li>
              <li><a href="/shipping" className="text-gray-600 hover:text-primary">Información de Envío</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Conéctate Con Nosotros</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-primary">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2024 GaritaShop, Todos los Derechos Reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
