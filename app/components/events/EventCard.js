/**
 * Created by ChrisHu (huhuaishun@gmail.com) on 7/18/2016, 12:20
 */

import React, {
  Component,
  PropTypes as T
} from 'react'
import {
  View,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native'

import t from 'counterpart'

import Pallete from 'Pallete'

import theme from 'themes'

const window = Dimensions.get('window')

class EventCard extends Component {
  static propTypes = {
    event: T.object.isRequired
  }
  static defaultProps = {
    event: {
      name: '--',
      createdAt: '--',
      creator: {},
      time: '--',
      descriptions: '--',
      address: '--',
      poster: '',
      tags: [],
      attenders: [],
      comments: [],
      attendersCount: 0,
      commentsCount: 0
    }
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { event } = this.props;
    return (
      <View style={styles.root}>

        <View style={styles.header} >
          <Image style={styles.creatorAvatar}
            source={{uri: this.event.creator.avatar}}
            resizeMode="contain"
            />
          <View style={styles.creatorMeta} >
            <Text>{event.owner.name}</Text>
            <Text>{event.createdAt}</Text>
          </View>
        </View>
        <Image style={styles.poster}
          source={{uri: event.poster}}
          />

        <View>
          <Text>{event.name}</Text>
          <Text>{event.price}</Text>

          <Text>{event.slogan}</Text>
          <Text>{event.address}</Text>
        </View>

        <View style={styles.line} />
      </View>
    )
  }
}

export default EventCard

const styles = StyleSheet.create({
  root: {
    marginBottom: 10
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: 5
  },
  creatorAvatar: {
    borderRadius: 15,
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  creatorMeta: {
    flex: 1
  },
  poster: {
    width: window.width,
    height: 0.75 * window.width
  },
  line: Pallete.styles.horizontalLine
})
