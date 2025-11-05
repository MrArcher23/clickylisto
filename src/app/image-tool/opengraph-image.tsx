import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Optimizador de Imágenes'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#831843',
          backgroundImage: 'linear-gradient(135deg, #831843 0%, #be185d 100%)',
          padding: 60,
        }}
      >
        {/* Image Icon */}
        <div
          style={{
            fontSize: 120,
            marginBottom: 30,
          }}
        >
          🖼️
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 66,
            fontWeight: 900,
            color: 'white',
            margin: 0,
            marginBottom: 20,
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          Optimizador de Imágenes
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 30,
            color: '#fce7f3',
            margin: 0,
            marginBottom: 50,
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Redimensiona, convierte y optimiza imágenes para la web
        </p>

        {/* Format Examples */}
        <div
          style={{
            display: 'flex',
            gap: 24,
            marginBottom: 40,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#9f1239',
              border: '3px solid #ec4899',
              borderRadius: 12,
              padding: '20px 32px',
              color: '#fce7f3',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            JPG
          </div>
          <div
            style={{
              fontSize: 40,
              color: 'white',
            }}
          >
            ↔️
          </div>
          <div
            style={{
              backgroundColor: '#9f1239',
              border: '3px solid #ec4899',
              borderRadius: 12,
              padding: '20px 32px',
              color: '#fce7f3',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            PNG
          </div>
          <div
            style={{
              fontSize: 40,
              color: 'white',
            }}
          >
            ↔️
          </div>
          <div
            style={{
              backgroundColor: '#9f1239',
              border: '3px solid #ec4899',
              borderRadius: 12,
              padding: '20px 32px',
              color: '#fce7f3',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            WebP
          </div>
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#be185d',
              color: 'white',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            📐 Redimensionar
          </div>
          <div
            style={{
              backgroundColor: '#db2777',
              color: 'white',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            🔄 Convertir formatos
          </div>
          <div
            style={{
              backgroundColor: '#ec4899',
              color: '#500724',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            ⚡ Comprimir
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            color: '#fce7f3',
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          ClickyListo.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
