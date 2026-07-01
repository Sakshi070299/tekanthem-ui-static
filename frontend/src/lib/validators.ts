import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Please enter your full name').max(120),
  email: z.string().email('Please enter a valid email'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20)
    .optional()
    .or(z.literal('')),
  company: z.string().min(2, 'Please enter your company name').max(120),
  employees: z.enum(['1-10', '11-50', '51-200', '201-1000', '1000+']).optional(),
  product: z.array(z.enum(['suite', 'finance', 'payroll', 'cnf', 'crm'])).optional(),
  message: z.string().min(10, 'Please tell us a bit more').max(2000),
  intent: z.enum(['demo', 'sales', 'trial', 'general']).default('general'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

export const callbackFormSchema = z.object({
  name: z.string().min(2, 'Please enter your name').max(120),
  phone: z
    .string()
    .min(8, 'Please enter a valid mobile number')
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, 'Please enter a valid mobile number'),
  email: z.string().email('Please enter a valid email'),
})

export type CallbackFormValues = z.infer<typeof callbackFormSchema>

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email'),
})

export type NewsletterValues = z.infer<typeof newsletterSchema>
