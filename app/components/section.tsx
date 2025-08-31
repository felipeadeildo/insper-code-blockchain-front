import type { ReactNode } from 'react'
import { cn } from '~/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  containerClassName?: string
}

export function Section({
  children,
  className,
  id,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn('py-16 lg:py-24', className)}>
      <div
        className={cn(
          'container mx-auto px-4 sm:px-6 lg:px-8',
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 lg:mb-16', centered && 'text-center', className)}>
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
