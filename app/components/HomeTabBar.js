import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

const HomeTabBar = React.createClass({
  tabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    tabs: React.PropTypes.array,
    activeTab: React.PropTypes.number,
    scrollValue: React.PropTypes.object,
    containerWidth: React.PropTypes.number
  },

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  },

  setAnimationValue({ value, }) {
    this.tabIcons.forEach((icon, i) => {
      const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      });
    });
  },

  //color between rgb(59,89,152) and rgb(204,204,204)
  iconColor(progress) {
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  },

  render() {
    return (
      <View style={[styles.tabs, this.props.style]}>
        <TouchableOpacity onPress={() => this.props.goToPage(0)} style={styles.tab}>
          <Icon
            name='ios-paper'
            size={30}
            color={this.props.activeTab === 0 ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
            ref={(icon) => { this.tabIcons[0] = icon; }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.goToPage(1)} style={styles.tab}>
          <Icon
            name='ios-paper'
            size={30}
            color={this.props.activeTab === 1 ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
            ref={(icon) => { this.tabIcons[1] = icon; }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.goToPage(2)} style={styles.tab}>
          <Icon
            name='ios-paper'
            size={30}
            color={this.props.activeTab === 2 ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
            ref={(icon) => { this.tabIcons[2] = icon; }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.goToPage(3)} style={styles.tab}>
          <Icon
            name='ios-paper'
            size={30}
            color={this.props.activeTab === 3 ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
            ref={(icon) => { this.tabIcons[3] = icon; }}
          />
        </TouchableOpacity>
      </View>
    )
  },
});

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});

export default HomeTabBar;
