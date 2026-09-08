import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')
const SITE_URL = 'https://opsify.art'

export type Platform = 'shopify' | 'wix' | 'squarespace' | 'woocommerce'
export type SchemaType = 'HowTo' | 'FAQPage' | 'Article'

export interface Post {
  slug: string
  title: string
  description: string
  pubDatetime: string
  modDatetime: string | null
  author: string
  featured: boolean
  draft: boolean
  tags: string[]
  ogImage: string
  canonicalURL: string
  schemaType: SchemaType
  platform: Platform[]
  topic?: string
  content: string
}

function toIsoString(value: unknown): string | null {
  if (!value) return null
  const date = value instanceof Date ? value : new Date(String(value))
  return Number.isNaN(date.getTime()) ? null : date.toISOString()
}

let cache: Post[] | null = null

function readAllPosts(): Post[] {
  if (cache) return cache

  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.md'))

  cache = files.map((filename) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
    const { data, content } = matter(raw)
    const slug = typeof data.slug === 'string' && data.slug ? data.slug : filename.replace(/\.md$/, '')

    return {
      slug,
      title: data.title ?? '',
      description: data.description ?? '',
      pubDatetime: toIsoString(data.pubDatetime) ?? new Date(0).toISOString(),
      modDatetime: toIsoString(data.modDatetime),
      author: data.author ?? 'Editorial Team',
      featured: Boolean(data.featured),
      draft: Boolean(data.draft),
      tags: Array.isArray(data.tags) ? data.tags : [],
      ogImage: typeof data.ogImage === 'string' ? data.ogImage : '',
      canonicalURL: typeof data.canonicalURL === 'string' ? data.canonicalURL : '',
      schemaType: (data.schemaType as SchemaType) ?? 'Article',
      platform: Array.isArray(data.platform) ? data.platform : [],
      topic: data.topic,
      content,
    }
  })

  return cache
}

export function getAllPosts(): Post[] {
  const now = Date.now()
  return readAllPosts()
    .filter((post) => !post.draft)
    .filter((post) => new Date(post.pubDatetime).getTime() <= now)
    .sort((a, b) => new Date(b.pubDatetime).getTime() - new Date(a.pubDatetime).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug)
}

export function getPostsByPlatform(platform: Platform | 'all'): Post[] {
  const posts = getAllPosts()
  if (platform === 'all') return posts
  return posts.filter((post) => post.platform.includes(platform))
}

export function slugifyTag(tag: string): string {
  return tag.toLowerCase().trim().replace(/\s+/g, '-')
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) => post.tags.some((t) => slugifyTag(t) === tag))
}

export function getPostOgImage(post: Post): string {
  return post.ogImage || `${SITE_URL}/blog/${post.slug}/opengraph-image`
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const tagSet = new Set(post.tags.map((t) => slugifyTag(t)))

  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const sharedTags = candidate.tags.filter((t) => tagSet.has(slugifyTag(t))).length
      const sharedPlatform = candidate.platform.some((p) => post.platform.includes(p)) ? 1 : 0
      return { candidate, score: sharedTags * 2 + sharedPlatform }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ candidate }) => candidate)
}

export function getAllTags(): { tag: string; slug: string; count: number }[] {
  const counts = new Map<string, { tag: string; count: number }>()
  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      const slug = slugifyTag(tag)
      const existing = counts.get(slug)
      if (existing) {
        existing.count += 1
      } else {
        counts.set(slug, { tag, count: 1 })
      }
    }
  }
  return Array.from(counts.entries())
    .map(([slug, { tag, count }]) => ({ slug, tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag))
}
