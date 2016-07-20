import React, {
  Component,
  PropTypes as T
} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { KeyboardAwareScrollView } from 'app/components/KeyboardAwareViews'

import Meteor, { createConainter } from 'react-native-meteor'

class Chats extends Component {
  static propTypes = {}
  static defaultProps = {}
  
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

export default Chats
