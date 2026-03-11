import { createElement } from 'preact'
import type { ComponentChildren } from 'preact'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4'

interface HeadingProps {
  children: ComponentChildren
  level?: 1 | 2 | 3 | 4
  class?: string
}

const TAG_MAP: HeadingTag[] = ['h1', 'h2', 'h3', 'h4']

/**
 * Semantic heading with consistent styling levels.
 */
export function Heading({
  children,
  level = 1,
  class: className,
}: HeadingProps) {
  const tag = TAG_MAP[level - 1] ?? 'h1'
  return createElement(
    tag,
    {
      class: `layout-heading layout-heading--h${level} ${className ?? ''}`.trim(),
    },
    children
  )
}
