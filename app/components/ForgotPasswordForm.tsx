import { useState } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí podrías llamar a tu API para manejar la solicitud de recuperación
    console.log("Solicitud enviada para:", email);
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#ECECEC]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md space-y-5"
      >
        <h2 className="text-3xl font-bold text-[#00266B] text-center">
          ¿Olvidaste tu contraseña?
        </h2>
        <p className="text-center text-gray-700">
          Ingresa tu correo y te enviaremos instrucciones para restablecer tu contraseña.
        </p>

        {!submitted ? (
          <>
            <div className="flex bg-[#ECECEC] px-2 py-2 rounded-lg gap-3 items-center">
              <img className="w-8" src="/assets/icons/birthday.svg" alt="email" />
              <div className="flex flex-col w-full">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="bg-transparent focus:outline-none"
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FAA307] rounded-lg py-3 text-white font-semibold hover:scale-105 transition"
            >
              Enviar instrucciones
            </button>
          </>
        ) : (
          <div className="text-center text-green-600 font-semibold">
            ¡Listo! Si tu correo existe en nuestro sistema, recibirás un mensaje pronto.
          </div>
        )}
      </form>
    </div>
  );
}
