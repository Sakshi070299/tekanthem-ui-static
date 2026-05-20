import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validators'
import { sendInboxMail, escapeHtml } from '@/lib/mailer'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const PRODUCT_LABELS: Record<string, string> = {
  suite: 'The full Tekanthem Suite',
  finance: 'Tekanthem Finance',
  payroll: 'Tekanthem Payroll',
  cnf: 'Tekanthem C&F',
  crm: 'Tekanthem CRM',
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 },
    )
  }

  const parsed = contactFormSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: 'Validation failed',
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    )
  }

  const data = parsed.data
  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
  })

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#0f172a">
      <h2 style="color:#1d4ed8;margin-bottom:4px">New website enquiry</h2>
      <p style="color:#64748b;margin-top:0">Intent: <strong>${escapeHtml(data.intent)}</strong> · ${escapeHtml(submittedAt)} IST</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:8px 0;color:#64748b;width:140px">Name</td><td style="padding:8px 0"><strong>${escapeHtml(data.name)}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#64748b">Email</td><td style="padding:8px 0">${escapeHtml(data.email)}</td></tr>
        <tr><td style="padding:8px 0;color:#64748b">Phone</td><td style="padding:8px 0">${escapeHtml(data.phone || '—')}</td></tr>
        <tr><td style="padding:8px 0;color:#64748b">Company</td><td style="padding:8px 0">${escapeHtml(data.company)}</td></tr>
        <tr><td style="padding:8px 0;color:#64748b">Team size</td><td style="padding:8px 0">${escapeHtml(data.employees || '—')}</td></tr>
        <tr><td style="padding:8px 0;color:#64748b">Interested in</td><td style="padding:8px 0">${escapeHtml(data.product ? (PRODUCT_LABELS[data.product] ?? data.product) : '—')}</td></tr>
      </table>
      <p style="color:#64748b;font-size:14px;margin-bottom:4px">Message</p>
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;font-size:14px;white-space:pre-wrap">${escapeHtml(data.message)}</div>
    </div>
  `

  try {
    await sendInboxMail({
      subject: `[Website] ${data.intent} enquiry — ${data.company}`,
      html,
      replyTo: data.email,
    })
  } catch (err) {
    console.error('Contact form mail failed:', err)
    return NextResponse.json(
      { success: false, error: 'Could not send your message. Please try again.' },
      { status: 502 },
    )
  }

  return NextResponse.json(
    {
      success: true,
      message:
        'Thank you — our team will be in touch within 1 business day.',
    },
    { status: 201 },
  )
}
