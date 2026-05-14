import { Hero } from '@/components/sections/Hero'
import { TrustedBy } from '@/components/sections/TrustedBy'
import { ProductSuite } from '@/components/sections/ProductSuite'
import { Features } from '@/components/sections/Features'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ProductSuite />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  )
}
