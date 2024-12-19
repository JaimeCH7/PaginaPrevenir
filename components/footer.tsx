import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <Image 
          src="/images/LOGO_H_BLANCO.png" 
          alt="Prevenir Logo" 
          width={100} 
          height={100} 
          className="mx-auto mb-4"
        />
        <p>&copy; 2025 Prevenir Seguridad Sin Límite. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
