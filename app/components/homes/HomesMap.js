import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
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

const window = Dimensions.get('window')

class HomesMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <NbView style={styles.content} >
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </NbView>
    );
  }

}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: window.height
  }
});

export default HomesMap

