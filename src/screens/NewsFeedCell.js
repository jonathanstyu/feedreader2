import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

import NewsItem from '../models/NewsItem';
import FeedCellText from '../components/FeedCellText';

export default class NewsFeedCell extends Component {
  render() {
    var item = this.props.rowData;
    return (
      <View style={styles.row}>
        <Text style={styles.creatorText}>{item.creator}</Text>
        {
          (() => {
            if (item.heroImage !== "") {
              return <Image style={styles.heroImage} source={{uri: item.heroImage}} />
            }
          })()
        }
        <Text style={styles.titleText}>{item.title}</Text>
        <FeedCellText text={item.description}/>
      </View>
    )
  }
}

const styles = {
  row: {
    padding: 10,
    flexDirection: "column"
  },
  creatorText: {
    paddingBottom: 15
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 17,
    paddingBottom: 15
  },
  heroImage: {
    width: 200,
    height: 200,
    padding: 5
  }
}
