import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { BLOG_POSTS } from '@/data/blog'
import { formatDate, cn } from '@/lib/utils'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  ).slice(0, 3)

  return (
    <>
      <article className="section-article">
        <div className="container-pro">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-ink-600 hover:text-brand-700"
          >
            <ArrowLeft className="h-4 w-4" />
            All articles
          </Link>

          <div className="mt-8">
            <Badge>{post.category}</Badge>
            <h1 className="heading-1 mt-5 text-balance">{post.title}</h1>
            <p className="lead mt-6">{post.excerpt}</p>

            <div className="mt-8 flex items-center gap-6 text-sm text-ink-600 pb-6 border-b border-ink-200">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-200 to-accent-200 flex items-center justify-center font-bold text-ink-800">
                  {post.author
                    .split(' ')
                    .map((s) => s[0])
                    .join('')}
                </div>
                <div>
                  <div className="font-medium text-ink-900">{post.author}</div>
                  <div className="text-xs text-ink-500">{post.authorRole}</div>
                </div>
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readingMinutes} min
              </span>
            </div>
          </div>

          <div
            className={cn(
              'mt-10 aspect-[16/9] rounded-3xl bg-gradient-to-br overflow-hidden relative',
              post.cover,
            )}
          >
            <div className="absolute inset-0 bg-grid-faint bg-[size:32px_32px] opacity-20" />
          </div>

          <div className="mt-10 prose prose-lg max-w-none">
            {post.content.split('\n\n').map((para, i) => (
              <p
                key={i}
                className="mb-6 text-ink-800 leading-[1.75] text-lg"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-ink-200 flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm text-ink-600">
              Written by{' '}
              <span className="font-semibold text-ink-900">{post.author}</span>
              , {post.authorRole}
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              More articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-block">
          <div className="container-pro">
            <h2 className="font-display text-2xl font-bold text-ink-900">
              More from {post.category}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-ink-200 bg-white overflow-hidden hover:shadow-elevated transition"
                >
                  <div
                    className={cn(
                      'aspect-[16/10] bg-gradient-to-br',
                      p.cover,
                    )}
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-ink-900 group-hover:text-brand-700">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-600 line-clamp-2">
                      {p.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  )
}
