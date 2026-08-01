import { notFound } from 'next/navigation'
import Link from 'next/link'
import { marked } from 'marked'
import type { Metadata } from 'next'
import {
  getPostDetailBySlug,
  getLocalPostSlugs,
} from '@/lib/sitebuilderreport'

export async function generateStaticParams() {
  return getLocalPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostDetailBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostDetailBySlug(slug)
  if (!post) notFound()

  const htmlContent = await marked(post.markdownContent)

  return (
    <div className='mx-auto w-full max-w-3xl px-6 py-10'>
      <nav className='mb-8'>
        <Link
          href='/blogs'
          className='text-sm text-zinc-500 hover:text-zinc-800 transition'
        >
          ← Back to Blog
        </Link>
      </nav>

      {post.imageSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.imageSrc}
          alt=''
          className='mb-8 aspect-[16/9] w-full rounded-2xl object-cover bg-zinc-100'
        />
      )}

      <header className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight text-zinc-900 leading-snug'>
          {post.title}
        </h1>
        {post.excerpt && (
          <p className='mt-3 text-base text-zinc-500 leading-relaxed'>{post.excerpt}</p>
        )}
      </header>

      <article
        className='prose prose-zinc max-w-none'
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      <footer className='mt-12 border-t border-zinc-200 pt-6'>
        <a
          href={post.href}
          target='_blank'
          rel='noreferrer'
          className='text-sm text-zinc-500 hover:text-zinc-800 underline transition'
        >
          View original on Site Builder Report →
        </a>
      </footer>
    </div>
  )
}
