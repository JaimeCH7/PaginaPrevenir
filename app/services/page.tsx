import React from 'react'
import Features from '../../components/features'
import Contact from '../../components/contact'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer' 

const Services = () => {
  return (
    <main>
      <Navigation />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">Nuestros Servicios</h1>
          <p className="text-xl mb-16">Ofrecemos soluciones de seguridad adaptadas a tus necesidades.</p>
          <Features />
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}

export default Services
