import React, {
  Component,
  PropTypes
} from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import {
  NavigationBar,
  Title,
  Icon,
  Button
} from '@shoutem/ui'

import {
  Intro,
  Login,
  LoginModal,
  Home,
  TabView
} from '../index'

/**
 * launch: intro, login
 */

function renderHeader(scene) {
  const { index, key, route } = scene

  switch (key) {
    case 'intro':
    case 'login':
    default:
      return (
        <NavigationBar
          leftComponent={(
            <Button onPress={this.props.pop()} >
              <Icon name="cart" />
            </Button>
          )}
          centerComponent={<Title>key</Title>}
          rightComponent={<Icon name="share" />}
        />
      )
  }
}

function renderScene(scene) {
  const { index, key, route } = scene

  switch (key) {
    case 'intro':
    case 'login':
    default:
      return (
        <View>{'Scene: ' + key}</View>
      )
  }
}

export default {
  renderHeader, renderScene
}

