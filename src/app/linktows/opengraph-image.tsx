import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Generador de Enlaces de WhatsApp'
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
          backgroundColor: '#065f46',
          backgroundImage: 'linear-gradient(135deg, #065f46 0%, #059669 100%)',
          padding: 60,
        }}
      >
        {/* WhatsApp Icon */}
        <div
          style={{
            fontSize: 120,
            marginBottom: 30,
          }}
        >
          💬
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: 'white',
            margin: 0,
            marginBottom: 20,
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          Enlaces de WhatsApp
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 32,
            color: '#a7f3d0',
            margin: 0,
            marginBottom: 50,
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Genera enlaces directos con mensaje predefinido
        </p>

        {/* Link Example */}
        <div
          style={{
            backgroundColor: '#064e3b',
            border: '3px solid #10b981',
            borderRadius: 16,
            padding: '24px 48px',
            marginBottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              color: '#6ee7b7',
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            wa.me/
          </div>
          <div
            style={{
              color: '#d1fae5',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            123456789
          </div>
          <div
            style={{
              backgroundColor: '#10b981',
              width: 8,
              height: 8,
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              color: '#6ee7b7',
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            ?text=Hola...
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
              backgroundColor: '#047857',
              color: 'white',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            📱 WhatsApp Business
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
            ⚡ Sin guardar contacto
          </div>
          <div
            style={{
              backgroundColor: '#34d399',
              color: '#064e3b',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            💼 Para negocios
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            color: '#a7f3d0',
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
