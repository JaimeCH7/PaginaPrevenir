import React from 'react'
import Navigation from '../components/navigation'
import HeroSection from '../components/hero-section'
import Features from '../components/features'
import Contacto from '../components/contact'
import Footer from '../components/footer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Features />
      <Contacto />
      <Footer />
    </main>
  )
}

