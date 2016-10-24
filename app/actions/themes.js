
export const SWITCH_THEME = "SWITCH_THEME"

export function switchTheme(theme) {
  return {
    type: SWITCH_THEME,
    theme: theme
  }
}

