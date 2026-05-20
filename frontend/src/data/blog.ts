export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: 'Product' | 'Compliance' | 'Customer Stories' | 'Engineering' | 'Guides'
  author: string
  authorRole: string
  publishedAt: string
  readingMinutes: number
  cover: string // gradient class for placeholder
  content: string // markdown-ish, rendered as paragraphs
  featured?: boolean
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'gst-2026-changes',
    title: 'GST 2026: Three changes every Indian business should prepare for',
    excerpt:
      'From e-invoice threshold revisions to new return formats, here are the GST changes coming into effect this year and how to stay ahead.',
    category: 'Compliance',
    author: 'Meera Krishnan',
    authorRole: 'Co-founder & CTO',
    publishedAt: '2026-05-02',
    readingMinutes: 7,
    cover: 'from-blue-500 to-indigo-600',
    featured: true,
    content: `The Indian GST framework is evolving rapidly in 2026. Three changes stand out for every business — large or small — and preparing for them now means fewer surprises later.

First, the e-invoicing threshold is set to drop again. Businesses with an aggregate turnover above ₹5 crore have been covered since 2023, and the next phase targets businesses above ₹3 crore. If you're approaching that bracket, generating IRNs from your accounting system is no longer optional.

Second, GSTR-1A is becoming a standard part of the monthly cycle. This optional amendment return lets you correct mistakes in GSTR-1 before filing GSTR-3B. It's a welcome change that reduces the back-and-forth with the GSTN portal.

Third, the GST Council is pushing for tighter ITC matching. Input tax credit claims will be auto-populated from GSTR-2B and reconciled against your books. Mismatches will be flagged in real time — which means your books need to be accurate, current, and reconciled continuously, not just at month-end.

Tekanthem Finance handles all three changes out of the box. E-invoice generation is automatic, GSTR-1A is just a click, and ITC reconciliation runs in the background, flagging issues before they become problems.`,
  },
  {
    slug: 'closing-books-faster',
    title: 'How Helix Healthcare closed their books 4× faster with Tekanthem',
    excerpt:
      'A case study on replacing three disconnected tools with one integrated platform — and what changed in the first 90 days.',
    category: 'Customer Stories',
    author: 'Priya Nair',
    authorRole: 'CFO, Helix Healthcare',
    publishedAt: '2026-04-28',
    readingMinutes: 6,
    cover: 'from-emerald-500 to-teal-600',
    content: `Helix Healthcare runs eight diagnostic centres across South India. Before Tekanthem, their finance team used Tally for accounting, an Excel-based payroll, and a separate CRM for patient relationships. Month-end close took 9 working days.

After switching to Tekanthem in early 2026, that number dropped to 2 days. Here's what changed.

The first win was bank reconciliation. With 30+ daily transactions across 8 branches, manual matching was the biggest bottleneck. Tekanthem's auto-categorization handled 90% of transactions automatically — the team only needed to review exceptions.

The second was inter-branch transfers. Previously, each branch sent JV entries to head office, and the consolidation was done in spreadsheets. With Tekanthem's multi-branch architecture, inter-branch entries are recorded once and reflected everywhere in real time.

The third was vendor payments. Approval workflows that used to live in WhatsApp now have a proper audit trail, with role-based limits and digital signatures.

The result: a 4× faster close, near-zero data entry errors, and a finance team that finally has time to do analysis instead of reconciliation.`,
  },
  {
    slug: 'tekanthem-ai-assist',
    title: 'Introducing Tekanthem AI Assist: your business copilot',
    excerpt:
      'We just rolled out AI Assist across the entire Tekanthem Suite. Here\'s what it can do today, and where it\'s going.',
    category: 'Product',
    author: 'Devansh Patel',
    authorRole: 'Head of Product',
    publishedAt: '2026-04-22',
    readingMinutes: 5,
    cover: 'from-violet-500 to-purple-600',
    content: `Today we're excited to launch Tekanthem AI Assist — an intelligent copilot built into every product in the Tekanthem Suite. It's not a chatbot. It's a working assistant that understands your business data.

In Finance, AI Assist auto-categorizes bank transactions with 96% accuracy on the first pass, drafts follow-up emails for overdue invoices, and answers questions like "what was our gross margin in Q4 vs Q3?" in plain English.

In Payroll, it reviews salary structures for compliance gaps, flags potential TDS shortfalls, and suggests optimizations like LTA structuring.

In C&F, it predicts shipment delays based on historical patterns, drafts customs queries, and reconciles freight invoices line by line.

In CRM, it summarizes call recordings, scores leads, drafts follow-ups, and surfaces the next best action for every deal.

AI Assist is included free for all Business and Enterprise customers. Growth plan customers get 500 AI actions per month at no extra cost.`,
  },
  {
    slug: 'choosing-payroll-software',
    title: 'How to choose payroll software for an Indian business',
    excerpt:
      'Statutory compliance, employee experience, integration depth — what to look for and what to avoid when evaluating payroll platforms.',
    category: 'Guides',
    author: 'Anjali Rao',
    authorRole: 'People Ops Lead',
    publishedAt: '2026-04-15',
    readingMinutes: 9,
    cover: 'from-amber-500 to-orange-600',
    content: `Choosing payroll software for an Indian business comes down to four things: statutory compliance, employee experience, integration depth, and total cost of ownership.

On compliance: any serious payroll tool must handle PF, ESI, professional tax, LWF, and TDS automatically. But that's table stakes. The real differentiator is how it handles edge cases — voluntary PF, NPS contributions, perquisite taxation, and 12BB declarations.

On employee experience: the best payroll tools give every employee a self-service portal where they can download payslips, submit IT proofs, apply for leave, and raise reimbursements. If your team has to email HR for a payslip, you're behind.

On integration: payroll touches finance (provisions, journals), accounting (TDS reconciliation), and bank (disbursement). Tools that integrate natively save days of work every month. Standalone payroll tools push you back into spreadsheet hell.

On TCO: per-employee pricing sounds simple, but watch for hidden costs — onboarding fees, premium support, advanced reporting add-ons, and integration costs. Always ask for an all-in quote.

Tekanthem Payroll covers all four, with native integration to the rest of the Tekanthem Suite. That said, the best tool is the one that fits your team's workflow — so always run a 90-day trial before committing.`,
  },
  {
    slug: 'engineering-tekanthem-data-platform',
    title: 'How we built Tekanthem\'s real-time data platform',
    excerpt:
      'A peek under the hood: how we deliver sub-200ms dashboards across millions of transactions using event sourcing and ClickHouse.',
    category: 'Engineering',
    author: 'Rahul Verma',
    authorRole: 'Head of Engineering',
    publishedAt: '2026-04-10',
    readingMinutes: 11,
    cover: 'from-cyan-500 to-blue-600',
    content: `When we set out to build Tekanthem, one constraint was non-negotiable: every dashboard must load in under 200ms, even for customers with millions of transactions.

We started with a traditional Postgres-only setup. It worked beautifully until we hit our first customer with 5 million invoices. P95 dashboard load times shot up to 4 seconds. Indexes helped, materialized views helped more — but neither was a silver bullet.

The breakthrough was separating writes from reads. We adopted an event-sourced architecture for the write path: every change in Tekanthem is recorded as an immutable event, then projected to multiple read stores. Postgres remains the source of truth for transactional consistency, but ClickHouse powers all dashboards and reports.

ClickHouse's columnar storage was a revelation. A query that aggregates 12 months of P&L data across all branches now runs in 30ms, not 4 seconds. And because we project incrementally from the event stream, the data is never more than a few seconds stale.

The trade-off: more moving parts, more complexity in keeping projections consistent. We built a custom reconciliation job that runs nightly and catches any divergence. In 18 months of production, we've caught exactly three issues — each one a bug in our own projection code, not the underlying infrastructure.

Tomorrow's challenge: real-time ML predictions on the same platform. More on that in a future post.`,
  },
  {
    slug: 'cnf-tekanthem-launch',
    title: 'Tekanthem C&F is now generally available',
    excerpt:
      'After 6 months in beta with 40 design partners, our Clearing & Forwarding product is now open to all customers.',
    category: 'Product',
    author: 'Devansh Patel',
    authorRole: 'Head of Product',
    publishedAt: '2026-04-05',
    readingMinutes: 4,
    cover: 'from-orange-500 to-red-600',
    content: `Six months ago, we launched Tekanthem C&F into private beta with 40 design partners — established clearing and forwarding agents from Mumbai, Chennai, Mundra, and Nhava Sheva. Today, we're proud to announce that Tekanthem C&F is generally available to all customers.

The feedback from our beta partners shaped every feature. The customs documentation engine generates Bill of Entry, Shipping Bill, and AWB from a single shipment record. The EDI integration with ICEGATE handles direct filing for both imports and exports. And the freight billing module supports multi-currency, port charges, agency fees, and statutory taxes — all itemized for the customer.

What makes Tekanthem C&F different is its tight integration with Tekanthem Finance. Every freight invoice, customs duty payment, and partner bill flows directly into your books with the right GST and TDS treatment. No more reconciling spreadsheets at month-end.

We're already onboarding our first 200 customers, with another 100 in the pipeline. If you're a C&F agent looking for a modern, integrated platform — we'd love to show you a demo.`,
  },
]

export const CATEGORIES = [
  'All',
  'Product',
  'Compliance',
  'Customer Stories',
  'Engineering',
  'Guides',
] as const
