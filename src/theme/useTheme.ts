import { useContext } from 'preact/hooks'
import { ThemeContext } from './ThemeProvider'

/**
 * Hook to access current theme and setter. Throws if used outside ThemeProvider.
 */
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
