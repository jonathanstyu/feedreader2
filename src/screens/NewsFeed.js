import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView, TouchableHighlight} from 'react-native';

import NewsFeedCell from './NewsFeedCell';
import NewsItem from '../models/NewsItem';
import FeedItemScreen from './FeedItemScreen'

export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    // In constructor, you need to explicitly bind a function, if you want to pass it to any react component, as sometimes it doesn't bind implicitly.
    this._renderRow = this._renderRow.bind(this);
    this._pressRow = this._pressRow.bind(this);
    this.state = {
      newsItems: NewsItem.generateDummyData(),
      dataSource: ds.cloneWithRows(NewsItem.generateDummyData())
    }
  }

  render() {
    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
        />
    )
  }

  _renderRow(rowData: NewsItem, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight onPress={() => {
        this._pressRow(sectionID, rowID);
        }}>
        <View>
          <NewsFeedCell rowData={rowData} />
        </View>
      </TouchableHighlight>
    )
  }

  _pressRow(sectionID: number, rowID: number) {
    var item = this.state.newsItems[rowID];
    this.props.navigator.push({
      component: FeedItemScreen,
      title: item.title,
      passProps: {item: item}
    })
  }

  _renderSeparator(sectionID: number, rowID: number) {
    return (
      <View
        key={`${sectionID}+${rowID}`}
        style={styles.separator}
        />
    )
  }
}

const styles = StyleSheet.create({
  listView: {
    // backgroundColor: '#172A3A',
    backgroundColor: "white"
  },
  separator: {
    backgroundColor: 'black',
    height: StyleSheet.hairlineWidth
  }
})
