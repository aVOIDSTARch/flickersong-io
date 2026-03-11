import type { ThemeId, ThemeTokens } from './types'

/**
 * Mono Minimal: light, lots of whitespace, mono/spaced headings, subtle accent, thin borders.
 */
const monoMinimal: ThemeTokens = {
  colorText: '#111',
  colorTextMuted: '#444',
  colorAccent: '#2563eb',
  colorBorder: '#e5e7eb',
  colorSurface: '#ffffff',
  colorBg: '#fafafa',
  heroBg: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
  heroText: '#f1f5f9',
  cardPlaceholderBg: '#e2e8f0',
  tagBg: '#f1f5f9',
  radius: '6px',
  fontHeading: 'ui-monospace, monospace',
}

/**
 * Noir Cosmic: dark background, nebula-like gradients, vivid accent, glassmorphism-style cards.
 */
const noirCosmic: ThemeTokens = {
  colorText: '#e2e8f0',
  colorTextMuted: '#94a3b8',
  colorAccent: '#38bdf8',
  colorBorder: 'rgba(148, 163, 184, 0.25)',
  colorSurface: 'rgba(30, 41, 59, 0.7)',
  colorBg: '#0f172a',
  heroBg: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
  heroText: '#f8fafc',
  cardPlaceholderBg: 'rgba(51, 65, 85, 0.8)',
  tagBg: 'rgba(51, 65, 85, 0.9)',
  radius: '12px',
  fontHeading: 'system-ui, sans-serif',
}

/**
 * Soft Brutalist: off-white/cream, bold typography, chunky cards, strong borders, punchy accent.
 */
const softBrutalist: ThemeTokens = {
  colorText: '#1c1917',
  colorTextMuted: '#57534e',
  colorAccent: '#dc2626',
  colorBorder: '#1c1917',
  colorSurface: '#fef3c7',
  colorBg: '#fffbeb',
  heroBg: 'linear-gradient(135deg, #1c1917 0%, #44403c 100%)',
  heroText: '#fef3c7',
  cardPlaceholderBg: '#fde68a',
  tagBg: '#fcd34d',
  radius: '2px',
  fontHeading: 'system-ui, sans-serif',
}

export const themes: Record<ThemeId, ThemeTokens> = {
  monoMinimal,
  noirCosmic,
  softBrutalist,
}

export const themeLabels: Record<ThemeId, string> = {
  monoMinimal: 'Mono minimal',
  noirCosmic: 'Noir cosmic',
  softBrutalist: 'Soft brutalist',
}
