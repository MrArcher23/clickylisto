import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Generador de UUID'
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
          backgroundColor: '#1e1b4b',
          backgroundImage: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)',
          padding: 60,
        }}
      >
        {/* Binary Code Icon */}
        <div
          style={{
            fontSize: 100,
            marginBottom: 30,
          }}
        >
          ⚡
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
          Generador de UUID
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 30,
            color: '#ddd6fe',
            margin: 0,
            marginBottom: 50,
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Identificadores únicos universales para desarrolladores
        </p>

        {/* UUID Example */}
        <div
          style={{
            backgroundColor: '#2e1065',
            border: '3px solid #8b5cf6',
            borderRadius: 16,
            padding: '24px 48px',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              color: '#c4b5fd',
              fontSize: 32,
              fontWeight: 600,
              fontFamily: 'monospace',
              letterSpacing: 1,
            }}
          >
            a3f5c2d1-7b4e-4f8a-9c2d-1e5f6a7b8c9d
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
              backgroundColor: '#7c3aed',
              color: 'white',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            UUID v4
          </div>
          <div
            style={{
              backgroundColor: '#8b5cf6',
              color: 'white',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            💾 Para Bases de Datos
          </div>
          <div
            style={{
              backgroundColor: '#a78bfa',
              color: '#1e1b4b',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            👨‍💻 Desarrolladores
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            color: '#c4b5fd',
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
