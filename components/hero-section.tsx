import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Prevenir Seguridad Sin Límite</h1>
          <p className="text-xl mb-8">Proteja lo que más importa: soluciones de seguridad personalizadas para su hogar, negocio o conjunto residencial.</p>
          <a 
            href="https://api.whatsapp.com/send?phone=573022524719" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-colors inline-block"
          >
            Comenzar Ahora
          </a>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="/images/LOGO_V_PNG.png" 
            alt="Seguridad Sin Límite" 
            width={500} 
            height={500} 
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
