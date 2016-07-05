import React, { Component } from 'react'
import {
  Navigator,
  Platform
} from 'react-native'

import LoginPage from './LoginPage'
import HomePage from './HomePage'

class AppNavigator extends Component {
  constructor(props) {
    super(props);

    this.refs = {};
  }

  getNavigator() {
    return this.refs.navigator;
  }

  render() {
    return (
      <Navigator
        ref={(ref) => this.refs.navigator = ref}
        configureScene={(route) => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        initialRoute={{id: 'login'}}
        renderScene={this.renderScene}
        />
    );
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'home':
        return <HomePage navigator={navigator} />;
      case 'login':
      default:
        return <LoginPage navigator={navigator} />;
    }
  }
}

export default AppNavigator
