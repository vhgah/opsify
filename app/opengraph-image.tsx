import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Opsify — Guides & tools for new Shopify, WooCommerce & Squarespace sellers'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          padding: 80,
        }}
      >
        <svg width={96} height={96} viewBox='0 0 64 64' fill='none'>
          <path
            d='M32 6c-13.255 0-24 10.745-24 24v28.3c0 1.6 1.87 2.48 3.12 1.47l4.63-3.76a2 2 0 0 1 2.52 0l4.62 3.76a2 2 0 0 0 2.52 0l4.62-3.76a2 2 0 0 1 2.52 0l4.62 3.76a2 2 0 0 0 2.52 0l4.62-3.76a2 2 0 0 1 2.52 0l4.63 3.76c1.25 1.01 3.12.13 3.12-1.47V30C56 16.745 45.255 6 32 6Z'
            fill='#111'
          />
          <circle cx={24} cy={31} r={5} fill='#fff' />
          <circle cx={40} cy={31} r={5} fill='#fff' />
          <circle cx={24} cy={31} r={2.5} fill='#111' />
          <circle cx={40} cy={31} r={2.5} fill='#111' />
        </svg>

        <div
          style={{
            marginTop: 40,
            fontSize: 64,
            fontWeight: 700,
            color: '#333333',
            letterSpacing: -1,
          }}
        >
          Opsify
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            color: '#666666',
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Guides & tools for new Shopify, WooCommerce & Squarespace sellers
        </div>
      </div>
    ),
    { ...size }
  )
}
