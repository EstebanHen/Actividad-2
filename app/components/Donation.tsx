import React, { useState } from 'react';
import axios from 'axios';

const Donation = () => {
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  // Configuración del endpoint de la API de Wompi
  const wompiApiUrl = 'https://sandbox.wompi.co/v1/transactions'; 

  const handleDonation = async () => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post(wompiApiUrl, {
        amount_in_cents: amount * 100,
        currency: 'COP',
        payment_method: 'card',
        redirect_url: 'https://mi-plataforma.com/gracias'  // URL de redirección después del pago
      });

      if (response.data.status === 'accepted') {
        setSuccess(true);
      } else {
        setError('Hubo un problema con el proceso de pago. Intenta nuevamente.');
      }
    } catch (err) {
      setError('Hubo un error al procesar el pago. Por favor, inténtalo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-md max-w-md w-full p-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Haz una Donación</h2>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 text-sm font-medium mb-2">Cantidad a donar (COP)</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Cantidad en COP"
            min="1"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex justify-center mb-4">
          <button
            onClick={handleDonation}
            disabled={loading || amount <= 0}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-700 transition duration-200 disabled:opacity-50"
          >
            {loading ? 'Procesando...' : 'Donar Ahora'}
          </button>
        </div>
        {success && <p className="text-green-600 text-center font-medium">¡Gracias por tu donación!</p>}
        {error && <p className="text-red-600 text-center font-medium">{error}</p>}
      </div>
    </div>
  );
};

export default Donation;
