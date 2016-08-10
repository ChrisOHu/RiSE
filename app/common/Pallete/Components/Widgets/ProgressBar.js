/* @flow */
'use strict';

import React, { Component, PropTypes as T } from 'react'
import ProgressBarAndroid from "ProgressBarAndroid"
import { ProgressViewIOS } from 'react-native';

export default class ProgressBar extends Component {
  render() {
    static propTypes = {
      inverse: T.bool
    }
    const {
      style,
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
          styleAttr="Horizontal"
          indeterminate={indeterminate}
          progress={progress | 0.5}
          color={color ? color : this.props.inverse ?
            theme.inverseProgressColor : theme.defaultProgressColor}
          {...others}
          />
      );
    } else {
      return (
        <ProgressViewIOS style={[
            {height: 40}, style
          ]}
          styleAttr="Horizontal"
          indeterminate={indeterminate}
          progress={progress | 0.5}
          progressTintColor={color ? color : this.props.inverse ?
            theme.inverseProgressColor : theme.defaultProgressColor}
          {...others}
          />
      );
    }
  }
}
