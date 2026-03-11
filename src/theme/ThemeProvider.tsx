import { createContext } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'
import type { ComponentChildren } from 'preact'
import type { ThemeId } from './types'
import { themes } from './themes'

const STORAGE_KEY = 'flickersong-theme'

function applyTheme(themeId: ThemeId) {
  const tokens = themes[themeId]
  const root = document.documentElement
  root.setAttribute('data-theme', themeId)
  root.style.setProperty('--color-text', tokens.colorText)
  root.style.setProperty('--color-text-muted', tokens.colorTextMuted)
  root.style.setProperty('--color-accent', tokens.colorAccent)
  root.style.setProperty('--color-border', tokens.colorBorder)
  root.style.setProperty('--color-surface', tokens.colorSurface)
  root.style.setProperty('--color-bg', tokens.colorBg)
  root.style.setProperty('--hero-bg', tokens.heroBg)
  root.style.setProperty('--hero-text', tokens.heroText)
  root.style.setProperty('--card-placeholder-bg', tokens.cardPlaceholderBg)
  root.style.setProperty('--tag-bg', tokens.tagBg)
  root.style.setProperty('--radius', tokens.radius)
  if (tokens.fontHeading) {
    root.style.setProperty('--font-heading', tokens.fontHeading)
  }
}

export interface ThemeContextValue {
  themeId: ThemeId
  setThemeId: (id: ThemeId) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

const DEFAULT_THEME: ThemeId = 'monoMinimal'

/**
 * Provides current theme and setter. Applies theme to document on mount and when theme changes.
 */
export function ThemeProvider({ children }: { children: ComponentChildren }) {
  const [themeId, setThemeIdState] = useState<ThemeId>(() => {
    if (typeof window === 'undefined') return DEFAULT_THEME
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeId | null
    return stored && themes[stored] ? stored : DEFAULT_THEME
  })

  useEffect(() => {
    applyTheme(themeId)
  }, [themeId])

  const setThemeId = useCallback((id: ThemeId) => {
    setThemeIdState(id)
    try {
      localStorage.setItem(STORAGE_KEY, id)
    } catch {
      // ignore
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ themeId, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  )
}
