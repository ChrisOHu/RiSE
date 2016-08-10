/* @flow */
'use strict';

import React, { Component, PropTypes as T } from 'react'
import ProgressBarAndroid from "ProgressBarAndroid"
import { ActivityIndicatorIOS } from 'react-native';

export default class Spinner extends Component {
  render() {
    static propTypes = {
      inverse: T.bool
    }
    const {
      style,
      size,
      indeterminate,
      progress,
      color,
      ...others
    } = this.props;

    if (Platform.OS === 'android') {
      return (
        <ProgressBarAndroid style={[
            {height: 40}, style
          ]}
          styleAttr={size ? size : "Large"}
          indeterminate={indeterminate}
          progress={progress | 0.5}
          color={color ? color : this.props.inverse ?
            theme.inverseProgressColor : theme.defaultProgressColor}
          {...others}
          />
      );
    } else {
      return (
        <ActivityIndicatorIOS style={[
            {height: 40}, style
          ]}
          color={color ? color : this.props.inverse ?
            theme.inverseProgressColor : theme.defaultProgressColor}
          size={this.props.size ? this.props.size : "large" }
          {...others}
          />
      );
    }
  }
}
