import React, { Component } from 'react'
import {
  View,
  Animated,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import {
  Text,
  Container
} from 'app/base'

import { ScrollableTabView } from 'app/components/ScrollableTabView'

import theme from "app/themes/default"
import HomeTabBar from 'app/HomeTabBar'
import Events from 'app/events/Events'
import Calendar from 'app/calendar/Calendar'
import Chats from 'app/chats/Chats'
import I from 'app/users/I'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Container theme={theme} style={styles.container} >
        <View style={styles.content} >

          <ScrollableTabView
            initialPage={1}
            tabBarPosition={"bottom"}
            renderTabBar={() => <HomeTabBar />}
            >

            <Events tabLabel="events" style={styles.tabView} />

            <Calendar tabLabel="calendar" style={styles.tabView} />

            <Chats tabLabel="chats" style={styles.tabView} />
            
            <I tabLabel="I" style={styles.tabView} />

          </ScrollableTabView>

        </View>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'skyblue',
    paddingTop: 10
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

export default HomePage
