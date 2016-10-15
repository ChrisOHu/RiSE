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

import ParallaxScrollView from '../common/ParallaxScrollView'

// import Button from './components/Button'
// import AutoComplete from './components/AutoComplete'

class Login extends Component {
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
          Login
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

export default Login

