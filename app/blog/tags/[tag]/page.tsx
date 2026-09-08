import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

import { getAllTags, getPostsByTag } from '@/lib/blog'

export async function generateStaticParams() {
  return getAllTags().map(({ slug }) => ({ tag: slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const { tag } = await params
  const entry = getAllTags().find((t) => t.slug === tag)
  if (!entry) return {}
  return {
    title: `#${entry.tag}`,
    description: `Posts tagged "${entry.tag}" — guides for new e-commerce sellers.`,
  }
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const entry = getAllTags().find((t) => t.slug === tag)
  if (!entry) notFound()

  const posts = getPostsByTag(tag)

  return (
    <div className='mx-auto w-full max-w-6xl px-6 py-10'>
      <header className='mb-8'>
        <Link href='/blog' className='text-sm text-zinc-500 transition hover:text-zinc-800'>
          ← Back to Blog
        </Link>
        <h1 className='mt-4 text-3xl font-semibold tracking-tight text-zinc-900'>
          #{entry.tag}
        </h1>
      </header>

      <section className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {posts.map((post) => (
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
    </div>
  )
}
