
const WhatsAppSupport = () => {
    
    const phoneNumber = "1234567890";
    const message = "¡Hola! Necesito soporte y asesoramiento.";
  
    // Enlace para abrir WhatsApp
    const whatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    return (
      <div className="whatsapp-support-container p-8 text-center">
        <h2 className="text-3xl font-bold text-[#1D1856]">¿Necesitas ayuda?</h2>
        <p className="mt-4 text-lg">
          Si necesitas soporte o asesoramiento, ¡estamos aquí para ayudarte!
        </p>
  
        <div className="mt-6">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-3"
          >
            <span className="text-xl">Chat con nosotros en WhatsApp</span>
          </a>
        </div>
      </div>
    );
  };
  
  export default WhatsAppSupport;
  