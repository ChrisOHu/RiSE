import React, { Component } from 'react'
import {
  View,
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'

import Button from './components/Button'
import AutoComplete from './components/AutoComplete'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      account: "",
      // accountHints: ['frozenrain.skyblue@gmail.com', '123 4565 4321'],
      password: ""
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <AutoComplete
          style={{}}
          ref="account"
          data={this.state.accountHints}
          defaultValue={this.state.account}
          onChangeText={text => this.setState({email: text})}
          renderItem={account => (
            <TouchableOpacity onPress={() =>
                this.setState({account: account})
              }
              >
              <Text>{email}</Text>
            </TouchableOpacity>
          )}
          />
        <TextInput
          ref="password"
          style={styles.password}
          secureTextEntry={true}
          />
        <Button
          onPress={() => {
            alert('#TODO: login');
          }}
          >
          Login
        </Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  password: {
    height: 40,
    margin: 10,
    padding: 4,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    backgroundColor: 'white'
  }
});

export default Login
