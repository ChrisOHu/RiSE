/* @flow */
'use strict';

import React, {
  Component,
  PropTypes as T
} from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import theme from 'themes'

export default class Card extends Component {

  getStyles() {
    return {
      root: {
        flex: 1,
        borderWidth: theme.borderWidth,
        borderRadius: theme.borderRadiusBase,
        borderColor: theme.listBorderColor,
        flexWrap: 'wrap',
        borderBottomWidth: 0,
        backgroundColor: this.props.transparent? 'transparent' : theme.cardDefaultBg,
        shadowColor: this.props.transparent ? undefined : '#000',
        shadowOffset: this.props.transparent ? undefined : {width: 0, height: 2},
        shadowOpacity: this.props.transparent ? undefined : 0.1,
        shadowRadius: this.props.transparent ? undefined : 1.5,
        elevation: this.props.transparent ? undefined : 1
      }
    }
  }

  render() {
    const { style, ...others } = this.props;
    const rootStyles = this.getStyles();

    return(
      <View style={[rootStyles, style]} {...others} >
        {this.props.children}
      </View>
    );
  }

}
