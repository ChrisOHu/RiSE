import React, {
  Component,
  PropTypes as T
} from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native'

import {
  Container,
  Header,
  Title,
  Content,
  View as NbView,
  Text as NbText,
  Button,
  Icon,
  InputGroup,
  Input
} from 'native-base'

import { KeyboardAwareScrollView } from '~/app/common/KeyboardAwareViews'
import ParallaxScrollView from '~/app/common/ParallaxScrollView'

const window = Dimensions.get('window')

// import Button from './components/Button'
// import AutoComplete from './components/AutoComplete'

class Login extends Component {
  static propTypes = {
    theme: T.object.isRequired
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
    const { theme } = this.props

    return (
      <ParallaxScrollView
        style={styles.root}
        contentContainerStyle={[{flex: 1, backgroundColor: theme.sceneBgColor }]} 
        backgroundColor="transparent"
        renderScrollComponent={ props => <KeyboardAwareScrollView {...props} /> }
        renderBackground={() => {
          {/*return <Image source={require('./assets/logo.png')} resizeMode='contain' style={styles.logo} />*/}
          return (
            <View style={[styles.header, { backgroundColor: theme.sceneBgColor }]} >
              <Text style={{color: 'skyblue', lineHeight: 40, fontSize: 36, fontWeight: 'bold'}}>{`</>`}</Text>
            </View>
          )
        }}
        renderForeground={() => null}
        parallaxHeaderHeight={200} >

        <NbView theme={theme} style={[styles.content, { padding: theme.contentPadding, backgroundColor: theme.sceneBgColor }]} >
          <InputGroup borderType="underline" >
            <Icon name="ios-call" style={{color: 'black'}} /> 
            <Input ref="inputPhone"
              placeholder="Phone" returnKeyType="next"
              onSubmitEditing={() => this.refs.inputPassword.focus()}
            />
          </InputGroup>
          <InputGroup borderType="underline"
            style={{
              marginBottom: 50
            }}
          >
            <Icon name="ios-eye" style={{color: 'black'}} /> 
            <Input ref="inputPassword"
              placeholder="Password" secureTextEntry={true} returnKeyType="done"
            />
          </InputGroup>

          <Button block rounded >Login</Button>
        </NbView>

      </ParallaxScrollView>
    )
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    overflow: 'hidden'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: 200
  },
  content: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 20,
    height: window.height - 200,
    alignItems: 'center'
  }
});

export default Login

