import Link from 'next/link'

import type { Post } from '@/lib/blog'

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null

  return (
    <section className='mt-12 border-t border-zinc-200 pt-8'>
      <h2 className='text-lg font-semibold text-zinc-900'>Related guides</h2>
      <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3'>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className='group rounded-xl border border-zinc-200 p-4 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm'
          >
            <h3 className='text-sm font-semibold leading-snug text-zinc-900 group-hover:underline'>
              {post.title}
            </h3>
            <p className='mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-500'>
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
