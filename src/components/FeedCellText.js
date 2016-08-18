import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

export default class FeedCellText extends Component {
  render() {
    return (
      <Text style={styles.text}
        numberOfLines={2}
        >{this.props.text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontStyle: 'italic',
    fontFamily: 'Helvetica'
  }
})
