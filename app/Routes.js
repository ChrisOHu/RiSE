import React, {
  Component
} from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  Actions,
  ActionConst
} from 'react-native-router-flux'

import Login from 'app/components'
import Home from 'app/components'
import Launch from 'app/components'
import Intro from 'app/components'

const reducerCreate = (params) => {
  const defaultReducer = new Reducer(params)
  return (state, action) => {
    console.log('ACTION:', action)
    return defaultReducer(state, action)
  }
}

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null
  }
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64
    style.marginBottom = computedProps.hideTabBar ? 0 : 50
  }
  return style
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#eee'
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd'
  }
})

class Routes extends Component {
  render() {
    return (
      <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
        {/* § Modal */}
        <Scene key="modal" component={Modal} >
          {/* §§ root */}
          <Scene key="root" hideNavBar hideTabBar>
            <Scene key="launch" component={Launch} title="Launch" initial />
            <Scene key="register" component={Register} title="Register" />
            <Scene key="login" direction="vertical" >
              <Scene key="loginModal" direction="vertical" component={Login} title="Login" />
              <Scene
                key="loginModal2"
                hideNavBar
                component={Login2}
                title="Login2"
                panHandlers={null}
                duration={1}
              />
              <Scene
                key="loginModal3"
                hideNavBar
                component={Login3}
                title="Login3"
                panHandlers={null}
                duration={1}
              />
            </Scene>
            <Scene key="home" component={Home} title="Replace" type={ActionConst.REPLACE} />

            {/* §§§ Tabs */}
            <Scene
              key="main"
              tabs
              tabBarStyle={styles.tabBarStyle}
              tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle} >

              <Scene key="tab1" component={TabView} title="Tab #3" initial hideTabBar icon={TabIcon} />
              <Scene key="tab2" component={TabView} title="Tab #4" hideNavBar icon={TabIcon} />
              <Scene key="tab3" component={TabView} title="Tab #5" hideTabBar icon={TabIcon} />

            </Scene>

          </Scene>
          {/* §§ Error */}
          <Scene key="error" component={Error} />
        </Scene>
      </Router>
    )
  }
}

export default Routes

