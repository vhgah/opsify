import type { Metadata } from 'next'
import Link from 'next/link'

import {
  getSitebuilderreportCategoryHref,
  getSitebuilderreportPostsFromLocalIndex,
  getLocalPostSlugs,
  hrefToSlug,
  type SitebuilderreportCategory,
} from '@/lib/sitebuilderreport'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Guides and tips to help you launch your new thing.',
}

const CATEGORIES: Array<{ id: SitebuilderreportCategory; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'tutorials', label: 'Tutorials' },
  { id: 'websites', label: 'Websites' },
  { id: 'entrepreneurship', label: 'Entrepreneurship' },
]

function isCategory(x: string | undefined): x is SitebuilderreportCategory {
  return x === 'tutorials' || x === 'websites' || x === 'entrepreneurship' || x === 'all'
}

export default async function BlogsPage(props: {
  searchParams?: Record<string, string | string[] | undefined>
}) {
  const searchParams = props.searchParams ?? {}
  const raw = typeof searchParams.category === 'string' ? searchParams.category : undefined
  const category: SitebuilderreportCategory = isCategory(raw) ? raw : 'all'

  const { posts, sourceUrl, scrapedAt } = getSitebuilderreportPostsFromLocalIndex(category)
  const localSlugs = new Set(getLocalPostSlugs())

  return (
    <div className='mx-auto w-full max-w-6xl px-6 py-10'>
      <header className='mb-8'>
        <h1 className='text-4xl font-semibold tracking-tight text-zinc-900'>Blog</h1>
        <p className='mt-3 text-base text-zinc-600'>Guides and tips to help you launch your new thing.</p>

        <nav className='mt-5 flex flex-wrap gap-2'>
          {CATEGORIES.map((c) => {
            const active = c.id === category
            return (
              <Link
                key={c.id}
                href={getSitebuilderreportCategoryHref(c.id)}
                className={[
                  'rounded-full border px-3 py-1 text-sm transition',
                  active
                    ? 'border-zinc-900 bg-zinc-900 text-white'
                    : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50',
                ].join(' ')}
              >
                {c.label}
              </Link>
            )
          })}
        </nav>
      </header>

      <section className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {posts.map((p) => {
          const slug = hrefToSlug(p.href)
          const isLocal = localSlugs.has(slug)
          const linkProps = isLocal
            ? { href: `/blogs/${slug}` }
            : { href: p.href, target: '_blank' as const, rel: 'noreferrer' }

          return (
            <a
              key={p.href}
              {...linkProps}
              className='group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm'
            >
              {p.imageSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.imageSrc}
                  alt=''
                  className='aspect-[16/9] w-full bg-zinc-100 object-cover'
                  loading='lazy'
                />
              ) : (
                <div className='aspect-[16/9] w-full bg-zinc-100' />
              )}

              <div className='p-5'>
                <h2 className='text-lg font-semibold leading-snug text-zinc-900 group-hover:underline'>{p.title}</h2>
                {p.excerpt ? <p className='mt-2 text-sm leading-6 text-zinc-600'>{p.excerpt}</p> : null}
              </div>
            </a>
          )
        })}
      </section>

      <footer className='mt-10 text-sm text-zinc-500'>
        Data snapshot:{' '}
        <span className='font-mono'>{new Date(scrapedAt).toISOString().slice(0, 10)}</span>. Source:{' '}
        <a href={sourceUrl} target='_blank' rel='noreferrer' className='underline hover:text-zinc-700'>
          Site Builder Report
        </a>
      </footer>
    </div>
  )
}

