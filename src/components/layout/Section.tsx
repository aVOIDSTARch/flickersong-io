import type { ComponentChildren } from 'preact'

interface SectionProps {
  children: ComponentChildren
  /** Optional semantic tag (section, article, aside) */
  as?: 'section' | 'article' | 'aside'
  class?: string
}

/**
 * Vertical spacing block for page sections.
 */
export function Section({
  children,
  as: Tag = 'section',
  class: className,
}: SectionProps) {
  return <Tag class={`layout-section ${className ?? ''}`.trim()}>{children}</Tag>
}
