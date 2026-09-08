import type { Metadata } from 'next'
import Link from 'next/link'

import { getAllPosts, type Post } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search Opsify guides for Shopify, WooCommerce, and Squarespace sellers.',
  alternates: { canonical: '/search' },
}

function searchPosts(query: string): Post[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  return getAllPosts().filter((post) => {
    const haystack = [post.title, post.description, ...post.tags].join(' ').toLowerCase()
    return haystack.includes(q)
  })
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const query = q ?? ''
  const results = searchPosts(query)

  return (
    <div className='mx-auto w-full max-w-6xl px-6 py-10'>
      <header className='mb-8'>
        <h1 className='text-4xl font-semibold tracking-tight text-zinc-900'>Search</h1>
        <form action='/search' method='get' className='mt-5 flex max-w-lg gap-2'>
          <input
            type='text'
            name='q'
            defaultValue={query}
            placeholder='Search guides…'
            className='w-full rounded-md border border-zinc-200 px-4 py-2 text-sm text-zinc-900 focus:border-zinc-400 focus:outline-none'
          />
          <button
            type='submit'
            className='rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white'
          >
            Search
          </button>
        </form>
      </header>

      {query && (
        <p className='mb-6 text-sm text-zinc-500'>
          {results.length} result{results.length === 1 ? '' : 's'} for &quot;{query}&quot;
        </p>
      )}

      <section className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {results.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className='group overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm'
          >
            <h2 className='text-lg font-semibold leading-snug text-zinc-900 group-hover:underline'>
              {post.title}
            </h2>
            <p className='mt-2 text-sm leading-6 text-zinc-600'>{post.description}</p>
          </Link>
        ))}
      </section>

      {query && results.length === 0 && (
        <p className='py-16 text-center text-sm text-zinc-500'>
          No guides found for &quot;{query}&quot;. Try a different term or{' '}
          <Link href='/blog' className='underline'>
            browse all guides
          </Link>
          .
        </p>
      )}
    </div>
  )
}
