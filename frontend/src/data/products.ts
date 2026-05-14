export interface ProductFeature {
  title: string
  description: string
  icon: string
}

export interface ProductFAQ {
  q: string
  a: string
}

export interface ProductData {
  slug: 'finance' | 'payroll' | 'cnf' | 'crm'
  name: string
  tagline: string
  hero: {
    badge: string
    title: string
    description: string
  }
  features: ProductFeature[]
  benefits: { title: string; metric: string; description: string }[]
  faqs: ProductFAQ[]
  modules: string[]
}

export const PRODUCT_DATA: Record<ProductData['slug'], ProductData> = {
  finance: {
    slug: 'finance',
    name: 'Tekanthem Finance',
    tagline: 'Modern accounting that scales',
    hero: {
      badge: 'GST · TDS · Reconciliation',
      title: 'Accounting software built for growing Indian businesses',
      description:
        'From invoicing to bank reconciliation, GST returns to financial reports — manage your books end to end with the speed and confidence your business deserves.',
    },
    features: [
      {
        icon: 'receipt',
        title: 'GST-ready invoicing',
        description:
          'Generate compliant invoices with HSN/SAC codes, e-invoice IRN, and e-way bills in one click.',
      },
      {
        icon: 'landmark',
        title: 'Bank reconciliation',
        description:
          'Auto-fetch transactions from 20+ Indian banks and reconcile in minutes with smart rules.',
      },
      {
        icon: 'wallet',
        title: 'Expense management',
        description:
          'Capture bills, attach receipts, get approvals, and reimburse — mobile-first and tax-ready.',
      },
      {
        icon: 'file-text',
        title: 'GST returns',
        description:
          'GSTR-1, 3B, 9 prepared from your books. File directly or export JSON to your CA.',
      },
      {
        icon: 'pie-chart',
        title: 'Financial reports',
        description:
          'P&L, balance sheet, cash flow, AR/AP aging — real-time, drill-down, exportable.',
      },
      {
        icon: 'shield',
        title: 'Audit trail',
        description:
          'Every edit logged. Role-based access. Auditor-friendly read-only access on demand.',
      },
    ],
    benefits: [
      {
        title: 'Faster month-end',
        metric: '4×',
        description: 'Customers close books in 2 days vs. 8 days on legacy tools.',
      },
      {
        title: 'Zero data entry',
        metric: '90%',
        description: 'Of bank transactions auto-categorized by our ML engine.',
      },
      {
        title: 'CA-friendly',
        metric: '1-click',
        description: 'GST return JSON export accepted by every Indian CA.',
      },
    ],
    modules: [
      'Sales & Invoicing',
      'Purchases & Bills',
      'Banking',
      'Inventory',
      'GST & TDS',
      'Reports',
      'Multi-currency',
      'Fixed Assets',
    ],
    faqs: [
      {
        q: 'Does Tekanthem Finance support e-invoicing?',
        a: 'Yes. We generate IRN and signed JSON for all B2B invoices above the threshold, integrated with the GSTN portal directly.',
      },
      {
        q: 'Can I import data from Tally or Zoho Books?',
        a: 'Absolutely. Our migration team handles the full import — masters, opening balances and historical transactions — in 2–3 business days.',
      },
      {
        q: 'Do you support multi-branch / multi-GSTIN setups?',
        a: 'Yes, on the Business and Enterprise plans. Each branch can have its own GSTIN, books, and users while consolidated reports work across all.',
      },
      {
        q: 'How do you handle TDS and TCS?',
        a: 'Auto-deducted on eligible transactions, with Form 26Q / 27EQ generation, challan reconciliation, and TRACES export.',
      },
    ],
  },
  payroll: {
    slug: 'payroll',
    name: 'Tekanthem Payroll',
    tagline: 'Effortless payroll, every cycle',
    hero: {
      badge: 'PF · ESI · TDS · Compliance',
      title: 'Run accurate payroll in minutes — fully compliant, fully automated',
      description:
        'From new hires to full and final settlements, Tekanthem Payroll handles every statutory requirement and disburses salaries directly to your team — no spreadsheets, no headaches.',
    },
    features: [
      {
        icon: 'user-plus',
        title: 'Employee lifecycle',
        description:
          'Digital onboarding with offer letters, document collection, asset assignment, and exit checklists.',
      },
      {
        icon: 'banknote',
        title: 'Salary processing',
        description:
          'Configurable salary structures with CTC components, variables, deductions, and arrears.',
      },
      {
        icon: 'badge-check',
        title: 'Statutory compliance',
        description:
          'PF, ESI, PT, LWF, TDS — auto-calculated, with challans, returns, and ECR-ready files.',
      },
      {
        icon: 'mail',
        title: 'Payslips & Form 16',
        description:
          'Encrypted digital payslips delivered to employees. Annual Form 16 in one click.',
      },
      {
        icon: 'calendar',
        title: 'Leave & attendance',
        description:
          'Customizable leave policies, biometric/GPS attendance, and automatic LOP calculations.',
      },
      {
        icon: 'wallet',
        title: 'Direct bank transfer',
        description:
          'NEFT/IMPS/RTGS via every major bank API. Bulk salary disbursement in one approval.',
      },
    ],
    benefits: [
      {
        title: 'Payroll run time',
        metric: '< 30 min',
        description: 'Average time to run payroll for 100 employees.',
      },
      {
        title: 'Compliance errors',
        metric: '0',
        description: 'Auto-validation catches every statutory mismatch before submission.',
      },
      {
        title: 'Self-service',
        metric: '100%',
        description: 'Employees handle their own payslips, leaves, and IT declarations.',
      },
    ],
    modules: [
      'Onboarding',
      'Salary Engine',
      'Statutory Filing',
      'Leave & Attendance',
      'Reimbursements',
      'Loans & Advances',
      'Form 16 / 12BB',
      'Exit Management',
    ],
    faqs: [
      {
        q: 'How is Tekanthem Payroll different from RazorpayX or greytHR?',
        a: 'We are tightly integrated with Tekanthem Finance — payroll cost flows straight into your books with the right TDS, GST and provision entries. Plus same dashboard for everything.',
      },
      {
        q: 'Do you handle contractor / consultant payments?',
        a: 'Yes, with proper TDS deductions under 194J / 194C, contractor agreements, and Form 16A generation.',
      },
      {
        q: 'Can employees access their data themselves?',
        a: 'Every employee gets a self-service portal and mobile app — payslips, leave applications, IT declarations, reimbursements, all in one place.',
      },
      {
        q: 'What is the pricing model?',
        a: 'Per-active-employee, per-month. Inactive employees are free. Volume discounts apply automatically at 50, 100, 250 and 500 employees.',
      },
    ],
  },
  cnf: {
    slug: 'cnf',
    name: 'Tekanthem C&F',
    tagline: 'Clearing & forwarding, simplified',
    hero: {
      badge: 'Customs · Freight · Tracking',
      title: 'End-to-end logistics for clearing & forwarding agents',
      description:
        'Manage shipments, customs documentation, freight invoicing, and your partner network from a single platform built for Indian logistics realities.',
    },
    features: [
      {
        icon: 'truck',
        title: 'Shipment tracking',
        description:
          'Live status across air, sea, and surface — port-to-door visibility with milestone alerts.',
      },
      {
        icon: 'file-text',
        title: 'Customs documentation',
        description:
          'Bill of Entry, Shipping Bill, AWB, BL, EGM — generated from a single shipment record.',
      },
      {
        icon: 'receipt',
        title: 'Freight billing',
        description:
          'Multi-currency invoicing with port charges, agency fees, and statutory taxes itemized.',
      },
      {
        icon: 'users',
        title: 'Partner network',
        description:
          'Vendor/agent directory with rate cards, performance scoring, and credit terms.',
      },
      {
        icon: 'globe',
        title: 'EDI integration',
        description:
          'Direct integration with ICEGATE, port community systems, and major shipping lines.',
      },
      {
        icon: 'bar-chart-3',
        title: 'Profit per shipment',
        description:
          'See live margin on every shipment with cost vs. billing reconciliation.',
      },
    ],
    benefits: [
      {
        title: 'Document turnaround',
        metric: '6×',
        description: 'Faster customs paperwork vs. manual processing.',
      },
      {
        title: 'Margin visibility',
        metric: 'Real-time',
        description: 'Know your profit on every shipment as costs land.',
      },
      {
        title: 'Compliance ready',
        metric: '100%',
        description: 'GST, customs, RBI reporting requirements covered.',
      },
    ],
    modules: [
      'Shipment Booking',
      'Customs Filing',
      'Freight Invoicing',
      'Partner Management',
      'Container Tracking',
      'EDI / ICEGATE',
      'Margin Reports',
      'Document Vault',
    ],
    faqs: [
      {
        q: 'Do you support both import and export shipments?',
        a: 'Yes — full workflow for FCL, LCL, air freight, and surface for both inbound and outbound, with origin-specific documentation.',
      },
      {
        q: 'Can we integrate with our existing shipping line APIs?',
        a: 'We support Maersk, MSC, CMA CGM, Hapag-Lloyd, and ONE out of the box. Custom integrations available on Enterprise plans.',
      },
      {
        q: 'How does Tekanthem C&F connect with our accounting?',
        a: 'Direct integration with Tekanthem Finance — every freight invoice, customs duty payment, and partner bill flows to your books automatically.',
      },
      {
        q: 'Does it handle multi-leg shipments?',
        a: 'Yes, including transhipment via Singapore/Dubai/Colombo, with per-leg cost allocation and ETA prediction.',
      },
    ],
  },
  crm: {
    slug: 'crm',
    name: 'Tekanthem CRM',
    tagline: 'Customer relationships that convert',
    hero: {
      badge: 'Pipeline · Automation · Analytics',
      title: 'A CRM your sales team will actually use',
      description:
        'Pipeline, contacts, deal stages, automations and analytics — built for B2B sales teams who care about velocity and conversion, not data entry.',
    },
    features: [
      {
        icon: 'git-branch',
        title: 'Visual pipeline',
        description:
          'Kanban-style deal pipeline with drag-to-stage, weighted forecasts, and rotting deal alerts.',
      },
      {
        icon: 'users',
        title: 'Contacts & companies',
        description:
          'Unified view of every interaction — emails, calls, meetings, notes, attachments — across the team.',
      },
      {
        icon: 'zap',
        title: 'Workflow automation',
        description:
          'No-code rules: assign leads, send sequences, update fields, alert managers — all triggered by events.',
      },
      {
        icon: 'mail',
        title: 'Email & calls',
        description:
          'Two-way Gmail/Outlook sync, call logging, sequenced outreach, and reply tracking.',
      },
      {
        icon: 'target',
        title: 'Forecasting',
        description:
          'Roll-up forecasts by team, region, product, and rep. Confidence bands and historical accuracy.',
      },
      {
        icon: 'sparkles',
        title: 'AI sales assist',
        description:
          'Auto-summarize calls, draft follow-up emails, score leads, and surface next best action.',
      },
    ],
    benefits: [
      {
        title: 'Pipeline velocity',
        metric: '+38%',
        description: 'Average increase in deals closed per quarter.',
      },
      {
        title: 'Data entry',
        metric: '−60%',
        description: 'Less time logging activities, more time selling.',
      },
      {
        title: 'Quote-to-cash',
        metric: 'Same day',
        description: 'CRM deal → Finance invoice in a single click.',
      },
    ],
    modules: [
      'Pipeline & Deals',
      'Contacts & Companies',
      'Email Sync',
      'Sequences',
      'Quotes & Proposals',
      'Forecasting',
      'Territory Mgmt',
      'AI Assistant',
    ],
    faqs: [
      {
        q: 'How is this different from HubSpot or Salesforce?',
        a: 'Tekanthem CRM is built for the Indian B2B sales motion — GST-compliant quotes, regional taxes, multi-stakeholder deals, and direct sync with your Finance and Payroll modules.',
      },
      {
        q: 'Does it support mobile?',
        a: 'Full-featured iOS and Android apps with offline support, voice notes after calls, and quick deal updates from the field.',
      },
      {
        q: 'Can we import from our existing CRM?',
        a: 'Yes — one-time migration assistance from HubSpot, Salesforce, Zoho CRM, Pipedrive, Freshsales, and Excel/CSV.',
      },
      {
        q: 'Is there a free tier?',
        a: 'A forever-free Starter plan for up to 3 users and 500 contacts. Upgrade when you need advanced workflows or unlimited records.',
      },
    ],
  },
}
