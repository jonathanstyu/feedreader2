import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform, TouchableHighlight, TouchableNativeFeedback} from 'react-native';

export default class FeedScreenButton extends Component {
  _buttonClicked() {
    this.props.callBack(this);
  }

  render() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === "Android") {
      TouchableElement = TouchableNativeFeedback;
    }

    return (
      <TouchableElement style={styles.button} onPress={this._buttonClicked.bind(this)}>
        <Text style={styles.buttonText}>{this.props.buttonText}</Text>
      </TouchableElement>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
    borderRadius: 35
  },
  buttonText: {
    fontWeight: 'bold'
  }
})
