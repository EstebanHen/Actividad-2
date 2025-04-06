// DonationPage.tsx

import { Link } from "react-router-dom";

const DonationPage = () => {
  return (
    <div className="donation-container p-8">
      <h2 className="text-3xl font-bold text-[#1D1856]">¡Haz una donación!</h2>
      <p className="mt-4 text-lg">
        Tu contribución ayuda a continuar con nuestra misión. Elige cómo deseas donar:
      </p>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Métodos de Donación</h3>
        <div className="mt-4">
          <button className="bg-[#FAA307] text-white px-4 py-2 rounded-lg mr-4">
            Donar con tarjeta de crédito
          </button>
          <button className="bg-[#FAA307] text-white px-4 py-2 rounded-lg">
            Donar con PayPal
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Donación Mensual</h3>
        <p className="mt-4">
          Si deseas hacer una donación mensual, por favor selecciona la opción correspondiente
          al momento de donar.
        </p>
      </div>

      <div className="mt-6">
        <Link
          to="/more-donations-info"
          className="text-[#FAA307] font-semibold hover:underline"
        >
          Más información sobre donaciones
        </Link>
      </div>
    </div>
  );
};

export default DonationPage;
