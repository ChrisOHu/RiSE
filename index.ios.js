import React from 'react';
import {
  AppRegistry,
  StatusBarIOS
} from 'react-native';

import App from './app/App'

StatusBarIOS.setStyle('light-content');
AppRegistry.registerComponent('upmo', () => App);
