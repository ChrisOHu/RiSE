
import React from 'react'
import {
  Navigator,
	StyleSheet,
	PixelRatio,
  BackAndroid,
  Dimensions
} from 'react-native'
import NavigationBarStyle from './NavigationBarStyle'
import NavigationBarRouteMapper from './NavigationBarRouteMapper'
import LoginPage from '../LoginPage'
import HomePage from '../HomePage'
import theme from 'themes'

const ScreenWidth = Dimensions.get('window').width;

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
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navBar: {
    backgroundColor: 'white',
    borderBottomColor: theme.toolbarBorderColor,
    borderBottomWidth: 0.5,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: theme.brandPrimary,
    fontWeight: '500',
    marginVertical: 11,
  },
  navBarLeftButton: {
    paddingLeft: 10,
    width: 40,
    height: 40,
  },
  navBarRightButton: {
    paddingRight: 10
  },
  navBarButtonText: {
    color: theme.brandPrimary
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA'
  },
  searchBar: {
    padding: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: ScreenWidth - 10,
    height: 35,
    // borderWidth: 1,
    // borderColor: theme.toolbarBorderColor,
    borderRadius: 4,
    margin: 5,
    backgroundColor: theme.inputBorderColor
  },
  searchIcon: {
    marginLeft: 3,
    marginRight: 3,
    width: 20,
    height: 20
  },
  textInput: {
    fontSize: 14,
    alignSelf: 'stretch',
    flex: 1,
    color: 'black'
  },
});

export default Routes
