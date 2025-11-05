import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'ClickyListo - Herramientas Online Gratuitas'
export const size = {
  width: 1200,
  height: 600,
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
          backgroundColor: '#000',
          backgroundImage: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        }}
      >
        {/* Logo/Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
          }}
        >
          <h1
            style={{
              fontSize: 76,
              fontWeight: 900,
              color: 'white',
              margin: 0,
              padding: 0,
              lineHeight: 1.2,
              textAlign: 'center',
            }}
          >
            ClickyListo
          </h1>
          <div
            style={{
              width: 100,
              height: 5,
              backgroundColor: '#3b82f6',
              marginTop: 16,
              borderRadius: 3,
            }}
          />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 32,
            color: '#d1d5db',
            margin: 0,
            marginBottom: 50,
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Herramientas prácticas online gratuitas
        </p>

        {/* Features Grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 16,
            maxWidth: 900,
          }}
        >
          {[
            'QR',
            'Texto',
            'Contraseñas',
            'UUID',
            'WhatsApp',
            'URLs',
            'Imágenes',
          ].map((feature) => (
            <div
              key={feature}
              style={{
                backgroundColor: '#1f2937',
                color: '#60a5fa',
                padding: '10px 20px',
                borderRadius: 8,
                fontSize: 18,
                fontWeight: 600,
                border: '2px solid #374151',
              }}
            >
              {feature}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '6px 16px',
              borderRadius: 16,
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            100% Gratis
          </div>
          <div
            style={{
              backgroundColor: '#8b5cf6',
              color: 'white',
              padding: '6px 16px',
              borderRadius: 16,
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            Sin Registro
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
