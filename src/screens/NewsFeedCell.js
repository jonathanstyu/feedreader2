import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class NewsFeedCell extends Component {
  render() {
    return (
      <Text style={styles.row}>{this.props.rowData}</Text>
    )
  }
}

const styles = {
  row: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 15,
    color: "#74B3CE"
  }
}
