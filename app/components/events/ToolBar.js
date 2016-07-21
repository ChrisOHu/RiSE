import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import {
  InputGroup,
  Input,
  Icon
} from 'base'
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
        <InputGroup theme={theme} borderType="regular" iconRight >
          <Input placeholder="Search" />
          <Icon name="ios-search" />
        </InputGroup>

        <TouchableOpacity style={styles.action} >
          <View>
            <Icon name="ios-calendar-outline" color={theme.brandPrimary} size={25} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    height: theme.toolbarHeight,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  action: {
    width: 25,
    marginLeft: 5
  }
});

export default ToolBar
