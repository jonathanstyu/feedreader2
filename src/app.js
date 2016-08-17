import React, {Component} from 'react';
import {StyleSheet, Text, NavigatorIOS} from 'react-native'

import NewsFeed from './screens/NewsFeed';

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{
          component: NewsFeed,
          title: "Feed",
          leftButtonTitle: "Subs",
          onLeftButtonPress: () => this._handleLeftButtonPress(),
        }}
        />
    )
  }

  _handleLeftButtonPress() {

  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});
