import type { Metadata } from 'next'
import { ProductSuite } from '@/components/sections/ProductSuite'
import { Features } from '@/components/sections/Features'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore the Tekanthem Suite — Finance, Payroll, C&F, and CRM. One platform for every business workflow.',
}

export default function ProductsIndexPage() {
  return (
    <>
      <section className="section-page-head">
        <div className="container-pro max-w-3xl text-center">
          <span className="eyebrow">The Tekanthem Suite</span>
          <h1 className="heading-1 mt-6 text-balance">
            Four products. One unified business platform.
          </h1>
          <p className="lead mt-6">
            Choose any product to get started. Add more as your business grows
            — everything talks to everything, with zero integrations.
          </p>
        </div>
      </section>
      <ProductSuite />
      <Features />
      <CTA />
    </>
  )
}
