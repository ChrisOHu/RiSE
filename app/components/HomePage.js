import React, { Component } from 'react'
import {
  View,
  Animated,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import { ScrollableTabView } from 'common/ScrollableTabView'

import Routes from './navigations/Routes'
import theme from 'themes'
import HomeTabBar from './HomeTabBar'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.content} >

        <ScrollableTabView
          initialPage={0}
          tabBarPosition={"bottom"}
          renderTabBar={() => <HomeTabBar />}
          >

          {Routes.navigator({id: 'events'})}
          {Routes.navigator({id: 'explore'})}
          {Routes.navigator({id: 'conversations'})}
          {Routes.navigator({id: 'I'})}

        </ScrollableTabView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  tabView: {
    flex: 1,
    backgroundColor: 'white',
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
