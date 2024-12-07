import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  useEffect(() => {
    // Try to autofill the form using browser's autofill feature
    const autofillForm = async () => {
      if ('credentials' in navigator) {
        try {
          const credentials = await navigator.credentials.get({
            password: true,
            mediation: 'optional'
          });
          if (credentials) {
            setFormData(prev => ({
              ...prev,
              name: credentials.name || '',
              email: credentials.email || ''
            }));
          }
        } catch (error) {
          console.log('Autofill not available');
        }
      }
    };
    autofillForm();
  }, []);

  if (!product) {
    navigate('/');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the payment processing
    console.log('Processing payment for:', { product, formData });
    // Redirect to success page or show confirmation
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-secondary mb-6">Finalizar Compra</h2>
      
      {/* Product Summary */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Resumen de Compra</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-secondary">{product.name}</p>
            <p className="text-sm text-gray-600">Cantidad: 1</p>
          </div>
          <p className="font-bold text-secondary">${product.price}</p>
        </div>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Dirección</label>
            <input
              type="text"
              name="address"
              autoComplete="street-address"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Ciudad</label>
            <input
              type="text"
              name="city"
              autoComplete="address-level2"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Estado</label>
            <input
              type="text"
              name="state"
              autoComplete="address-level1"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              value={formData.state}
              onChange={(e) => setFormData({...formData, state: e.target.value})}
            />
          </div>
        </div>

        {/* Total and Submit */}
        <div className="mt-8 border-t pt-6">
          <div className="flex justify-between text-xl font-bold text-secondary mb-6">
            <span>Total a Pagar:</span>
            <span>${product.price}</span>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors font-semibold shadow-md hover:shadow-lg"
          >
            Confirmar Pago
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage; 