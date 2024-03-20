import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar/NavBar'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Click y Listo',
  description:
    'En ClickYListo, creemos en la magia de la simplicidad. Por eso, hemos creado un espacio donde encontrarás herramientas prácticas y fáciles de usar, diseñadas para hacerte la vida más sencilla. Desde generar códigos QR con un solo clic hasta convertir textos de mayúsculas a minúsculas en segundos, nuestras herramientas están pensadas para que puedas resolver tareas diarias de manera rápida y eficiente. En ClickYListo, cada clic te acerca a la solución que necesitas. ¡Explora nuestras herramientas y descubre cómo podemos simplificar tu día a día!.',
  keywords: [
    'herramientas en línea',
    'generador de QR',
    'convertidor de texto',
    'mayúsculas a minúsculas',
    'acortador de enlaces',
    'generador de texto aleatorio',
    'página de emoticones',
    'generador de enlace WhatsApp',
    'herramientas prácticas',
    'soluciones rápidas',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
