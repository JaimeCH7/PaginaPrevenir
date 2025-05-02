import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctenos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8 gap-4">
          <Image 
            src="/images/LOGO_H_PNG.png" 
            alt="Prevenir Logo Horizontal" 
            width={500} 
            height={200} 
            className="mx-auto"
          />
          <Image 
            src="/images/QR.png" 
            alt="Imagen Adicional" 
            width={250} 
            height={100} 
            className="mx-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <Phone className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Teléfono</h3>
            <p>+57 302 252 4719</p>
            <p>(601) 5312692</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <Mail className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p>operaciones@seguridadprevenir.com</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <MapPin className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Dirección</h3>
            <p>Calle 2c # 29 - 37, Bogotá</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
