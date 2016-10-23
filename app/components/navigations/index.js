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
} from '../index'

/**
 * launch: intro, login
 */

export function renderHeader(scene) {
  const { index, key, route } = scene

  switch (key) {
    case 'intro':
    case 'login':
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

  switch (key) {
    case 'intro':
    case 'login':
    default:
      return (
        <View>
          <Text>
            {'Scene: ' + key}
          </Text>
        </View>
      )
  }
}

