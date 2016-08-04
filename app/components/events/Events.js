import React, {
  PropTypes as T,
  Component
} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import GiftedListView from 'common/GiftedListView'
import ToolBar from './ToolBar'
import EventCard from './EventCard'
import theme from 'app/themes/default'

import Meteor, { createContainer } from 'react-native-meteor'

class Events extends Component {
  static propTypes = {
    events: T.array
  }
  static defaultProps = { }

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  _onFetch(page = 1, callback, options) {
    console.debug(page);
    setTimeout(() => {
      var rows = ['row '+((page - 1) * 3 + 1), 'row '+((page - 1) * 3 + 2), 'row '+((page - 1) * 3 + 3)];
      if (page === 3) {
        callback(rows, {
          allLoaded: true, // the end of the list is reached
        });
      } else {
        callback(rows);
      }
    }, 1000); // simulating network fetching
  }

  _onPress(rowData) {
    console.log(rowData + ' pressed');
  }

  _renderRowView(rowData) {
    console.debug(rowData);
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor='#c8c7cc'
        onPress={() => this._onPress(rowData)}
      >
        <EventCard theme={theme} />
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={[styles.content, this.props.style]}>
        <ToolBar />
        <GiftedListView
          rowView={this._renderRowView}
          onFetch={this._onFetch}
          firstLoader={true}
          pagination={true}
          refreshable={true}
          withSections={false}
          customStyles={{
            paginationView: {
              backgroundColor: '#5ae',
            }
          }}
          refreshableTintColor="blue"
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  row: {
    padding: 10,
    height: 44
  }
});

export default createContainer(params => {
  return {
    events: []
  }
}, Events)
