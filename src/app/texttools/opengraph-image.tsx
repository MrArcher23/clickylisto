import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Convertidor de Texto: Mayúsculas a Minúsculas'
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
          backgroundColor: '#0f172a',
          backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: 60,
        }}
      >
        {/* Icon */}
        <div
          style={{
            fontSize: 120,
            marginBottom: 30,
          }}
        >
          Aa
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: 'white',
            margin: 0,
            marginBottom: 20,
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          Convertidor de Texto
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 32,
            color: '#94a3b8',
            margin: 0,
            marginBottom: 50,
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Mayúsculas ↔ minúsculas • Capitalizar • Formato
        </p>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              backgroundColor: '#1e40af',
              color: 'white',
              padding: '16px 32px',
              borderRadius: 12,
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            MAYÚSCULAS
          </div>
          <div
            style={{
              backgroundColor: '#7c3aed',
              color: 'white',
              padding: '16px 32px',
              borderRadius: 12,
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            minúsculas
          </div>
          <div
            style={{
              backgroundColor: '#059669',
              color: 'white',
              padding: '16px 32px',
              borderRadius: 12,
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Capitalizar
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginTop: 20,
          }}
        >
          <div
            style={{
              color: '#64748b',
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            ClickyListo
          </div>
          <div
            style={{
              width: 4,
              height: 4,
              backgroundColor: '#64748b',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              color: '#10b981',
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            Gratis y Rápido
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
