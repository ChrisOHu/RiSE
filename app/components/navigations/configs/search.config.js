import React from 'react'
import {
	TouchableOpacity,
	Text,
  Dimensions,
  Platform
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import theme from 'themes'

const ScreenWidth = Dimensions.get('window').width;

export default {
  LeftButton(route, navigator, index, navState, baseStyles)  { return null },
  RightButton(route, navigator, index, navState, baseStyles) { return null },
  Title(route, navigator, index, navState, baseStyles) {
    let fontSize = Platform.OS == 'android' ? 12 : 14;
    return (
      <View style={[baseStyles.searchBar, {width: ScreenWidth - 40, marginLeft: 40}]}>
        <Icon
          name={'ios-search'}
          size={20}
          style={baseStyles.searchIcon}
          color={theme.brandPrimary}
          />
        <TextInput
          style={[baseStyles.textInput, {fontSize: fontSize}]}
          placeholder={searchPlaceholder}
          autoFocus={true}
          onChangeText={route.sp.onChangeText}
          onSubmitEditing={route.sp.onSubmitEditing}
          clearButtonMode={'while-editing'}
          />
      </View>
    )
  }
}
