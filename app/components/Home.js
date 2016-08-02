import React, { Component } from 'react'
import {
  View,
  Animated,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import Pallete from 'Pallete'

import { ScrollableTabView } from 'common/ScrollableTabView'

import theme from "app/themes/default"
import HomeTabBar from './HomeTabBar'
import Events from './events/Events'
import Calendar from './calendar/Calendar'
import Chats from './chats/Chats'
import I from './users/I'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Pallete.Container theme={theme} style={styles.container} >
        <View style={styles.content} >

          <ScrollableTabView
            initialPage={0}
            tabBarPosition={"bottom"}
            renderTabBar={() => <HomeTabBar />}
            >

            <Events tabLabel="events" style={styles.tabView} />

            <Calendar tabLabel="calendar" style={styles.tabView} />

            <Chats tabLabel="chats" style={styles.tabView} />

            <I tabLabel="I" style={styles.tabView} />

          </ScrollableTabView>

        </View>
      </Pallete.Container>
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
