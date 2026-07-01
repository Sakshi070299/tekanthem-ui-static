import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="heading-3 mt-3 text-balance">{title}</h2>
      {description ? (
        <p className="mt-3 text-ink-600 text-base leading-relaxed text-balance">{description}</p>
      ) : null}
    </div>
  )
}
