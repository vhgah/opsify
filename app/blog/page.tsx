import type { Metadata } from 'next'
import Link from 'next/link'

import { getPostsByPlatform, type Platform } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guides for new sellers setting up their first store on Shopify, WooCommerce, and Squarespace.',
  alternates: { canonical: '/blog' },
}

const PLATFORMS: Array<{ id: Platform | 'all'; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'shopify', label: 'Shopify' },
  { id: 'woocommerce', label: 'WooCommerce' },
  { id: 'squarespace', label: 'Squarespace' },
]

function isPlatform(x: string | undefined): x is Platform {
  return x === 'shopify' || x === 'woocommerce' || x === 'squarespace' || x === 'wix'
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ platform?: string }>
}) {
  const { platform: rawPlatform } = await searchParams
  const platform: Platform | 'all' = isPlatform(rawPlatform) ? rawPlatform : 'all'
  const posts = getPostsByPlatform(platform)

  return (
    <div className='mx-auto w-full max-w-6xl px-6 py-10'>
      <header className='mb-8'>
        <h1 className='text-4xl font-semibold tracking-tight text-zinc-900'>Blog</h1>
        <p className='mt-3 text-base text-zinc-600'>
          Guides for new sellers setting up their first store on Shopify, WooCommerce, and
          Squarespace.
        </p>

        <nav className='mt-5 flex flex-wrap gap-2'>
          {PLATFORMS.map((p) => {
            const active = p.id === platform
            const href = p.id === 'all' ? '/blog' : `/blog?platform=${p.id}`
            return (
              <Link
                key={p.id}
                href={href}
                className={[
                  'rounded-full border px-3 py-1 text-sm transition',
                  active
                    ? 'border-zinc-900 bg-zinc-900 text-white'
                    : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50',
                ].join(' ')}
              >
                {p.label}
              </Link>
            )
          })}
        </nav>
      </header>

      <section className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className='group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm'
          >
            {post.ogImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.ogImage}
                alt=''
                className='aspect-[16/9] w-full bg-zinc-100 object-cover'
                loading='lazy'
              />
            )}

            <div className='p-5'>
              <div className='mb-2 flex flex-wrap gap-1.5'>
                {post.platform.map((p) => (
                  <span
                    key={p}
                    className='rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium capitalize text-zinc-600'
                  >
                    {p}
                  </span>
                ))}
              </div>
              <h2 className='text-lg font-semibold leading-snug text-zinc-900 group-hover:underline'>
                {post.title}
              </h2>
              <p className='mt-2 text-sm leading-6 text-zinc-600'>{post.description}</p>
            </div>
          </Link>
        ))}
      </section>

      {posts.length === 0 && (
        <p className='py-16 text-center text-sm text-zinc-500'>No posts yet for this platform.</p>
      )}
    </div>
  )
}
