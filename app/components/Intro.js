import React, { Component } from 'react'
import {
  View,
  Animated,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'

class Intro extends Component {
  constructor(props) {
    super(props)

    this.state = { }
  }

  render() {
    return (
      <View style={styles.root} >
        Intro
      </View>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default Intro

