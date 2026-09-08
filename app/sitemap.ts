import type { MetadataRoute } from 'next'

import { getAllPosts, getAllTags } from '@/lib/blog'

const SITE_URL = 'https://opsify.art'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/plugins`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/templates`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/toolbox`, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.modDatetime ?? post.pubDatetime,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const tagRoutes: MetadataRoute.Sitemap = getAllTags().map(({ slug }) => ({
    url: `${SITE_URL}/blog/tags/${slug}`,
    changeFrequency: 'weekly',
    priority: 0.4,
  }))

  return [...staticRoutes, ...postRoutes, ...tagRoutes]
}
