import type { Metadata } from "next";
import { CSPostHogProvider } from "./providers";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/NavBar";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://clickylisto.com'),
  title: {
    default: "ClickyListo - Herramientas Online Gratuitas",
    template: "%s | ClickyListo"
  },
  description:
    "En ClickYListo, creemos en la magia de la simplicidad. Por eso, hemos creado un espacio donde encontrarás herramientas prácticas y fáciles de usar, diseñadas para hacerte la vida más sencilla. Desde generar códigos QR con un solo clic hasta convertir textos de mayúsculas a minúsculas en segundos, nuestras herramientas están pensadas para que puedas resolver tareas diarias de manera rápida y eficiente. En ClickYListo, cada clic te acerca a la solución que necesitas. ¡Explora nuestras herramientas y descubre cómo podemos simplificar tu día a día!",
  keywords: [
    "herramientas en línea",
    "generador de QR",
    "convertidor de texto",
    "mayúsculas a minúsculas",
    "acortador de enlaces",
    "generador de contraseñas",
    "generador UUID",
    "generador de enlace WhatsApp",
    "optimizador de imágenes",
    "herramientas prácticas",
    "soluciones rápidas",
    "herramientas gratuitas"
  ],
  authors: [{ name: "ClickyListo" }],
  creator: "ClickyListo",
  publisher: "ClickyListo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://clickylisto.com',
    siteName: 'ClickyListo',
    title: 'ClickyListo - Herramientas Online Gratuitas',
    description: 'Herramientas prácticas online: generador de QR, convertidor de texto, generador de contraseñas, UUID, enlaces de WhatsApp, acortador de links y optimizador de imágenes. Gratis y fácil de usar.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ClickyListo - Herramientas Online Gratuitas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClickyListo - Herramientas Online Gratuitas',
    description: 'Herramientas prácticas online: generador de QR, convertidor de texto, contraseñas, UUID y más. Gratis y fácil de usar.',
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://clickylisto.com',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <CSPostHogProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Toaster position="top-right" />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
