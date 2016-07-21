import React, {
  Component,
  PropTypes as T
} from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import {
  Text
} from 'base'

import { KeyboardAwareScrollView } from 'app/components/KeyboardAwareViews'

import Meteor, { createConainter } from 'react-native-meteor'

class Calendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView style={[styles.content, this.props.style]}>
        <View style={styles.card}>
          <Text>Calendar</Text>
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

export default Calendar
