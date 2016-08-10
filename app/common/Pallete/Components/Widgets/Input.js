/* @flow */
'use strict';

import React, { Component, PropTypes as T } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import theme from 'themes'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Input extends Component {
  static propTypes = {
    borderType: T.oneOf(['underline', 'bordered', 'rounded']),
    iconLeft: T.bool,
    textInput: T.object,
    icon: T.object
  }
  static defaultProps = {
    borderType: 'underline',
    iconLeft: true,
    textInput: {
      placeholderTextColor: theme.inputColorPlaceholder,
      underlineColorAndroid: 'rgba(0,0,0,0)',
      placeholder: ""
    }
  }

  render() {
    const {
      textInput,
      icon,
      iconLeft,
      borderType
    } = this.props;

    const rootStyles = [ styles.root, styles[borderType] ];

    if (icon) {
      if (iconLeft) {
        return (
          <View style={rootStyles}>
            <Icon style={[ styles.icon ]}
              {...icon}
              />
            <TextInput style={[ styles.textInput ]}
              {...textInput}
              />
          </View>
        );
      } else {
        return (
          <View style={rootStyles}>
            <TextInput style={[ styles.textInput ]}
              {...textInput}
              />
            <Icon style={[ styles.icon ]}
              {...icon}
              />
          </View>
        );
      }
    } else {
      return (
        <View style={rootStyles}>
          <TextInput style={[ styles.textInput ]}
            {...textInput}
            />
        </View>
      );
    }
	}

}

const styles = StyleSheet.crate({
	root: {
		height: theme.inputHeightBase,
		backgroundColor: 'transparent',
		flex: 1,
		flexDirection: 'row',
		borderColor: theme.foregroundColor,
		paddingRight: 5
	},
  icon: {
		color: theme.foregroundColor,
		fontSize: 27,
		alignSelf: 'center',
		lineHeight: undefined,
		paddingRight: 5,
		marginLeft: undefined
  },
  textInput: {
    flex: 1,
    height: theme.inputHeightBase,
    color: theme.foregroundColor,
    paddingLeft: 5,
    paddingRight: 5
  },

  underline: {
    position:'relative',
    borderWidth: theme.borderWidth,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 5
  },

  bordered: {
    position:'relative',
    borderWidth: theme.borderWidth,
    marginTop: 5
  },

  rounded: {
    position:'relative',
    borderWidth: theme.borderWidth,
    borderRadius: 30,
    marginTop: 5
  }
})
