import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { BLOG_POSTS } from '@/data/blog'
import { formatDate, cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, product updates, customer stories and guides from the Tekanthem team.',
}

export default function BlogIndexPage() {
  const featured = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0]
  const rest = BLOG_POSTS.filter((p) => p.slug !== featured.slug)

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-28">
        <div className="container-pro">
          <SectionHeading
            eyebrow="Tekanthem Blog"
            title={<>Ideas, product, and customer stories</>}
            description="What we're learning while building the operating system for Indian business."
          />
        </div>
      </section>

      {/* Featured */}
      <section className="pb-12">
        <div className="container-pro">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-8 rounded-3xl border border-ink-200 bg-white p-6 sm:p-8 shadow-card hover:shadow-elevated transition"
          >
            <div
              className={cn(
                'relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl bg-gradient-to-br overflow-hidden',
                featured.cover,
              )}
            >
              <div className="absolute inset-0 bg-grid-faint bg-[size:24px_24px] opacity-20" />
              <div className="absolute bottom-4 left-4 text-white/90 text-sm font-medium">
                {featured.category}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <Badge variant="accent">Featured</Badge>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink-900 group-hover:text-brand-700 transition">
                {featured.title}
              </h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-ink-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(featured.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {featured.readingMinutes} min read
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 font-semibold text-brand-700">
                Read article
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 pb-24">
        <div className="container-pro">
          <h2 className="font-display text-2xl font-bold text-ink-900">
            Latest articles
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-ink-200 bg-white overflow-hidden shadow-card hover:shadow-elevated transition"
              >
                <div
                  className={cn(
                    'aspect-[16/10] bg-gradient-to-br relative',
                    post.cover,
                  )}
                >
                  <div className="absolute inset-0 bg-grid-faint bg-[size:24px_24px] opacity-20" />
                  <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-ink-900 leading-snug group-hover:text-brand-700 transition">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 pt-4 border-t border-ink-100 flex items-center justify-between text-xs text-ink-500">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingMinutes} min
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
