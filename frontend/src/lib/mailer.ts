import nodemailer, { type Transporter } from 'nodemailer'

/**
 * Lazily-created singleton nodemailer transport for Office 365 SMTP.
 * Reused across requests within the same server process.
 */
let cachedTransport: Transporter | null = null

function getTransport(): Transporter {
  if (cachedTransport) return cachedTransport

  const host = process.env.SMTP_HOST
  const port = parseInt(process.env.SMTP_PORT ?? '587', 10)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASSWORD

  if (!host || !user || !pass) {
    throw new Error(
      'SMTP is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASSWORD in .env.local',
    )
  }

  cachedTransport = nodemailer.createTransport({
    host,
    port,
    secure: false, // Office 365 uses STARTTLS on 587
    requireTLS: true,
    auth: { user, pass },
  })

  return cachedTransport
}

interface SendMailInput {
  subject: string
  html: string
  replyTo?: string
}

/**
 * Sends an email to the configured CONTACT_INBOX_EMAIL using the
 * "Sales website" Office 365 account.
 * @param input - Subject, HTML body and optional reply-to address.
 * @returns The nodemailer message id on success.
 */
export async function sendInboxMail(input: SendMailInput): Promise<string> {
  const transport = getTransport()
  const fromName = process.env.SMTP_FROM_NAME ?? 'Tekanthem Website'
  const fromEmail =
    process.env.SMTP_FROM_EMAIL ?? process.env.SMTP_USER ?? 'no-reply@tekanthem.com'
  const inbox = process.env.CONTACT_INBOX_EMAIL ?? fromEmail

  const info = await transport.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: inbox,
    subject: input.subject,
    html: input.html,
    replyTo: input.replyTo,
  })

  return info.messageId
}

/**
 * Escapes user-supplied text before interpolating into an HTML email body.
 * @param value - Raw user input.
 * @returns HTML-safe string.
 */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
