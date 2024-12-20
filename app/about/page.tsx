import React from 'react';
import Image from 'next/image';
import Navigation from '../../components/navigation';
import Contact from '../../components/contact'
import Footer from '../../components/footer';

const About = () => {
  return (
    <main>
      <Navigation />
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Nosotros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Reciban un cordial saludo de <strong>PREVENIR SEGURIDAD SIN LÍMITE LTDA</strong>, 
                una empresa comprometida con la excelencia en servicios de vigilancia y seguridad privada. 
                Contamos con licencia vigente expedida por la Superintendencia de Seguridad Privada 
                (No. 20204100099197), ofreciendo soluciones especializadas para los sectores residencial, 
                industrial, hotelero, bancario, hospitalario y servicio de escolta, tanto a nivel local 
                como nacional.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Nuestra organización está respaldada por tecnología de punta, servicios de alta calidad, 
                beneficios competitivos y soporte técnico permanente. Ofrecemos un servicio confiable, 
                con garantía y cumplimiento, para satisfacer las necesidades más exigentes de nuestros clientes.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Estamos a su disposición para brindar información detallada sobre nuestro portafolio de servicios 
                y costos, ya sea a través de nuestras líneas telefónicas o mediante una entrevista personal, 
                con el fin de lograr una relación comercial mutuamente beneficiosa.
              </p>
            </div>
            <div>
              <Image
                src="/images/about-us.jpg"
                alt="Equipo de trabajo de Prevenir Seguridad"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-center mb-8">Nuestra Filosofía</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-4">Misión</h4>
                <p className="text-lg leading-relaxed text-gray-700">
                  En <strong>PREVENIR SEGURIDAD SIN LÍMITE LTDA</strong>, nos dedicamos a prestar servicios 
                  de vigilancia y seguridad privada de óptima calidad, brindando protección, confianza y tranquilidad 
                  a nuestros clientes. Nuestro compromiso está basado en la ética, la responsabilidad y el profesionalismo 
                  de nuestro equipo humano, utilizando tecnología avanzada y medios especializados como ejemplares caninos 
                  y armas de fuego.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-4">Visión</h4>
                <p className="text-lg leading-relaxed text-gray-700">
                  Aspiramos a posicionarnos como líderes en el mercado nacional de seguridad, ofreciendo una amplia gama 
                  de productos y servicios modernos que garanticen soluciones efectivas para nuestros clientes. 
                  Nos enfocamos en el crecimiento continuo, la innovación y la calidad como pilares de nuestro éxito.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-center mb-8">Datos Legales</h3>
            <p className="text-lg leading-relaxed text-gray-700 text-center">
              <strong>PREVENIR SEGURIDAD SIN LÍMITE LTDA</strong> es una empresa legalmente constituida mediante 
              Escritura Pública número 1884 de la Notaría 17 de Bogotá, registrada en la Cámara de Comercio con 
              Registro Mercantil número 0002699668 y autorizada por la Superintendencia de Vigilancia y Seguridad 
              Privada mediante Resolución 20181300072017 del 14 de septiembre de 2018.
            </p>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
};

export default About;
