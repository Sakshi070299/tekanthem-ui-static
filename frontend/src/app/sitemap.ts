import type { MetadataRoute } from 'next'
import { SITE, PRODUCTS } from '@/lib/site'
import { BLOG_POSTS } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url
  const lastModified = new Date()

  const staticPages = [
    '',
    '/about',
    '/pricing',
    '/contact',
    '/products',
    '/blog',
    '/legal/terms',
    '/legal/privacy',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.7,
  }))

  const productPages = PRODUCTS.map((p) => ({
    url: `${base}${p.href}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...productPages, ...blogPages]
}
