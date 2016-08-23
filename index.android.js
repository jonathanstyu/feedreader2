import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/app';

class feedReader2 extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('feedReader2', () => feedReader2);
