import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Generador de Contraseñas Seguras'
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
          backgroundColor: '#134e4a',
          backgroundImage: 'linear-gradient(135deg, #134e4a 0%, #0f766e 100%)',
          padding: 60,
        }}
      >
        {/* Lock Icon */}
        <div
          style={{
            fontSize: 100,
            marginBottom: 30,
          }}
        >
          🔒
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
          Generador de Contraseñas
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 30,
            color: '#99f6e4',
            margin: 0,
            marginBottom: 50,
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Crea contraseñas fuertes y seguras al instante
        </p>

        {/* Password Example */}
        <div
          style={{
            backgroundColor: '#042f2e',
            border: '3px solid #14b8a6',
            borderRadius: 16,
            padding: '24px 48px',
            marginBottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <div
            style={{
              color: '#5eead4',
              fontSize: 36,
              fontWeight: 700,
              fontFamily: 'monospace',
              letterSpacing: 2,
            }}
          >
            K9$mP#Lx2Qw@
          </div>
          <div
            style={{
              backgroundColor: '#14b8a6',
              color: 'white',
              padding: '8px 20px',
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            FUERTE
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
              backgroundColor: '#0d9488',
              color: 'white',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            🎲 Aleatorias
          </div>
          <div
            style={{
              backgroundColor: '#14b8a6',
              color: 'white',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            ⚙️ Personalizables
          </div>
          <div
            style={{
              backgroundColor: '#2dd4bf',
              color: '#042f2e',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            🔐 100% Seguras
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            color: '#99f6e4',
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
