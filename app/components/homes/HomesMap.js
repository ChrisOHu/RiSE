import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {
  Header,
  Title,
  View as NbView,
  Text as NbText,
  Button,
  Icon,
  InputGroup,
  Input
} from 'native-base'

import MapView from 'react-native-maps'

class HomesMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <NbView style={styles.content} >
        <MapView />
      </NbView>
    );
  }

}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
});

export default HomesMap

