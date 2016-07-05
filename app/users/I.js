import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import {
  Text
} from 'app/base'

import { KeyboardAwareScrollView } from 'app/components/KeyboardAwareViews'

class I extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView style={[styles.content, this.props.style]}>
        <View style={styles.card}>
          <Text>Events</Text>
        </View>
      </KeyboardAwareScrollView>
    );
  }

}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'green'
  }
});

export default I
