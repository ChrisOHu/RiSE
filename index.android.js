import React from 'react'
import {
  AppRegistry
} from 'react-native'
import { Provider } from 'react-redux'

import configureStore from './app/store'
import App from './app/App'

const store = configureStore()

AppRegistry.registerComponent('RiSE', () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
})

