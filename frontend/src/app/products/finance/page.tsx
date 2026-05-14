import type { Metadata } from 'next'
import { ProductPage } from '@/components/sections/ProductPage'
import { PRODUCT_DATA } from '@/data/products'

export const metadata: Metadata = {
  title: 'Finance',
  description:
    'GST-ready accounting software with invoicing, bank reconciliation, expense management, and financial reporting — built for growing Indian businesses.',
}

export default function FinancePage() {
  return (
    <ProductPage
      product={PRODUCT_DATA.finance}
      accent="from-blue-500 to-indigo-600"
    />
  )
}
