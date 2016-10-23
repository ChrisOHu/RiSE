import React, {
  Component,
  PropTypes
} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  NavigationExperimental
} from 'react-native'

import { connect } from 'react-redux'

import TabBar from './common/TabBar'
import { renderHeader, renderScene } from './components/navigations'

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

    let showTabBar = navi.app.index > 0

    return (
      <View style={styles.container}>

        <NavigationCardStack
          key={'stack_' + routesKey}
          onNavigateBack={this.props.pop}
          navigationState={routes}
          renderHeader={this._renderHeader.bind(this)}
          renderScene={this._renderScene.bind(this)}
          style={styles.navigatorCardStack}
        />

        <TabBar show={showTabBar}
          disable={!showTabBar}
          style={styles.tabBarContainer} >

          <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabItem} onPress={() => this._onTabSelect('Tab1')}>
              <View>
                <Text>Tab 1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}  onPress={() => this._onTabSelect('Tab2')}>
              <View>
                <Text>Tab 2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}  onPress={() => this._onTabSelect('Tab3')}>
              <View>
                <Text>Tab 3</Text>
              </View>
            </TouchableOpacity>
          </View>

        </TabBar>

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

    return renderHeader.apply(this, sceneProps.scene)
  }
  _renderScene(sceneProps) {
    console.log(sceneProps)

    return renderScene.apply(this, sceneProps.scene)
  }
  _onTabSelect(key) {
    this.props.naviToTab({
      route: {key: key}
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navigationCardStack: {
    height: 1000
  },
  tabBarContainer: {
    backgroundColor: 'skyblue'
  },
  tabBar: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'green'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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

