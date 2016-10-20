import React, {
  Component,
  PropTypes
} from 'react'
import {
  View,
  StyleSheet,
  NavigationExperimental
} from 'react-native'

import { utils } from './reducers/navigations'

const {
  NavigationCardStack,
  NavigationHeader,
  NavigationPropTypes,
  NavigationStateUtils
} = NavigationExperimental

class Navigator extends Component {
  static propTypes = {
    navi: PropTypes.shape({
      app    : NavigationPropTypes.navigationState.isRequired,
      launch : NavigationPropTypes.navigationState.isRequired,
      home   : NavigationPropTypes.navigationState.isRequired,
      tab1   : NavigationPropTypes.navigationState.isRequired,
      tab2   : NavigationPropTypes.navigationState.isRequired,
      tab3   : NavigationPropTypes.navigationState.isRequired
    })
  }
  static defaultProps = {}

  constructor(props) {
    super(props)

    this.state = { }
  }

  render() {
    const { navi } = this.props;
    const routesKey = utils.getCurrentRoutesStackKey(navi) 
    const routes = navi[routesKey]

    return (
      <View style={styles.navigator}>
        <NavigationCardStack
          key={'stack_' + routesKey}
          onNavigateBack={() => {
          }}
          navigationState={routes}
          renderHeader={this._renderHeader}
          renderScene={this._renderScene}
          style={styles.navigatorCardStack}
        />
        {/* TODO
        <NaviTab
          navigationState={tabs}
        />
        */}
      </View>
    );
  }

  _renderHeader() {
    // TODO
  }
  _renderScene() {
    // TODO
  }

}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  },
  navigatorCardStack: {
    flex: 20
  },
  tabs: {
    flex: 1,
    flexDirection: 'row'
  },
  tab: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  },
  tabText: {
    color: '#222',
    fontWeight: '500'
  },
  tabSelected: {
    color: 'blue'
  }
})

export default Navigator

