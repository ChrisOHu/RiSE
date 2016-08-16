import React, { Component, PropTypes } from 'react'
import {
  AppState,
  StyleSheet,
  View,
  StatusBar,
  BackAndroid
} from 'react-native'
import CodePush from 'react-native-code-push'
import { version } from '../env.js'
import Routes from './navigations/Routes'
import Pallete from 'Pallete'
import { init as initMeteor } from '../apis/Meteor'
import { init as initI18N } from '../i18n'

class App extends Component {
  static propTypes    = { }
  static defaultProps = { }

  constructor(props) {
    super(props);

    this._backButtonHandlers = [];

    this.state = {
      isLoggedIn: false
    };
    this.refs = {};
  }

  addBackButtonListener(listener) {
    this._backButtonHandlers.push(listener);
  }

  removeBackButtonListener(listener) {
    this._backButtonHandlers = this._backButtonHandlers.filter((handler) => handler !== listener);
  }

  componentDidMount() {
    initMeteor();
    initI18N();

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

    if (this.refs.navigator.getCurrentRoutes().length > 1) {
      this.refs.navigator.pop();
      return true;
    }

    return false;
  }

  render() {
    if (this.state.isLoggedIn) {
      return Routes.navigator({id: 'home', hideNavigationBar: true},
        (ref) => { this.refs.navigator = ref }
      )
    } else {
      return Routes.navigator({id: 'login', hideNavigationBar: true},
        (ref) => { this.refs.navigator = ref }
      )
    }
  }

}


export default App
