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
  Input,
  SearchBar
} from 'native-base'

import MapView from 'react-native-maps'

const window = Dimensions.get('window')

class HomesMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searching: false,
      homes: [
        {
          title: "Cozy Home",
          description: "cozy and comfortable home",
          latlng: {
            latitude: 37.78825,
            longitude: -122.4324
          }
        },
        {
          title: "Sunshine Home",
          description: "Big window, great sunshine",
          latlng: {
            latitude: 37.78625,
            longitude: -122.4324
          }
        },
        {
          title: "Near by shore",
          description: "Near by shore, embrace the ocean...",
          latlng: {
            latitude: 37.78425,
            longitude: -122.4324
          }
        }
      ],
      initialRegion: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    }
  }

  render() {
    return (
      <NbView style={styles.content} >

        <SearchBar transparent lightTheme round placeholder="Search..."
          containerStyle={styles.searchBar}
          onSubmitEditing={() => alert('Searching...')}
        />

        <MapView
          style={styles.map}
          initialRegion={this.state.initialRegion}
        >
          {this.state.homes.map((marker, index) => (
            <MapView.Marker
              key={`home-marker-${index}`}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>

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
  searchBar: {
    alignSelf: 'center',
    position: 'absolute',
    top: 20,
    left: 0,
    width: window.width,
    zIndex: 1
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

