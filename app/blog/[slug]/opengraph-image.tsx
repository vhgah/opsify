import { ImageResponse } from 'next/og'

import { getPostBySlug } from '@/lib/blog'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const title = post?.title ?? 'Opsify'
  const platforms = post?.platform ?? []

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          padding: 72,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg width={48} height={48} viewBox='0 0 64 64' fill='none'>
            <path
              d='M32 6c-13.255 0-24 10.745-24 24v28.3c0 1.6 1.87 2.48 3.12 1.47l4.63-3.76a2 2 0 0 1 2.52 0l4.62 3.76a2 2 0 0 0 2.52 0l4.62-3.76a2 2 0 0 1 2.52 0l4.62 3.76a2 2 0 0 0 2.52 0l4.62-3.76a2 2 0 0 1 2.52 0l4.63 3.76c1.25 1.01 3.12.13 3.12-1.47V30C56 16.745 45.255 6 32 6Z'
              fill='#111'
            />
            <circle cx={24} cy={31} r={5} fill='#fff' />
            <circle cx={40} cy={31} r={5} fill='#fff' />
            <circle cx={24} cy={31} r={2.5} fill='#111' />
            <circle cx={40} cy={31} r={2.5} fill='#111' />
          </svg>
          <div style={{ fontSize: 32, fontWeight: 700, color: '#333333' }}>Opsify</div>
        </div>

        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#333333',
            letterSpacing: -1,
          }}
        >
          {title}
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          {platforms.map((p) => (
            <div
              key={p}
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: '#3c7be1',
                border: '2px solid #3c7be1',
                borderRadius: 999,
                padding: '8px 20px',
                textTransform: 'capitalize',
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
