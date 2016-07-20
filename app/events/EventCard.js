/**
 * Created by ChrisHu (huhuaishun@gmail.com) on 7/18/2016, 12:20
 */

import React, {
  Component,
  PropTypes as T
} from 'react'
import {
  Image,
  StyleSheet
} from 'react-native'
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Icon
} from 'app/base'

import theme from 'app/themes/default'

class EventCard extends Component {
  static propTypes = {
    theme: T.object.isRequired,
    event: T.object
  }
  static defaultProps = { }

  constructor(props) {
    super(props);
  }

  render() {
    const { theme, event } = this.props.event;
    return (
      <Card theme={theme}>

        <CardItem>
          <Thumbnail source={require(event.club.avatar)} />
          <Text>{event.club.name}</Text>
        </CardItem>

        <CardItem>
          <Image style={{ resizeMode: 'cover' }} source={require(event.poster)} />
        </CardItem>

        <CardItem>
          <Icon name={'ios-musical-notes'} style={{color : '#ED4A6A'}} />
          <Text>Listen now</Text>
        </CardItem>

      </Card>
    )
  }
}

export default EventCard
