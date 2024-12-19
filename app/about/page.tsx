import React from 'react'
import Contact from '../../components/contact'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'

const About = () => {
  return (
    <main>
      <Navigation />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">Nosotros</h1>
          <p className="text-xl mb-16">
            En Prevenir Seguridad Sin Límite, nos especializamos en brindar soluciones de seguridad personalizadas,
            adaptadas a las necesidades de nuestros clientes. Con años de experiencia, nuestro equipo altamente capacitado
            trabaja para proteger lo que más importa.
          </p>
          <div className="flex justify-center mb-8">
            <video 
              className="w-full md:w-2/3 h-auto rounded-lg shadow-xl" 
              controls 
              src="/videos/animacion1.mp4"
              //alt="Animación explicativa de Prevenir Seguridad Sin Límite"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/images/nosotros.jpg"
              alt="Nosotros"
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}

export default About
