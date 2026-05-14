import type { Metadata } from 'next'
import { ProductPage } from '@/components/sections/ProductPage'
import { PRODUCT_DATA } from '@/data/products'

export const metadata: Metadata = {
  title: 'CRM',
  description:
    'A CRM your sales team will actually use — pipeline, contacts, automations, and analytics built for B2B teams.',
}

export default function CRMPage() {
  return (
    <ProductPage
      product={PRODUCT_DATA.crm}
      accent="from-violet-500 to-purple-600"
    />
  )
}
