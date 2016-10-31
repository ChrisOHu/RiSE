import React, { Component } from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Text style={styles.content} >
        Home
      </Text>
    );
  }

}

const styles = StyleSheet.create({
  content: {
    flex: 1
  }
});

export default Home

