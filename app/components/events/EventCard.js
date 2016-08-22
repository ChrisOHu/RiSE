/**
 * Author ChrisHu (huhuaishun@gmail.com), on 7/18/2016, 12:20
 */

import React, {
  Component,
  PropTypes as T
} from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native'

import t from 'counterpart'

import Pallete from 'Pallete'

import theme from 'themes'

const window = Dimensions.get('window')

import MOCK from '../MOCK/MOCK'

class EventCard extends Component {
  static propTypes = {
    event: T.object,
    theme: T.object
  }
  static defaultProps = {
    event: {
      name: 'Event Name',
      createdAt: 'Creation time',
      owner: {
        /**
         * the image name in require has to be known statically
         * see https://facebook.github.io/react-native/docs/images.html
         */
        avatar: require('../MOCK/hye.png'),
        name: 'Owner Name'
      },
      price: 'Price',
      slogan: 'Slogan',
      time: 'Time',
      descriptions: 'Descriptions...',
      address: 'Address...',
      poster: MOCK.posters.landscape.autumnThunder,
      tags: [],
      attenders: [],
      comments: [],
      attendersCount: 0,
      commentsCount: 0
    },
    theme: theme
  }

  constructor(props) {
    super(props);
  }

  setNativeProps(nativeProps) {
    this.refs.root.setNativeProps(nativeProps);
  }

  render() {
    const { event } = this.props;
    return (
      <View ref="root" style={styles.root} >

        <View style={styles.header} >
          <Image style={styles.ownerAvatar}
            source={event.owner.avatar}
            resizeMode="cover"
            />
          <View style={styles.ownerMeta} >
            <Text>{event.owner.name}</Text>
            <Text>{event.createdAt}</Text>
          </View>
        </View>

        <Image style={styles.poster}
          source={{uri: event.poster}}
          />

        <View style={styles.footer} >
          <Text>{event.name}</Text>
          <Text>{event.price}</Text>

          <Text>{event.slogan}</Text>
          <Text>{event.address}</Text>
        </View>

        { /*<View style={styles.line} /> */ }

      </View>
    )
  }
}

export default EventCard

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: 5
  },
  ownerAvatar: {
    borderRadius: 15,
    marginRight: 5,
    width: 30,
    height: 30
  },
  ownerMeta: {
    flex: 1
  },
  poster: {
    width: window.width,
    height: 0.75 * window.width
  },
  footer: {
    flex: 1,
    paddingBottom: 20
  },
  line: Pallete.styles.horizontalLine
})

