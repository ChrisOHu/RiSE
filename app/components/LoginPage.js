import React, {
  Component,
  PropTypes as T
} from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native'

import Pallete from 'Pallete'

import ParallaxScrollView from 'common/ParallaxScrollView'

import theme from 'themes'
// import Button from './components/Button'
// import AutoComplete from './components/AutoComplete'

class LoginPage extends Component {
  static propTypes = {
    onLoggedIn: T.func
  }
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
      <ParallaxScrollView
        renderBackground={() =>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
        }
        parallaxHeaderHeight={300}
        contentContainerStyle={styles.root}
        style={styles.root} >

        <View style={styles.form} >
          <Pallete.Input style={{marginBottom: 10}}
            icon={{name: "ios-person"}}
            textInput={{placeholder: "Email"}}
            />
          <Pallete.Input style={{marginBottom: 10}}
            icon={{name: "ios-unlock-outline"}}
            textInput={{placeholder: "Password", secureTextEntry: true}}
            />

          <Pallete.Input style={{marginBottom: 20}}
            icon={{name: "ios-unlock-outline"}}
            textInput={{placeholder: "Password", secureTextEntry: true}}
            />

          <Pallete.Button rounded block
            style={{ marginBottom: 10 }}
            onPress={() => this.props.onLoggedIn()}
            text={"Login"}
            />
          <View style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'nowrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: 20,
              paddingRight: 20
            }} >
            <TouchableOpacity style={{marginRight: 5}} >
              <Text style={{fontSize: 12}}>
                Forgot Password ?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{}} >
              <Text style={{fontSize: 12}}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ParallaxScrollView>
    )
  }

}

const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white'
  },
  logo: {
    width: Dimensions.get('window').width,
    height: 300,
    resizeMode: 'contain'
  },
  form: {
    flex: 1,
    marginTop: 0,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 70
  }
});

export default LoginPage
