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
      return
    case 'login':
      return
    default:
      return
  }
}

function renderScene(scene) {
  const { index, key, route } = scene

  switch (key) {
    case 'intro':
      return null
    case 'login':
      return
    default:
      return null
  }
}

export default {
  renderHeader, renderScene
}

