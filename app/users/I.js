import React, {
  Component,
  PropTypes as T
} from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native'
import ParallaxScrollView from 'app/components/ParallaxScrollView'
import { KeyboardAwareScrollView } from 'app/components/KeyboardAwareViews'
import { createConainter } from 'react-native-meteor'
import ToolBar from './ToolBar'
import theme from 'app/themes/default'

class I extends Component {
  static propTypes = {
    i: T.object.isRequired
  }
  static defaultProps = { }

  constructor() {
    super(props)

    this.state = {
      width: Dimensions.get('window').width,
      parallaxHeaderHeight: 350,
      avatarSize: 120
    }
  }

  render() {
    return (
      <ParallaxScrollView
        ref="scrollView"
        style={styles.root}
        onScroll={() => {}}
        headerBackgroundColor={ theme.toolbarDefaultBg }
        stickyHeaderHeight={ theme.toolbarHeight }
        parallaxHeaderHeight={ this.state.parallaxHeaderHeight }
        backgroundSpeed={ 10 }
        renderStickyHeader={() => (
          <View style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{this.props.i.profile.name}</Text>
          </View>
        )}
        renderFixedHeader={() => (
          <View style={styles.fixedHeader}>
            <Text style={styles.fixedHeaderText}
              onPress={() => this.refs.scrollView.scrollTo({ x: 0, y: 0 })} >
              Go2Top
            </Text>
          </View>
        )}
        renderBackground={() => (
          <View>
            <Image source={{
                uri: this.props.i.profile.cover
                width: this.state.width,
                height: this.state.parallaxHeaderHeight
              }} />
            <View style={{
                position: 'absolute',
                top: 0,
                width: this.state.width,
                height: this.state.parallaxHeaderHeight,
                backgroundColor: 'rgba(0, 0, 0, .4)'
              }} />
          </View>
        )}
        renderForeground={() => (
          <View style={ styles.parallaxHeaderForeground }>
            <Image style={ styles.avatar }
              source={{
                uri: this.props.i.profile.avatar,
                width: this.state.avatarSize,
                height: this.state.avatarSize
              }} />
            <Text style={ styles.profileName }> {this.props.i.profile.name} </Text>
            <Text style={ styles.status }> {this.props.i.profile.status} </Text>
          </View>
        )} >

        <View style={{ flex: 1, alignItems: 'center' }}><Text style={{ fontSize: 30 }}>Meow!</Text></View>

      </ParallaxScrollView>
    )
    // return (
    //   <KeyboardAwareScrollView style={[styles.content, this.props.style]}>
    //     <View style={styles.card}>
    //       <Text>Events</Text>
    //     </View>
    //   </KeyboardAwareScrollView>
    // );
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'hotpink',
    overflow: 'hidden'
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedHeader: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedHeaderText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeaderForeground: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  avatar: {
    marginBottom: 10,
    borderRadius: 100
  },
  profileName: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  status: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  }
});

export default I
