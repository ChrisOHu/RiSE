import { SWITCH_THEME } from '../actions/themes'
import { lightTheme } from '~/app/themes'

const initialTheme = lightTheme

export default function reducer(state = initialTheme, action = {}) {
  switch (action.type) {
    case SWITCH_THEME:
      return
    default:
      return state
  }
}

