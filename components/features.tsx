import React from 'react'
import { Shield, Eye, Lock, Bike } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Protección Integral',
      description: 'Soluciones completas de seguridad para proteger su hogar y negocio.',
      image: '/images/proteccion.jpeg'
    },
    {
      icon: <Eye className="w-12 h-12 text-red-500" />,
      title: 'Vigilancia 24/7',
      description: 'Monitoreo constante en tiempo real, asegurando protección continua en todo momento.',
      image: '/images/vigilancia.jpeg'
    },
    {
      icon: <Lock className="w-12 h-12 text-red-500" />,
      title: 'Acceso Controlado',
      description: 'Guardias altamente capacitados para asegurar el acceso controlado y la seguridad de su propiedad.',
      image: '/images/acceso-controlado.jpeg'
    },
    {
      icon: <Bike className="w-12 h-12 text-red-500" />,
      title: 'Supervisión Profesional',
      description: 'Supervisión en tiempo real, garantizando la calidad y efectividad del servicio.',
      image: '/images/supervision2.jpeg'
    }
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              {feature.image && (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 object-contain rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
