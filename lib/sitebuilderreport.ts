export type SitebuilderreportCategory = 'all' | 'tutorials' | 'websites' | 'entrepreneurship'

export type SitebuilderreportPost = {
  href: string
  title: string
  excerpt: string
  imageSrc?: string
}

export type SitebuilderreportPostDetail = SitebuilderreportPost & {
  slug: string
  markdownContent: string
}

export type SitebuilderreportLocalIndex = {
  scrapedAt: string
  baseUrl: string
  categories: Record<
    SitebuilderreportCategory,
    {
      sourceUrl: string
      posts: SitebuilderreportPost[]
    }
  >
}

export function getSitebuilderreportCategoryHref(category: SitebuilderreportCategory) {
  const params = new URLSearchParams()
  if (category !== 'all') params.set('category', category)
  const qs = params.toString()
  return qs ? `/blogs?${qs}` : '/blogs'
}

export function getSitebuilderreportLocalIndex(): SitebuilderreportLocalIndex {
  // Static import so Next can bundle it and render fully static HTML.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const data = require('@/data/sitebuilderreport/blog-index.json') as SitebuilderreportLocalIndex
  return data
}

export function getSitebuilderreportPostsFromLocalIndex(category: SitebuilderreportCategory) {
  const idx = getSitebuilderreportLocalIndex()
  const cat = idx.categories[category] ?? idx.categories.all
  return {
    scrapedAt: idx.scrapedAt,
    sourceUrl: cat.sourceUrl,
    posts: cat.posts,
  }
}

export function hrefToSlug(href: string): string {
  return href.replace(/^https?:\/\/[^/]+\//, '').replace(/\/$/, '')
}

export function getLocalPostSlugs(): string[] {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const fs = require('fs') as typeof import('fs')
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const path = require('path') as typeof import('path')
  const dir = path.join(process.cwd(), 'data/sitebuilderreport/posts')
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter((f: string) => f.endsWith('.md'))
    .map((f: string) => f.replace(/\.md$/, ''))
}

export function getPostDetailBySlug(slug: string): SitebuilderreportPostDetail | null {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const fs = require('fs') as typeof import('fs')
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const path = require('path') as typeof import('path')
  const filePath = path.join(process.cwd(), 'data/sitebuilderreport/posts', `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const markdownContent = fs.readFileSync(filePath, 'utf-8')

  const idx = getSitebuilderreportLocalIndex()
  const allPosts = idx.categories.all.posts
  const targetHref = `${idx.baseUrl}/${slug}`
  const meta = allPosts.find((p) => p.href === targetHref) ?? {
    href: targetHref,
    title: slug,
    excerpt: '',
  }

  return { ...meta, slug, markdownContent }
}

