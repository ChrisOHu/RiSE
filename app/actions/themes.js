
export const SWITCH_TO_THEME = "SWITCH_TO_THEME"

export function switchToTheme(themeName) {
  return {
    type: SWITCH_TO_THEME,
    theme: themeName
  }
}

