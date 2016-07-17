import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import {
  Input
} from 'app/components/Quartz'
import Icon from 'react-native-vector-icons/Ionicons'
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
        <Input theme={theme}
          rightIcon={(<Icon name="ios-search" size={25} />)}
          placeholder="Search"
          />

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
