import {
  PUSH,
  POP,
  NAVI_TO_LAUNCH,
  NAVI_TO_HOME,
  NAVI_TO_TAB
} from '../actions/navigations'
import { NavigationExperimental } from 'react-native'

const {
  NavigationStateUtils
} = NavigationExperimental

const initialState = {
  app: {
    index: 0,
    routes: [
      {key: 'launch'},
      {key: 'home'}
    ]
  },
  launch: {
    index: 0,
    routes: [{key: 'login'}]
  },
  home: {
    index: 0,
    routes: [
      {key: 'tab1'},
      {key: 'tab2'},
      {key: 'tab3'}
    ]
  },
  tab1: {
    index: 0,
    routes: [{key: 'Apple Home'}]
  },
  tab2: {
    index: 0,
    routes: [{key: 'Banana Home'}]
  },
  tab3: {
    index: 0,
    routes: [{key: 'Orange Home'}]
  }
}

export default function reducer(state = initialState, action = {}) {
  const routesKey = utils.getCurrentRoutesStackKey(state)
  const routes = state[routesKey]

  switch (action.action) {
    case PUSH: {
      const nextRoutes = NavigationStateUtils.push(routes, action.route)
      return {
        ...state,
        [routesKey]: nextRoutes
      }
    }
    case POP: {
      const nextRoutes = NavigationStateUtils.pop(routes)
      return {
        ...state,
        [routesKey]: nextRoutes
      }
    }
    case NAVI_TO_HOME: {
      const nextAppState = NavigationStateUtils.jumpTo(state.app, 'home')
      return {
        ...state,
        app: nextAppState
      }
    }
    case NAVI_TO_LAUNCH: {
      const nextAppState = NavigationStateUtils.jumpTo(state.app, 'launch')
      return {
        ...state,
        app: nextAppState
      }
    }
    case NAVI_TO_TAB: {
      const tabKey = action.route.key
      const nextHomeState = NavigationStateUtils.jumpTo(state.home, tabKey)
      return {
        ...state,
        home: nextHomeState
      }
    }
    default:
      return state
  }
}

export const utils = {
  getCurrentRoutesStackKey(navi) {
    let routesKey = navi.app.routes[navi.app.index].key
    if (routesKey === 'home') {
      routesKey = navi.home.routes[navi.home.index].key
    }

    return routesKey
  }
}

