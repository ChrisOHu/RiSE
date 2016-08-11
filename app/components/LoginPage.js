import React, { Component } from 'react'
import {
  View,
  Image,
  Platform,
  Dimensions,
  StyleSheet
} from 'react-native'

import Pallete from 'Pallete'

import { KeyboardAwareScrollView } from 'common/KeyboardAwareViews'

import theme from 'themes'
// import Button from './components/Button'
// import AutoComplete from './components/AutoComplete'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      visibleHeight: Dimensions.get('window').height,
      scroll: false
    };
  }

  componentWillMount () {
  }

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          padding: theme.contentPadding || 0
        }}
        style={styles.root} >

        <Image source={require('./assets/logo.png')} style={styles.logo} />

        <View style={styles.form} >
          <Pallete.Input style={{marginBottom: 20}}
            icon={name: "ios-person"}
            textInput={placeholder: "Email"}
            />
          <Pallete.Input style={{marginBottom: 10}}
            icon={name: "ios-unlock-outline"}
            textInput={placeholder: "Password", secureTextEntry: true}
            />

          <Pallete.Input style={{marginBottom: 10}}
            icon={name: "ios-unlock-outline"}
            textInput={placeholder: "Password", secureTextEntry: true}
            />

          <Pallete.Button transparent
            style={{
              alignSelf: 'flex-end',
              marginBottom: (Platform.OS === 'ios' ) ? 10 : 0,
              marginTop: (Platform.OS === 'ios' ) ? -10 : 0
            }} >
            Forgot Password
          </Pallete.Button>
          <Pallete.Button rounded block
            style={{ marginBottom: 10 }}
            onPress={() => this.props.navigator.replace({id: 'home'})} >
            Login
          </Pallete.Button>
          <Pallete.Button transparent
            style={{alignSelf: 'center'}}
            onPress={() => this.props.navigator.replace({id: 'home'})} >
            Sign Up Here
          </Pallete.Button>
        </View>
      </KeyboardAwareScrollView>
    )
  }


}

const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#00c497'
  },
  logo: {
    width: null,
    height: 300,
    resizeMode: 'contain',
    backgroundColor: 'skyblue'
  },
  form: {
    flex: 1,
    width: null,
    height: null,
    marginTop: 0,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 70
  },

});

export default LoginPage
