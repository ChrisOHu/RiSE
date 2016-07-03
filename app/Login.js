import React, { Component } from 'react'
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet
} from 'react-native'

import {
  Container,
  Content,
  Text,
  InputGroup,
  Input,
  Button,
  Icon,
  View
} from 'app/base'

// import Button from './components/Button'
// import AutoComplete from './components/AutoComplete'

class Login extends Component {
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
      <Container>
        <Content style={{backgroundColor: '#384850'}} theme={theme}>
          <Image source={require('./assets/glow2.png')} style={styles.container}>
            <Image source={require('./assets/logo.png')} style={styles.shadow}>
              <View style={styles.bg}>
                <InputGroup style={{marginBottom: 20}}>
                  <Icon name="ios-person" />
                  <Input placeholder="EMAIL" />
                </InputGroup>
                <InputGroup style={{marginBottom: 10}}>
                  <Icon name="ios-unlock-outline" />
                  <Input
                    placeholder="PASSWORD"
                    secureTextEntry={true}
                    />
                </InputGroup>
                <Button transparent style={{alignSelf: 'flex-end',  marginBottom: (Platform.OS === 'ios' ) ? 10 : 0, marginTop: (Platform.OS === 'ios' ) ? -10 : 0}}>
                  <Text>
                    Forgot Password
                  </Text>
                </Button>
                <Button rounded block style={{marginBottom: 10}} onPress={() => this.replaceRoute('home')}>
                  Login
                </Button>
                <Button transparent style={{alignSelf: 'center'}} onPress={() => this.pushNewRoute('signUp')}>
                  <Text>
                    Sign Up Here
                  </Text>
                </Button>
              </View>
            </Image>
          </Image>
        </Content>
      </Container>
    )
  }


}

const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    shadow: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'transparent'
    },
    bg: {
        flex: 1,
        marginTop: (deviceHeight/2)-15,
        backgroundColor: '#00c497',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 70
    },

});

const theme = {
  brandPrimary : "#fff",
  brandInfo: "#5bc0de",
  brandSuccess: "#5cb85c",
  brandDanger: "#d9534f",
  brandWarning: "#f0ad4e",
  brandSidebar: "#252932",

  inverseTextColor: "#00c497",
  textColor: "#fff",

  fontSizeBase: 15,

  get fontSizeH1 () {
    return this.fontSizeBase*1.8;
  },
  get fontSizeH2 () {
    return this.fontSizeBase* 1.6;
  },
  get fontSizeH3 () {
    return this.fontSizeBase* 1.4;
  },
  get btnTextSize () {
    return this.fontSizeBase* 1.1;
  },
  get btnTextSizeLarge () {
    return this.fontSizeBase* 1.5;
  },
  get btnTextSizeSmall () {
    return this.fontSizeBase* .8;
  },
  get iconSizeLarge () {
    return this.iconFontSize* 1.5;
  },
  get iconSizeSmall () {
    return this.iconFontSize* .6;
  },

  borderRadiusBase: 4,

  get borderRadiusLarge () {
    return this.fontSizeBase* 3.8;
  },

  footerHeight: 55,
  toolbarHeight: (Platform.OS === 'ios' ) ? 70 : 55,
  toolbarDefaultBg: "#4563ED",
  toolbarInverseBg: "#222",

  get btnPrimaryBg () {
    return this.brandPrimary;
  },
  get btnPrimaryColor () {
    return this.inverseTextColor;
  },
  get btnSuccessBg () {
    return this.brandSuccess;
  },
  get btnSuccessColor () {
    return this.inverseTextColor;
  },
  get btnDangerBg () {
    return this.brandDanger;
  },
  get btnDangerColor () {
    return this.inverseTextColor;
  },
  get btnInfoBg () {
    return this.brandInfo;
  },
  get btnInfoColor () {
    return this.inverseTextColor;
  },
  get btnWarningBg () {
    return this.brandWarning;
  },
  get btnWarningColor () {
    return this.inverseTextColor;
  },

  borderWidth: 0.5,

  get inputColor () {
    return this.textColor;
  },
  get inputColorPlaceholder () {
    return 'rgba(255, 255, 255, 1.0)';
  },
  inputBorderColor: "#fff",
  inputHeightBase: 40,
  inputGroupMarginBottom: 30,
  inputPaddingLeft: 5,
  get inputPaddingLeftIcon () {
    return this.inputPaddingLeft* 8;
  }
}

export default Login
