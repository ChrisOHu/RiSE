import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'

export default class Launch extends Component {
  componentDidMount() {
    // do anything while splash screen keeps, use await to wait for an async task.
    SplashScreen.hide();
  }
}

