import { combineReducers } from 'redux'
import app from './app'
import navigations from './navigations'
import user from './user'

const rootReducer = combineReducers({
  app, navigations, user
})

export default rootReducer

