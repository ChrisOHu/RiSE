
import React from 'react'
import {
	TouchableOpacity,
	Text,
  TextInput,
  View,
  Platform
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import theme from 'themes'

const NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0 || route.id === 'login') {
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
  },

  RightButton: function(route, navigator, index, navState) {
    let rightButton;
    switch (route.id) {
      // case 'editprofile':
      //   rightButton = (
      //       <TouchableOpacity onPress={route.pressSave}>
      //         <Text style={[styles.navBarText, {marginRight: 10}]}>
      //           Save
      //         </Text>
      //       </TouchableOpacity>
      //   )
      //   break;
      // case 'web':
      //   if (Platform.OS === 'ios') {
      //     rightButton = (
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
      //   break;
      default:
        break;
    }

    return rightButton;
  },

  Title: function(route, navigator, index, navState) {
    switch (route.id) {
      case 'login':
        return;
      case 'home': {
        return (
          <TouchableOpacity
            style={[styles.searchBar, {justifyContent: 'center'}]}
            onPress={ () => navigator.push({id: 'search'}) }
            >
            <Icon
              name={'ios-search'}
              size={20}
              style={styles.searchIcon}
              color={theme.brandPrimary}
            />
            <Text style={[styles.textInput, {alignSelf: 'center', flex: 0}]}>
              {'Search everything...' /*placeholder*/ }
            </Text>
          </TouchableOpacity>
        )
      }
      case 'search': {
        let fontSize = Platform.OS == 'android' ? 12 : 14;
        return (
          <View style={[styles.searchBar, {width: ScreenWidth - 40, marginLeft: 40}]}>
            <Icon
              name={'ios-search'}
              size={20}
              style={styles.searchIcon}
              color={theme.brandPrimary}
              />
            <TextInput
              style={[styles.textInput, {fontSize: fontSize}]}
              placeholder={searchPlaceholder}
              autoFocus={true}
              onChangeText={route.sp.onChangeText}
              onSubmitEditing={route.sp.onSubmitEditing}
              clearButtonMode={'while-editing'}
              />
          </View>
        )
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

export default NavigationBarRouteMapper
