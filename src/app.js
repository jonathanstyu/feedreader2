import React, {Component} from 'react';
import {StyleSheet, Text, Navigator, TouchableHighlight} from 'react-native'

import NewsFeed from './screens/NewsFeed';
import FeedItemScreen from './screens/FeedItemScreen';
import routeMapper from './models/navBarRouteMapper';
import fetchAndParse from './actions/fetch';

export default class App extends Component {
  _renderScene(route, navigator) {
    var ROUTES = {
      feed: NewsFeed,
      feedItemScreen: FeedItemScreen
    }
    var Component = ROUTES[route.component];
    return (
      <Component
        navigator={navigator}
        props={route.passProps}
        />
    )
  }

  render() {
    return (
      <Navigator
        style={styles.navigator}
        renderScene={this._renderScene}
        initialRoute={{
          title: 'feed',
          index: 0,
          component: 'feed',
          rightButton: 'Download',
          rightButtonCallback: () => {
            this._handleLeftButtonPress()
          }
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={routeMapper}
            style={styles.navigationBar}
            />
        }
        />
    )
  }

  _handleLeftButtonPress() {
    fetchAndParse("http://stratechery.com/feed/");
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  },
  navigationBar: {
    backgroundColor: 'white',
    height: 50,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})
