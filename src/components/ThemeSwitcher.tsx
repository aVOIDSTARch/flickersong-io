import { useCallback } from 'preact/hooks'
import { useTheme, themeLabels } from '../theme'
import type { ThemeId } from '../theme'

/**
 * Theme switcher control: toggles between the three aesthetic paradigms.
 */
export function ThemeSwitcher() {
  const { themeId, setThemeId } = useTheme()
  const handleChange = useCallback(
    (e: Event) => {
      const target = e.target as HTMLSelectElement
      setThemeId(target.value as ThemeId)
    },
    [setThemeId]
  )

  return (
    <div class="theme-switcher">
      <label for="theme-select" class="theme-switcher__label">
        Theme
      </label>
      <select
        id="theme-select"
        class="theme-switcher__select"
        value={themeId}
        onChange={handleChange}
        aria-label="Choose theme"
      >
        {(Object.keys(themeLabels) as ThemeId[]).map((id) => (
          <option key={id} value={id}>
            {themeLabels[id]}
          </option>
        ))}
      </select>
    </div>
  )
}
