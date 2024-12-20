import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prevenir Seguridad Sin Límite',
  description: 'Seguridad profesional para su tranquilidad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </head>
      <body className={inter.className}>
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  )
}
