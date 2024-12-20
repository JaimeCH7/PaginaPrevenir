import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react'; // Asegúrate de importar el ícono correcto.

const FloatingWhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/573022524719"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
    >
      <MessageCircle className="w-6 h-6" />
    </Link>
  );
};

export default FloatingWhatsAppButton;

