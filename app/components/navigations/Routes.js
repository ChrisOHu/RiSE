
import React from 'react'
import {
  Navigator,
	StyleSheet,
  BackAndroid
} from 'react-native'
import NavigationBarStyle from './NavigationBarStyle'
import NavigationBarRouteMapper from './NavigationBarRouteMapper'
import LoginPage from '../LoginPage'
import HomePage from '../HomePage'
import theme from 'themes'

const Routes = {
	navigator(initialRoute, refCallback) {
		return (
			<Navigator
        ref={refCallback}
				initialRoute={{id: initialRoute}}
				renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
				navigationBar={
					<Navigator.NavigationBar
						routeMapper={NavigationBarRouteMapper}
						style={styles.navBar}
            navigationStyles={NavigationBarStyle}
					/>
				}
			/>
		);
	},

	renderScene(route, navigator) {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
      }
      return false;
    });

		switch (route.id) {
      case 'login':
        return <LoginPage navigator={navigator} />
      // case 'search':
        // return <SearchComponent navigator={navigator} route={route}/>;
      case 'home':
        return <HomePage navigator={navigator} />
      default:
        throw new Error(`unknown route id: ${route.id}`)
        return null
    }
	}
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
    borderBottomColor: theme.toolbarBorderColor,
    borderBottomWidth: 0.5,
  }
});

export default Routes
