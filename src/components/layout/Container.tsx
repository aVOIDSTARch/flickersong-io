import type { ComponentChildren } from 'preact'

interface ContainerProps {
  children: ComponentChildren
  /** Optional class for layout variants */
  class?: string
}

/**
 * Constrains content width and centers it. Use for main page content.
 */
export function Container({ children, class: className }: ContainerProps) {
  return (
    <div class={`layout-container ${className ?? ''}`.trim()}>
      {children}
    </div>
  )
}
