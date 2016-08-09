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
import GiftedSpinner from 'common/GiftedSpinner'
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
    setTimeout(() => {
      var rows = {
        [`Section ${page}`]: [
          'row '+((page - 1) * 3 + 1),
          'row '+((page - 1) * 3 + 2),
          'row '+((page - 1) * 3 + 3)
        ]
      };
      if (page === 3) {
        callback(rows, {
          allLoaded: true, // the end of the list is reached
        });
      } else {
        callback(rows);
      }
    }, 200); // simulating network fetching
  }

  _onPress(rowData) {
  }

  _renderRowView(rowData) {
    return (
      <TouchableHighlight
        key={rowData}
        style={styles.row}
        underlayColor='#c8c7cc'
        onPress={() => this._onPress(rowData)}
      >
        {/*<EventCard theme={theme} />*/}
        <Text>{rowData}</Text>
      </TouchableHighlight>
    );
  }

  _renderSectionHeaderView(sectionData, sectionID) {
    return (
      <View style={styles.header} key={sectionID}>
        <Text style={styles.headerTitle}>
          {sectionID}
        </Text>
      </View>
    );
  }

  /**
   * Render the pagination view when waiting for touch
   * @param {function} paginateCallback The function to call to load more rows
   */
  _renderPaginationWaitingView(paginateCallback) {
    return (
      <TouchableHighlight
        key="paginationWaitingView"
        underlayColor='#c8c7cc'
        onPress={paginateCallback}
        style={styles.paginationView}
      >
        <Text style={[styles.actionsLabel, {fontSize: 13}]}>
          Load more
        </Text>
      </TouchableHighlight>
    );
  }

  /**
   * Render the pagination view when fetching
   */
  _renderPaginationFetchigView() {
    return (
      <View key="paginationFetchigView" style={styles.paginationView}>
        <GiftedSpinner />
      </View>
    );
  }

  /**
   * Render the pagination view when end of list is reached
   */
  _renderPaginationAllLoadedView() {
    return (
      <View key="paginationAllLoadedView" style={styles.paginationView}>
        <Text style={styles.actionsLabel}>
          ~
        </Text>
      </View>
    );
  }

  /**
   * Render a view when there is no row to display at the first fetch
   * @param {function} refreshCallback The function to call to refresh the listview
   */
  _renderEmptyView(refreshCallback) {
    return (
      <View style={styles.defaultView}>
        <Text style={styles.defaultViewTitle}>
          Sorry, there is no content to display
        </Text>

        <TouchableHighlight
          underlayColor='#c8c7cc'
          onPress={refreshCallback}
        >
          <Text>
            ↻
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  /**
   * Render a separator between rows
   */
  _renderSeparatorView(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View key={`${sectionID}-${rowID}`} style={styles.separator} />
    );
  }

  render() {
    return (
      <View style={[styles.content, this.props.style]}>
        <GiftedListView
          rowView={this._renderRowView}
          onFetch={this._onFetch}
          firstLoader={true}

          pagination={true}
          paginationFetchigView={this._renderPaginationFetchigView}
          paginationAllLoadedView={this._renderPaginationAllLoadedView}
          paginationWaitingView={this._renderPaginationWaitingView}

          refreshable={true}
          refreshableViewHeight={50}
          // the distance to trigger the pull-to-refresh
          refreshableDistance={40}

          emptyView={this._renderEmptyView}

          renderSeparator={this._renderSeparatorView}

          withSections={true}
          sectionHeaderView={this._renderSectionHeaderView}

          PullToRefreshViewAndroidProps={{
            colors: ['#fff'],
            progressBackgroundColor: '#003e82'
          }}

          refreshableTintColor="blue"

          rowHasChanged={(r1, r2) => {
            return r1.id !== r2.id
          }}
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
  },
  header: {
    backgroundColor: '#50a4ff',
    padding: 10
  },
  headerTitle: {
    color: '#fff'
  },
  separator: {
    height: 1,
    backgroundColor: '#CCC'
  },
  actionsLabel: {
    fontSize: 20,
    color: '#007aff'
  },
  paginationView: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  defaultView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  defaultViewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15
  }
});

export default createContainer(params => {
  return {
    events: []
  }
}, Events)
