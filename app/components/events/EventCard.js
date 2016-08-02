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

import Pallete from 'Pallete'

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
      <Pallete.Card theme={theme}>

        <Pallete.CardItem>
          <Pallete.Thumbnail source={require(event.club.avatar)} />
          <Pallete.Text>{event.club.name}</Pallete.Text>
        </Pallete.CardItem>

        <Pallete.CardItem>
          <Image style={{ resizeMode: 'cover' }} source={require(event.poster)} />
        </Pallete.CardItem>

        <Pallete.CardItem>
          <Icon name={'ios-musical-notes'} style={{color : '#ED4A6A'}} />
          <Text>Listen now</Text>
        </Pallete.CardItem>

      </Pallete.Card>
    )
  }
}

export default EventCard
