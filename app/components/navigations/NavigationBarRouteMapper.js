import React from 'react'
import {
	TouchableOpacity,
	Text,
  TextInput,
  View,
	PixelRatio,
	StyleSheet,
  Platform,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import theme from 'themes'

import configs from './configs'

const ScreenWidth = Dimensions.get('window').width;

const NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }
    // else if(route.id == 'editprofile') {
    //   return (
    //     <TouchableOpacity onPress={route.pressCancel}>
    //       <Text style={[styles.navBarText, {marginRight: 10,marginLeft:10}]}>
    //         Cancel
    //       </Text>
    //     </TouchableOpacity>
    //   );
    // }

    switch (route.id) {
      case 'home':
      case 'search':
      case 'login':
      default:
        return (
          <TouchableOpacity
            onPress={() => navigator.pop()}
            style={styles.navBarLeftButton}>
            <Icon
              name='ios-arrow-back'
              size={30}
              style={{marginTop: 8}}
              color={theme.brandPrimary}
              />
          </TouchableOpacity>
        );
    }

  },

  RightButton: function(route, navigator, index, navState) {
    switch (route.id) {
      case 'home':
        return configs.home.RightButton(route, navigator, index, navState, styles);
      case 'search':
        return configs.search.RightButton(route, navigator, index, navState, styles);
      case 'login':
      default:
        return null;
      // case 'editprofile':
      //   return rightButton = (
      //       <TouchableOpacity onPress={route.pressSave}>
      //         <Text style={[styles.navBarText, {marginRight: 10}]}>
      //           Save
      //         </Text>
      //       </TouchableOpacity>
      //   )
      // case 'web':
      //   if (Platform.OS === 'ios') {
      //     return (
      //         <TouchableOpacity
      //           onPress={route.onShare}
      //           style={{width: 40, height: 40}}>
      //           <Icon
      //             name='share'
      //             size={30}
      //             style={{paddingLeft: 10, marginTop: 8}}
      //             color={theme.brandPrimary}
      //           />
      //         </TouchableOpacity>
      //     )
      //   }
    }
  },

  Title: function(route, navigator, index, navState) {
    switch (route.id) {
      case 'login':
        return null;
      case 'home': {
        return configs.home.Title(route, navigator, index, navState, styles);
      }
      case 'search': {
        return configs.search.Title(route, navigator, index, navState, styles);
      }
      default: {
        return (
          <Text style={[
              styles.navBarText,
              styles.navBarTitleText,
              {width: 250, height: 40, textAlign: 'center'}]
            }
            numberOfLines={1} >
            {route.title}
          </Text>
        );
      }
    }
  }
}

const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderColor: theme.toolbarBorderColor,
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
  }
});

export default NavigationBarRouteMapper
