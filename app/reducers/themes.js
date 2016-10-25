import { SWITCH_TO_THEME } from '../actions/themes'
import {
  lightTheme,
  darkTheme
} from '~/app/themes'

const initialTheme = lightTheme

export default function reducer(state = initialTheme, action = {}) {
  const { theme } = action
  switch (action.type) {
    case SWITCH_TO_THEME:
      switch (theme) {
        case 'dark':
          return darkTheme
        case 'light':
        default:
          return lightTheme
      }
    default:
      return state
  }
}

