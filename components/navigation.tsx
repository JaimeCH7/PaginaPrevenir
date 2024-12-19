import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo que redirige a la página de inicio */}
        <Link href="/">
          <Image 
            src="/images/LOGO_H_BLANCO.png" 
            alt="Prevenir Logo" 
            width={150} 
            height={40} 
            className="cursor-pointer"  // Asegura que el logo sea clickeable
          />
        </Link>
        <ul className="flex space-x-6">
          {/* Enlaces de navegación */}
          <li>
            <Link href="/services" className="hover:text-red-500 transition-colors">Servicios</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-red-500 transition-colors">Nosotros</Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-red-500 transition-colors">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
