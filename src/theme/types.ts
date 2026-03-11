/**
 * Available theme identifiers. Each corresponds to one aesthetic paradigm.
 * @public
 */
export type ThemeId = 'monoMinimal' | 'noirCosmic' | 'softBrutalist'

/**
 * Theme definition: design tokens applied as CSS variables.
 * @public
 */
export interface ThemeTokens {
  /** Primary text */
  colorText: string
  /** Muted/secondary text */
  colorTextMuted: string
  /** Accent for links and CTAs */
  colorAccent: string
  /** Border color */
  colorBorder: string
  /** Card/surface background */
  colorSurface: string
  /** Page background */
  colorBg: string
  /** Hero section background (CSS value: gradient or color) */
  heroBg: string
  /** Hero text color */
  heroText: string
  /** Card image placeholder background */
  cardPlaceholderBg: string
  /** Tag/chip background */
  tagBg: string
  /** Optional border radius token (e.g. 4px / 8px) */
  radius: string
  /** Optional font family for headings */
  fontHeading?: string
}
