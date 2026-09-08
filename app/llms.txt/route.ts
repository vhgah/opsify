import { getAllPosts } from '@/lib/blog'

const SITE_URL = 'https://opsify.art'

export function GET() {
  const lines = getAllPosts().map(
    (post) => `${post.title} | ${SITE_URL}/blog/${post.slug} | ${post.description}`
  )

  const body = [
    '# Opsify',
    '',
    '> Guides for new e-commerce sellers setting up stores on Shopify, WooCommerce, and Squarespace.',
    '',
    '## Blog posts',
    '',
    ...lines,
    '',
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
