import type { Metadata } from 'next'
import { ProductPage } from '@/components/sections/ProductPage'
import { PRODUCT_DATA } from '@/data/products'

export const metadata: Metadata = {
  title: 'C&F (Clearing & Forwarding)',
  description:
    'Manage shipments, customs documentation, freight invoicing, and partner network with Tekanthem C&F.',
}

export default function CnFPage() {
  return (
    <ProductPage
      product={PRODUCT_DATA.cnf}
      accent="from-amber-500 to-orange-600"
    />
  )
}
