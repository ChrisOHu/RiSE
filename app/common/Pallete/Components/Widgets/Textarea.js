/* @flow */
'use strict';

import React, { Component, PropTypes as T } from 'react';
import { View, TextInput } from 'react-native'
import theme from 'themes'

export default class Textarea extends Component {
  static propTypes = {
    borderType: T.oneOf(['underline', 'bordered', 'rounded']),
    rowSpan: T.number
  }
  static defaultProps = {
    borderType: 'bordered',
    rowSpan: 1
  }

	render() {
		return (
			<View style={[
          {
            flex: 1,
            borderColor: theme.foregroundColor,
            borderBottomWidth: theme.borderWidth
          },
          styles[this.props.borderType]
        ]} >
				<TextInput style={{
    				height: this.props.rowSpan * 25,
    				color: theme.textColor,
    				paddingLeft: 5,
    				paddingRight: 5,
    				fontSize: 18
          }}
          multiline={true}
          placeholderTextColor={theme.inputColorPlaceholder}
          underlineColorAndroid='rgba(0,0,0,0)' />
			</View>
		);
	}

}

const styles = {
  underline: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 5
  },
  bordered: {
    marginTop: 5
  },
  rounded: {
    borderRadius: 30,
    marginTop: 5
  }
}
