import React from 'react'
import {
	TouchableOpacity,
	Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import theme from 'themes'

export default {
  LeftButton(route, navigator, index, navState, baseStyles)  { return null },
  RightButton(route, navigator, index, navState, baseStyles) { return null },
  Title(route, navigator, index, navState, baseStyles) {
    return (
      <TouchableOpacity
        style={[baseStyles.searchBar, {justifyContent: 'center'}]}
        onPress={ () => navigator.push({id: 'search'}) }
        >
        <Icon
          name={'ios-search'}
          size={20}
          style={baseStyles.searchIcon}
          color={theme.brandPrimary}
          />
        <Text style={[baseStyles.textInput, {alignSelf: 'center', flex: 0}]}>
          {'Search everything...' /*placeholder*/ }
        </Text>
      </TouchableOpacity>
    )
  }
}
