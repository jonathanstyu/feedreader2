import React, {Component} from 'react';
import {ScrollView, Text, View, Image} from 'react-native';

export default class FeedItemScreen extends Component {
  render() {
    var item = this.props.item;
    return (
      <ScrollView>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.text}</Text>
      </ScrollView>
    )
  }
}
