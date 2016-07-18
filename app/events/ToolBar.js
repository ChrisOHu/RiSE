import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import {
  InputGroup,
  Input,
  Icon
} from 'app/base'
import theme from 'app/themes/default'

class ToolBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.content}>
        <InputGroup theme={theme} >
          <Input placeholder="Search" />
          <Icon name="ios-search" />
        </InputGroup>

        <TouchableHighlight style={styles.action} >
          <Icon name="ios-calendar-outline" color={theme.brandPrimary} size={25} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row'
  },
  action: {
    width: 25
  }
});
