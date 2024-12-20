import React from 'react'
import Contact from '../../components/contact'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import Image from 'next/image'

const Services = () => {
  const services = [
    {
      title: 'Protección Integral',
      description: 'Brindamos soluciones completas que protegen lo que más valoras, con personal capacitado y tecnología avanzada.',
      image: '/images/proteccion.jpeg',
    },
    {
      title: 'Vigilancia 24/7',
      description: 'Monitoreo constante con personal especializado y sistemas modernos para garantizar tranquilidad en todo momento.',
      image: '/images/vigilancia.jpeg',
    },
    {
      title: 'Acceso Controlado',
      description: 'Ofrecemos sistemas de control de acceso inteligentes y personal de confianza para proteger cada entrada.',
      image: '/images/acceso-controlado.jpeg',
    },
    {
      title: 'Supervisión Profesional',
      description: 'Garantizamos la calidad de nuestros servicios con supervisión constante y retroalimentación efectiva.',
      image: '/images/supervision2.jpeg',
    },
    {
      title: 'Escolta de Personal',
      description: 'Proporcionamos escoltas altamente capacitados para garantizar la seguridad de personas importantes en cualquier situación.',
      image: '/images/escolta.jpeg',
    },
    {
      title: 'Seguridad Electrónica',
      description: 'Implementamos sistemas avanzados como cámaras de vigilancia, alarmas y sensores de movimiento para proteger sus bienes.',
      image: '/images/seguridad-electronica.jpeg',
    },
    {
      title: 'Resguardo de Eventos',
      description: 'Planeamos y ejecutamos estrategias de seguridad para eventos sociales, empresariales y públicos.',
      image: '/images/eventos.jpeg',
    },
    {
      title: 'Asesoramiento en Seguridad',
      description: 'Realizamos auditorías y consultorías para mejorar los protocolos de seguridad de su organización.',
      image: '/images/asesoria.jpeg',
    },
  ]

  return (
    <main>
      <Navigation />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Nuestros Servicios</h1>
          <p className="text-xl text-center mb-16">
            Descubre cómo nuestras soluciones personalizadas pueden satisfacer tus necesidades de seguridad.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="object-cover w-full"
                />
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}

export default Services
