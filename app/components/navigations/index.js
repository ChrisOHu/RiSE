import React, {
  Component,
  PropTypes
} from 'react'
import {
  View,
  Text,
  StyleSheet,
  NavigationExperimental
} from 'react-native'

import { Header, Title, Button, Icon } from 'native-base'

import {
  Intro,
  Login,
  LoginModal,
  Home,
  TabView
} from '~/app/components'

/**
 * launch: intro, login
 */

export function renderHeader(scene) {
  const { theme } = this.props
  /* here key is 'scene_{theKey}' */
  const { index, key, route } = scene

  switch (route.key) {
    case 'intro':
      return null
    case 'login':
      return null
    default:
      return (
        <Header>
          <Button transparent>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Header</Title>

          <Button transparent>
            <Icon name="ios-menu" />
          </Button>
        </Header>
      )
  }
}

export function renderScene(scene) {
  const { theme } = this.props
  const { index, key, route } = scene

  switch (route.key) {
    case 'login':
      return <Login theme={theme} />
    case 'intro':
    default:
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            {'Scene: ' + key}
          </Text>
        </View>
      )
  }
}

