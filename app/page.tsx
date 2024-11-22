"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Users, Building2, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  const [formData, setFormData] = useState({
    contact: "",
    option: "cotizacion",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const message = `Nueva solicitud:
    Tipo: ${formData.option}
    Contacto: ${formData.contact}`;
  
    const whatsappLink = `https://api.whatsapp.com/send?phone=573022524719&text=${encodeURIComponent(
      message
    )}`;
  
    // Redirige al usuario al enlace de WhatsApp
    window.open(whatsappLink, "_blank");
  
    alert("Redirigiendo a WhatsApp...");
  };
  

  return (
    <div className="flex flex-col min-h-screen">
      {/* Barra de Navegación */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          <Image
            src="/images/LOGO_H_BLANCO.png"
            alt="Prevenir Logo"
            width={120}
            height={150}
            className="mb-0"
          />

          <div className="flex justify-center space-x-4">
            <a href="#services" className="hover:text-gray-400">
              Servicios
            </a>
            <a href="#about" className="hover:text-gray-400">
              Nosotros
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contacto
            </a>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <header id="hero" className="relative bg-background text-foreground pt-20">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Seguridad Profesional para su Tranquilidad
              </h1>
              <p className="text-xl text-muted-foreground">
                Protección integral y vigilancia de primera clase para empresas y residencias
              </p>
              {/* Formulario */}
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="Ingrese su número o correo"
                  className="border rounded p-2 w-full"
                  required
                />
                <select
                  name="option"
                  value={formData.option}
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                >
                  <option value="cotizacion">Cotización</option>
                  <option value="empleo">Busco Empleo</option>
                </select>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90"
                >
                  Solicitar
                </button>
              </form>

            </div>
            <div className="hidden lg:block">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Security Guard"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <Shield className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Vigilancia Física</h3>
                <p className="text-muted-foreground">
                  Personal altamente capacitado para la protección de sus instalaciones 24/7
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <Building2 className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Seguridad Corporativa</h3>
                <p className="text-muted-foreground">
                  Soluciones integrales de seguridad para empresas y organizaciones
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <Users className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Eventos Especiales</h3>
                <p className="text-muted-foreground">
                  Seguridad personalizada para eventos y ocasiones especiales
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
              <p className="text-muted-foreground mb-6">
                Prevenir Seguridad Sin Limite es una empresa líder en el sector de la seguridad privada,
                comprometida con la excelencia y la protección integral de nuestros clientes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">✓</div>
                  Personal altamente capacitado
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">✓</div>
                  Tecnología de última generación
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">✓</div>
                  Disponibilidad 24/7
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/LOGO_H_PNG.png"
                alt="Prevenir Logo Horizontal"
                width={500}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contáctenos</h2>
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
              <p>comercial@seguridadprevenir.com</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <MapPin className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Dirección</h3>
              <p>Calle 2c # 29 - 37, Bogotá</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image
                src="/images/LOGO_V_PREVENIR.jpg"
                alt="Prevenir Logo"
                width={150}
                height={150}
              />
            </div>
            <div className="text-center">
              <p>© 2024 Prevenir Seguridad Sin Limite. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
