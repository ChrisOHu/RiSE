import React, { Component } from 'react'
import {
  View,
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'

import Button from './components/Button'
import AutoComplete from './components/AutoComplete'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Text>Hello, Home</Text>
    );
  }

}

export default Home
