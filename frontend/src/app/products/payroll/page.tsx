import type { Metadata } from 'next'
import { ProductPage } from '@/components/sections/ProductPage'
import { PRODUCT_DATA } from '@/data/products'

export const metadata: Metadata = {
  title: 'Payroll',
  description:
    'Run accurate, compliant payroll in minutes. PF, ESI, TDS, payslips, and direct disbursements — all automated.',
}

export default function PayrollPage() {
  return (
    <ProductPage
      product={PRODUCT_DATA.payroll}
      accent="from-emerald-500 to-teal-600"
    />
  )
}
