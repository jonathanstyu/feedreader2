import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';

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
                return <Image style={{
                    height: 150,
                    width: Dimensions.get('window').width - 25
                  }} source={{uri: item.heroImage}}
                  resizeMode={'contain'}
                   />
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
    flexDirection: "column",
  },
  creatorText: {
    paddingBottom: 15
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 17,
    paddingBottom: 15
  }
}
