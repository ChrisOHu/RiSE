import { combineReducers } from 'redux'
import app from './app'
import routes from './routes'
import user from './user'

const rootReducer = combineReducers({
  app, routes, user
})

export default rootReducer

