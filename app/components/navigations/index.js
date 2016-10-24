import React, {
  Component,
  PropTypes
} from 'react'
import {
  View,
  Text,
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
} from '~/app/components'

/**
 * launch: intro, login
 */

export function renderHeader(scene) {
  /* here key is 'scene_{theKey}' */
  const { index, key, route } = scene

  switch (route.key) {
    case 'intro':
      return null
    case 'login':
      return null
    default:
      return (
        <NavigationBar
          leftComponent={(
            <Button onPress={() => {/*this.props.pop()*/}} >
              <Icon name="left-arrow" />
            </Button>
          )}
          centerComponent={<Title>key</Title>}
          rightComponent={<Icon name="share" />}
        />
      )
  }
}

export function renderScene(scene) {
  const { index, key, route } = scene

  switch (route.key) {
    case 'login':
      return <Login />
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

