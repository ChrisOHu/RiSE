import {
  AppState,
  StyleSheet,
  View,
  StatusBar,
  BackAndroid
} from 'react-native'

import { Router } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { connect } from 'react-redux'

import CodePush from 'react-native-code-push'

import { version } from './env.js'
import Routes from './Routes'
import { init as initI18N } from './i18n'
import configureStore from './store'


const RouterWithRedux = connect()(Router)
const store = configureStore()

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
    initI18N();

    AppState.addEventListener('change', this.handleAppStateChange);

    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);

    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleAppStateChange(appState) {
    //'active', 'background'
    //if (state === 'active') {
    //}
  }

  handleBackButton() {
    for (let i = this._backButtonHandlers.length - 1; i >= 0; i--) {
      if (this._backButtonHandlers[i]()) {
        return true;
      }
    }

    //TODO: pop routes
    //if (this.refs.navigator.getCurrentRoutes().length > 1) {
    //  this.refs.navigator.pop();
    //  return true;
    //}

    return false
  }

  render() {
    return (
      <Provider store={store} >
        <RouterWithRedux>
          <Routes />
        </RouterWithRedux>
      </Provider>
    )
  }

}

//  CodePush.sync({
//      updateDialog: true,
//      installMode: codePush.InstallMode.IMMEDIATE
//  });

export default CodePush({checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME})(App)

