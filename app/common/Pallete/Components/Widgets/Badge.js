/* @flow */
'use strict';

import React, { Component, PropTypes as T } from 'react'
import { Text, View } from 'react-native'
import theme from 'themes'

export default class Badge extends Component {
  static propTypes = {
    style: T.object
  }

  render() {
    const { style } = this.props;
    return (
      <View style={[
          {
            backgroundColor: theme.brandPrimary,
            padding: 4,
            alignSelf: 'flex-start',
            borderRadius: 13,
            width: 27
          },
          style
        ]} >
        <Text style={{
            color: theme.badgeColor,
            fontSize: theme.fontSizeBase,
            textAlign: 'center'
          }} >
          {this.props.children}
        </Text>
      </View>
    );
  }

}
