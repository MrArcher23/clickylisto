import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ClickyListo - Herramientas Online Gratuitas',
    short_name: 'ClickyListo',
    description: 'Herramientas prácticas online gratuitas: generador de QR, convertidor de texto, generador de contraseñas, UUID, enlaces de WhatsApp, acortador de links y optimizador de imágenes.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
