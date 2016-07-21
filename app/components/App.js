import React, { Component, PropTypes } from 'react'
import {
  AppState,
  StyleSheet,
  View,
  StatusBar,
  BackAndroid
} from 'react-native'

import CodePush from 'react-native-code-push'

import { version } from './env.js'
import SideBar from './SideBar'
import AppNavigator from './AppNavigator'

import { Drawer } from 'base'

class App extends Component{
  constructor(props) {
    super(props);

    this._backButtonHandlers = [];

    this.state = {};
    this.refs = {};
  }

  static propTypes    = { }
  static defaultProps = { }

  addBackButtonListener(listener) {
    this._backButtonHandlers.push(listener);
  }

  removeBackButtonListener(listener) {
    this._backButtonHandlers = this._backButtonHandlers.filter((handler) => handler !== listener);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    // CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME});

    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);

    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleAppStateChange(appState) {
    //'active', 'background'
    if (state === 'active') {
      // CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME});
    }
  }

  handleBackButton() {
    for (let i = this._backButtonHandlers.length - 1; i >= 0; i--) {
      if (this._backButtonHandlers[i]()) {
        return true;
      }
    }

    const navigator = this.refs.appNavigator.getNavigator();
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }

    return false;
  }

  render() {
    return (
      <Drawer
        ref={(ref) => this.refs.drawer = ref}
        type="overlay"
        content={<SideBar />}
        tapToClose={true}
        acceptPan={false}
        onClose={() => this.refs.drawer.close()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan={true} >

        <AppNavigator />

      </Drawer>
    );
  }

};


export default App
