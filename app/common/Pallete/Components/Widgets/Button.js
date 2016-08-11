/* @flow */
'use strict';

import React, {
  Component,
  PropTypes as T
} from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import theme from 'themes'

export default class Button extends Component {
  static propTypes = {
    transparent: T.bool,
    primary: T.bool,
    success: T.bool,
    danger: T.bool,
    warning: T.bool,
    info: T.bool,
    disabled: T.bool,
    rounded: T.bool,
    bordered: T.bool,
    large: T.bool,
    small: T.bool,
    block: T.bool,

    iconLeft: T.bool,
    icon: T.object,
    text: T.string
  }
  static defaultProps = {
    iconLeft: true
  }

  getTheme() {
    return theme;
  }

  getRootStyles() {
    return {
      padding: 15,
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      elevation:      (this.props.transparent) ? 0 : 2,
      shadowColor:    (this.props.transparent) ? undefined : '#000',
      shadowOffset:   (this.props.transparent) ? undefined : {width: 0, height: 2},
      shadowOpacity:  (this.props.transparent) ? undefined : 0.1,
      shadowRadius:   (this.props.transparent) ? undefined : 1.5,
      backgroundColor:(this.props.primary)                  ? this.getTheme().btnPrimaryBg :
        ((this.props.transparent) || (this.props.bordered)) ? 'rgba(0,0,0,0)' :
        (this.props.success)                                ? this.getTheme().btnSuccessBg :
        (this.props.danger)                                 ? this.getTheme().btnDangerBg :
        (this.props.warning)                                ? this.getTheme().btnWarningBg :
        (this.props.info)                                   ? this.getTheme().btnInfoBg :
        (this.props.backgroundColor)                        ? this.props.backgroundColor :
        (this.props.disabled)                               ? this.getTheme().btnDisabledBg :
                                                              this.getTheme().btnPrimaryBg,
      borderRadius:   (this.props.rounded)  ? this.getTheme().borderRadiusLarge : this.getTheme().borderRadiusBase,
      borderWidth:    (this.props.bordered) ? 1 : 0,
      borderColor:    (this.props.primary)  ? this.getTheme().btnPrimaryBg :
        (this.props.success)                ? this.getTheme().btnSuccessBg :
        (this.props.danger)                 ? this.getTheme().btnDangerBg :
        (this.props.warning)                ? this.getTheme().btnWarningBg :
        (this.props.info)                   ? this.getTheme().btnInfoBg :
                                              this.getTheme().btnPrimaryBg,
      height:         (this.props.large) ? 60 : (this.props.small) ? 35 : 45,
      alignSelf:      (this.props.block) ? 'stretch' : 'flex-start'
    }
  }

  getTextStyles() {
    return {
      paddingRight : 5,
      paddingLeft : 3,
      color:
        ((this.props.bordered) && (this.props.primary)) ? this.getTheme().btnPrimaryBg :
        ((this.props.bordered) && (this.props.success)) ? this.getTheme().btnSuccessBg :
        ((this.props.bordered) && (this.props.danger))  ? this.getTheme().btnDangerBg :
        ((this.props.bordered) && (this.props.warning)) ? this.getTheme().btnWarningBg :
        ((this.props.bordered) && (this.props.info))    ? this.getTheme().btnInfoBg :
        ((this.props.bordered))                         ? this.getTheme().btnPrimaryBg :
        (this.props.transparent)                        ? this.getTheme().foregroundColor :
                                                          this.getTheme().inverseTextColor,

      fontSize: (this.props.large) ? this.getTheme().btnTextSizeLarge :
                (this.props.small) ? this.getTheme().btnTextSizeSmall :
                                     this.getTheme().btnTextSize,

      lineHeight: (this.props.large) ? 29 : (this.props.small) ? 13 : 20
    }
  }

  getIconStyles() {
    return {
      color:
        ((this.props.bordered) && (this.props.primary)) ? this.getTheme().btnPrimaryBg :
        ((this.props.bordered) && (this.props.success)) ? this.getTheme().btnSuccessBg :
        ((this.props.bordered) && (this.props.danger))  ? this.getTheme().btnDangerBg :
        ((this.props.bordered) && (this.props.warning)) ? this.getTheme().btnWarningBg :
        ((this.props.bordered) && (this.props.info))    ? this.getTheme().btnInfoBg :
        (this.props.bordered)                           ? this.getTheme().btnPrimaryBg :
        (this.props.transparent)                        ? this.getTheme().foregroundColor :
                                                          this.getTheme().inverseTextColor,

      fontSize: (this.props.large) ? this.getTheme().iconSizeLarge :
                (this.props.small) ? this.getTheme().iconSizeSmall :
                                     this.getTheme().iconFontSize,
      lineHeight: (this.props.large) ? 48 :
                  (this.props.small) ? 22 :
                                       32
    }
  }

  render() {
    const {
      text,
      icon,
      iconLeft
    } = this.props;

    const rootStyles = this.getRootStyles();
    const textStyles = text ? this.getTextStyles() : null;
    const iconStyles = icon ? this.getIconStyles() : null;

    if (text && icon) {
      const { name, style, ...others } = icon;

      if (iconLeft) {
        return (
          <TouchableOpacity style={rootStyles} >
            <Icon name={name} style={[iconStyles, style]} {...others} />
            <Text style={textStyles} >{text}</Text>
          </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity style={rootStyles} >
            <Text style={textStyles} >{text}</Text>
            <Icon name={name} style={[iconStyles, style]} {...others} />
          </TouchableOpacity>
        )
      }
    } else if (icon) {
      const { name, style, ...others } = icon;

      return (
        <TouchableOpacity style={rootStyles} >
          <Icon name={name} style={[iconStyles, style]} {...others} />
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={rootStyles} >
          <Text style={textStyles} >{text}</Text>
        </TouchableOpacity>
      )
    }
  }
}
