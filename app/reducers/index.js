import { combineReducers } from 'redux'
import app from './app'
import theme from './themes'
import navigations from './navigations'
import user from './user'

const rootReducer = combineReducers({
  app, theme, navigations, user
})

export default rootReducer

