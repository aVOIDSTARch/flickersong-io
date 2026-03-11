import { ThemeSwitcher } from './ThemeSwitcher'

/**
 * Site header with navigation and theme switcher.
 */
export function Header() {
  return (
    <header class="header">
      <nav class="header__nav" aria-label="Main">
        <a href="/" class="header__brand">
          Flickersong
        </a>
        <a href="/projects" class="header__link">
          Projects
        </a>
        <ThemeSwitcher />
      </nav>
    </header>
  )
}
