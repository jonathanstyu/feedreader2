import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

export default routeMapper = {
  LeftButton: function( route, navigator, index, navState ){
  return(
    <TouchableHighlight onPress={route.leftButtonCallback}>
      <Text style={styles.leftButton}>{ route.leftButton }</Text>
    </TouchableHighlight>
  )
  },
  Title: function( route, navigator, index, navState ){
    return(
      <Text style={styles.navigationBarTitle}>{ route.title }</Text>
    )
  },
  RightButton: function( route, navigator, index, navState ){
    return(
      <TouchableHighlight onPress={route.rightButtonCallback}>
        <Text style={styles.rightButton}>{ route.rightButton }</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  navigationBarTitle: {
    color: 'black',
    fontWeight: '500'
  },
  leftButton: {
    paddingLeft: 10
  },
  rightButton: {
    paddingRight: 10
  }
});
