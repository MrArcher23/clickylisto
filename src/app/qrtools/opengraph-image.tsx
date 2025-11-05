import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Generador de Códigos QR Gratis'
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
          backgroundImage: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
          padding: 60,
        }}
      >
        {/* QR Icon Representation */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            marginBottom: 40,
          }}
        >
          {[0, 1, 2].map((row) => (
            <div key={row} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[0, 1, 2].map((col) => (
                <div
                  key={col}
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: (row + col) % 2 === 0 ? 'white' : '#6366f1',
                    borderRadius: 4,
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 68,
            fontWeight: 900,
            color: 'white',
            margin: 0,
            marginBottom: 20,
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          Generador de Códigos QR
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 32,
            color: '#c7d2fe',
            margin: 0,
            marginBottom: 50,
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Crea códigos QR en segundos • Descarga PNG • Sin límites
        </p>

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
              backgroundColor: '#4f46e5',
              color: 'white',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            ⚡ Instantáneo
          </div>
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
            📱 URLs • Textos • WiFi
          </div>
          <div
            style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            ✓ 100% Gratis
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            color: '#94a3b8',
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
