import React, { Component } from 'react'
import {
  View,
  Animated,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import {
  Text,
  Container
} from 'app/components/base'

import theme from "app/themes/default"
import ScrollableTabView from 'app/components/ScrollableTabView'
import HomeTabBar from 'app/HomeTabBar'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Container theme={theme} style={styles.container} >
        <View style={{styles.content}}>

          <ScrollableTabView
            initialPage={1}
            tabBarPosition={"bottom"}
            renderTabBar={() => <HomeTabBar />}
            >

            <ScrollView tabLabel="events" style={styles.tabView}>
              <View style={styles.card}>
                <Text>Events</Text>
              </View>
            </ScrollView>

            <ScrollView tabLabel="calendar" style={styles.tabView}>
              <View style={styles.card}>
                <Text>Calendar</Text>
              </View>
            </ScrollView>

            <ScrollView tabLabel="contacts" style={styles.tabView}>
              <View style={styles.card}>
                <Text>Calendar</Text>
              </View>
            </ScrollView>

            <ScrollView tabLabel="chats" style={styles.tabView}>
              <View style={styles.card}>
                <Text>Chats</Text>
              </View>
            </ScrollView>

            <ScrollView tabLabel="me" style={styles.tabView}>
              <View style={styles.card}>
                <Text>Me</Text>
              </View>
            </ScrollView>

          </ScrollableTabView>

        </View>
      </Container>
    );
  }

}

const styles = StyleSheet.creat({
  content: {
    backgroundColor: 'skyblue'
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  }
});

export default Home
