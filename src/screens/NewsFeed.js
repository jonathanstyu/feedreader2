import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView} from 'react-native';

import NewsFeedCell from './NewsFeedCell';

export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      dataSource: ds.cloneWithRows([
        'Row 1',
        "row 2",
        "row 3"
      ])
    }
  }

  render() {
    console.log(this.state.dataSource);
    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
        />
    )
  }

  _renderRow(rowData: string, sectionID: number, rowID: number) {
    return (
      <NewsFeedCell rowData={rowData} />
    )
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
    backgroundColor: '#172A3A',
  },
  separator: {
    backgroundColor: 'black',
    height: StyleSheet.hairlineWidth
  }
})
