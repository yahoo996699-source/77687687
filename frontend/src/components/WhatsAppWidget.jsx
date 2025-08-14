import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=9647751444200", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppWidget;