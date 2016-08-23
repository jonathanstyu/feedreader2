import React, {Component} from 'react';
import {ScrollView, Text, View, Image, StyleSheet} from 'react-native';
import FeedScreenButton from './FeedScreenButton';

export default class FeedItemScreen extends Component {
  _changeFontSize() {
    console.log("new font!");
  }

  render() {
    var item = this.props.props.item;
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          style={styles.scroll}
          >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text>{item.text}</Text>
        </ScrollView>
        <View style={styles.bottomBar}>
          <FeedScreenButton callBack={this._changeFontSize} buttonText={'Font Size Larger'} />
          <FeedScreenButton callBack={this._changeFontSize} buttonText={'Font Size Smaller'} />
          <FeedScreenButton callBack={this._changeFontSize} buttonText={'Share'} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flexDirection: "column",
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    flex: 1
  },
  scroll: {
    padding: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15
  },
  description: {
    fontStyle: 'italic',
    paddingBottom: 15
  },
  bottomBar: {
    paddingLeft: 10,
    paddingRight: 10,
    borderTopColor: "black",
    borderTopWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
