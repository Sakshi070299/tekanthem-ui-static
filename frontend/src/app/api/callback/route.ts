import { NextRequest, NextResponse } from 'next/server'
import { callbackFormSchema } from '@/lib/validators'
import { sendInboxMail, escapeHtml } from '@/lib/mailer'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

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

  const parsed = callbackFormSchema.safeParse(body)
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
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;color:#0f172a">
      <h2 style="color:#1d4ed8;margin-bottom:4px">📞 Request a Callback</h2>
      <p style="color:#64748b;margin-top:0">${escapeHtml(submittedAt)} IST</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:8px 0;color:#64748b;width:120px">Name</td><td style="padding:8px 0"><strong>${escapeHtml(data.name)}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#64748b">Mobile</td><td style="padding:8px 0"><strong>${escapeHtml(data.phone)}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#64748b">Email</td><td style="padding:8px 0">${escapeHtml(data.email)}</td></tr>
      </table>
      <p style="color:#94a3b8;font-size:13px">Please call this lead back as soon as possible.</p>
    </div>
  `

  try {
    await sendInboxMail({
      subject: `[Callback] ${data.name} — ${data.phone}`,
      html,
      replyTo: data.email,
    })
  } catch (err) {
    console.error('Callback request mail failed:', err)
    return NextResponse.json(
      {
        success: false,
        error: 'Could not submit your request. Please try again.',
      },
      { status: 502 },
    )
  }

  return NextResponse.json(
    {
      success: true,
      message: "Thanks! We'll call you back shortly.",
    },
    { status: 201 },
  )
}
