import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Acortador de Enlaces'
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
          backgroundColor: '#7c2d12',
          backgroundImage: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 100%)',
          padding: 60,
        }}
      >
        {/* Link Icon */}
        <div
          style={{
            fontSize: 120,
            marginBottom: 30,
          }}
        >
          🔗
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
          Acortador de Enlaces
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 32,
            color: '#fed7aa',
            margin: 0,
            marginBottom: 50,
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Transforma URLs largas en enlaces cortos y compartibles
        </p>

        {/* Link Transformation Visual */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            marginBottom: 40,
          }}
        >
          {/* Long URL */}
          <div
            style={{
              backgroundColor: '#431407',
              border: '2px solid #9a3412',
              borderRadius: 12,
              padding: '16px 32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                color: '#fdba74',
                fontSize: 24,
                fontWeight: 600,
                maxWidth: 600,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              https://ejemplo.com/pagina/muy/larga/con/parametros?id=12345...
            </div>
          </div>

          {/* Arrow */}
          <div
            style={{
              fontSize: 48,
              textAlign: 'center',
            }}
          >
            ⬇️
          </div>

          {/* Short URL */}
          <div
            style={{
              backgroundColor: '#ea580c',
              borderRadius: 12,
              padding: '20px 40px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                color: 'white',
                fontSize: 32,
                fontWeight: 700,
              }}
            >
              short.ly/abc123
            </div>
            <div
              style={{
                backgroundColor: '#10b981',
                color: 'white',
                padding: '6px 16px',
                borderRadius: 6,
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              ✓ CORTO
            </div>
          </div>
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: 16,
          }}
        >
          <div
            style={{
              backgroundColor: '#c2410c',
              color: 'white',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            📊 Fácil de compartir
          </div>
          <div
            style={{
              backgroundColor: '#fb923c',
              color: '#431407',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            ⚡ Al instante
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            color: '#fed7aa',
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
