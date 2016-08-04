import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import Pallete from 'Pallete'
import theme from 'app/themes/default'

class ToolBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <View style={[styles.root, this.props.style]} >
        <View style={styles.content}>
          <Pallete.InputGroup theme={theme} borderType="regular" iconRight >
            <Pallete.Input placeholder="Search" />
            <Pallete.Icon name="ios-search" color={theme.brandPrimary} />
          </Pallete.InputGroup>

          <TouchableOpacity style={styles.action} >
            <View>
              <Pallete.Icon name="ios-calendar-outline" color={theme.brandPrimary} size={25} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 10,
    height: theme.toolbarHeight
  },
  content: {
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
