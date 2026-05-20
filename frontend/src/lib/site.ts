export const SITE = {
  name: 'Tekanthem',
  tagline: 'One platform. Every business workflow.',
  description:
    'Tekanthem is an integrated business operating system — Finance, Payroll, C&F and CRM — built for growing enterprises in India and beyond.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tekanthem.com',
  email: 'sales@tekanthem.com',
  phone: '+91 77768 33097',
  address:
    'Registered Office: 1064 Sector-A, Pocket-B, Vasant Kunj, New Delhi - 110070',
  social: {
    twitter: 'https://twitter.com/tekanthem',
    linkedin: 'https://linkedin.com/company/tekanthem',
    github: 'https://github.com/tekanthem',
    youtube: 'https://youtube.com/@tekanthem',
  },
} as const

export const PRODUCTS = [
  {
    slug: 'finance',
    name: 'Tekanthem Finance',
    short: 'Finance',
    tagline: 'Modern accounting that scales',
    description:
      'GST-ready accounting, invoicing, banking, expense tracking and financial reporting — all in one place.',
    icon: 'wallet',
    color: 'from-blue-500 to-indigo-600',
    accent: 'bg-blue-50 text-blue-700',
    href: '/products/finance',
  },
  {
    slug: 'payroll',
    name: 'Tekanthem Payroll',
    short: 'Payroll',
    tagline: 'Effortless payroll, every cycle',
    description:
      'Run payroll in minutes with statutory compliance, PF/ESI/TDS, payslips and direct disbursements.',
    icon: 'banknote',
    color: 'from-emerald-500 to-teal-600',
    accent: 'bg-emerald-50 text-emerald-700',
    href: '/products/payroll',
  },
  {
    slug: 'cnf',
    name: 'Tekanthem C&F',
    short: 'C&F',
    tagline: 'Clearing & forwarding, simplified',
    description:
      'End-to-end logistics — shipment tracking, customs documentation, freight billing and partner management.',
    icon: 'truck',
    color: 'from-amber-500 to-orange-600',
    accent: 'bg-amber-50 text-amber-700',
    href: '/products/cnf',
  },
  {
    slug: 'crm',
    name: 'Tekanthem CRM',
    short: 'CRM',
    tagline: 'Customer relationships that convert',
    description:
      'Pipeline, contacts, deal stages, automations and analytics — built for sales teams who close.',
    icon: 'users',
    color: 'from-violet-500 to-purple-600',
    accent: 'bg-violet-50 text-violet-700',
    href: '/products/crm',
  },
] as const

export const MAIN_NAV = [
  {
    label: 'Products',
    href: '/products',
    children: PRODUCTS.map((p) => ({
      label: p.name,
      description: p.tagline,
      href: p.href,
      icon: p.icon,
    })),
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export const FOOTER_LINKS = {
  Products: [
    { label: 'Finance', href: '/products/finance' },
    { label: 'Payroll', href: '/products/payroll' },
    { label: 'C&F', href: '/products/cnf' },
    { label: 'CRM', href: '/products/crm' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Help Center', href: '/help' },
    { label: 'API Docs', href: '/docs' },
    { label: 'Changelog', href: '/changelog' },
  ],
  Legal: [
    { label: 'Terms', href: '/legal/terms' },
    { label: 'Privacy', href: '/legal/privacy' },
    { label: 'Security', href: '/legal/security' },
    { label: 'GST Compliance', href: '/legal/gst' },
  ],
} as const
