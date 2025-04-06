import { useState } from "react";

type FormStatus = {
  success: boolean;
  error: boolean;
} | null;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { nombre, email, mensaje } = formData;

    if (!nombre || !email || !mensaje) {
      setFormStatus({ success: false, error: true });
      return;
    }

    setFormStatus({ success: true, error: false });
    setFormData({ nombre: "", email: "", mensaje: "" }); // limpiar campos
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-lg space-y-6">
      <h2 className="text-2xl font-bold text-center text-[#1D1856]">Contáctanos</h2>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />

      <textarea
        name="mensaje"
        placeholder="Mensaje"
        rows={4}
        value={formData.mensaje}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />

      <button
        type="submit"
        className="w-full py-2 bg-[#FAA307] hover:bg-yellow-400 text-white font-bold rounded-md"
      >
        Enviar
      </button>

      {formStatus?.success && (
        <p className="text-green-600 text-center font-semibold">¡Mensaje enviado con éxito!</p>
      )}
      {formStatus?.error && (
        <p className="text-red-600 text-center font-semibold">Por favor, completa todos los campos.</p>
      )}
    </form>
  );
};

export default ContactForm;