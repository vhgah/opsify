import { notFound } from 'next/navigation'
import Link from 'next/link'
import { marked } from 'marked'
import type { Metadata } from 'next'

import { getAllSlugs, getPostBySlug, getPostOgImage, getRelatedPosts, slugifyTag } from '@/lib/blog'
import { buildJsonLd } from '@/lib/postSchema'
import { RelatedPosts } from '@/components/ghostplugins/RelatedPosts'

const SITE_URL = 'https://opsify.art'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const url = post.canonicalURL || `${SITE_URL}/blog/${post.slug}`
  const image = getPostOgImage(post)

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.pubDatetime,
      modifiedTime: post.modDatetime ?? post.pubDatetime,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [image],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const htmlContent = await marked(post.content)
  const jsonLd = buildJsonLd(post)
  const relatedPosts = getRelatedPosts(post)

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  }

  return (
    <div className='mx-auto w-full max-w-[var(--size-copy)] px-6 py-10'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <nav className='mb-8'>
        <Link href='/blog' className='text-sm text-zinc-500 transition hover:text-zinc-800'>
          ← Back to Blog
        </Link>
      </nav>

      <header className='mb-8'>
        <div className='mb-3 flex flex-wrap gap-1.5'>
          {post.platform.map((p) => (
            <span
              key={p}
              className='rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium capitalize text-zinc-600'
            >
              {p}
            </span>
          ))}
        </div>
        <h1 className='text-3xl font-bold leading-snug tracking-tight text-zinc-900'>
          {post.title}
        </h1>
        <p className='mt-3 text-base leading-relaxed text-zinc-500'>{post.description}</p>
      </header>

      <article
        className='prose prose-zinc max-w-none'
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {post.tags.length > 0 && (
        <footer className='mt-12 flex flex-wrap gap-2 border-t border-zinc-200 pt-6'>
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tags/${slugifyTag(tag)}`}
              className='rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50'
            >
              #{tag}
            </Link>
          ))}
        </footer>
      )}

      <RelatedPosts posts={relatedPosts} />
    </div>
  )
}
