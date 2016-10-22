import React, {
  Component,
  PropTypes
} from 'react'
import {
  View,
  StyleSheet,
  NavigationExperimental
} from 'react-native'

import { connect } from 'react-redux'

import TabsBar from './common/TabsBar'
import { renderHeader, renderScene } from './navigations'

import {
  push, pop, naviToLaunch, naviToHome, naviToTab
} from './actions/navigations'
import { utils as naviUtils } from './reducers/navigations'

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
    }).isRequired,
    push         : PropTypes.func.isRequired,
    pop          : PropTypes.func.isRequired,
    naviToLaunch : PropTypes.func.isRequired,
    naviToHome   : PropTypes.func.isRequired,
    naviToTab    : PropTypes.func.isRequired
  }
  static defaultProps = {}

  constructor(props) {
    super(props)

    this.state = { }
  }

  render() {
    const { navi } = this.props;
    const routesKey = naviUtils.getCurrentRoutesStackKey(navi)
    const routes = navi[routesKey]

    return (
      <View style={styles.navigator}>
        <NavigationCardStack
          key={'stack_' + routesKey}
          onNavigateBack={this.props.pop}
          navigationState={routes}
          renderHeader={this._renderHeader.bind(this)}
          renderScene={this._renderScene.bind(this)}
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

  /** sceneProps is of NavigationScene:
   *
   * const scene = PropTypes.shape({
   *   index: PropTypes.number.isRequired,
   *   isActive: PropTypes.bool.isRequired,
   *   isStale: PropTypes.bool.isRequired,
   *   key: PropTypes.string.isRequired,
   *   route: navigationRoute.isRequired,
   * });
   * const SceneRendererProps = {
   *   layout: layout.isRequired,
   *   navigationState: navigationState.isRequired,
   *   position: animatedValue.isRequired,
   *   progress: animatedValue.isRequired,
   *   scene: scene.isRequired,
   *   scenes: PropTypes.arrayOf(scene).isRequired,
   * };
   */
  _renderHeader(sceneProps) {
    console.log(sceneProps)

    return renderHeader(sceneProps.scene)
  }
  _renderScene(sceneProps) {
    console.log(sceneProps)

    return renderScene(sceneProps.scene)
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

const mapStateToProps = (state, ownProps) => {
  return {
    navi: state.navigations
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    push         : ({route, ...params}) => dispatch(push({route, ...params})),
    pop          : () => dispatch(pop()),
    naviToLaunch : () => dispatch(naviToLaunch()),
    naviToHome   : () => dispatch(naviToHome()),
    naviToTab    : ({route, ...params}) => dispatch(naviToTab({route, ...params}))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigator)

