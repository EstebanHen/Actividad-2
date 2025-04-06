// app/routes/contacto.tsx
import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import ContactForm from "~/components/ContactForm";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return json({ error: "Todos los campos son obligatorios" }, { status: 400 });
  }

  try {
    // Llamada a tu API o envío de correo aquí
    const res = await fetch("https://tudominio.com/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) {
      const err = await res.json();
      return json({ error: err.message || "Error al enviar mensaje" });
    }

    return json({ success: true });
  } catch (error) {
    return json({ error: "No se pudo conectar con el servidor" });
  }
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactForm />
    </div>
  );
}
