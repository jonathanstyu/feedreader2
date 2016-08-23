import NewsItem from '../models/NewsItem';

var fetchAndParse = function (url) {
  fetch(url)
    .then((response) => {
      return response.text()
    })
    .then((text) => {
      var domparser = require('xmldom').DOMParser;
      var parser = new domparser();
      return parser.parseFromString(text, 'text/xml').documentElement;
    })
    .then((xmlDoc) => {
      var items = xmlDoc.getElementsByTagName('item');
      var parsedItems = []
      for (var i = 0; i < items.length; i++) {
        var item = items[i]

        var itemTitle = item.getElementsByTagName('title')[0].firstChild.data;
        var itemLink = item.getElementsByTagName('link')[0].firstChild.data;
        var itemDescription = item.getElementsByTagName('description')[0].firstChild.data;
        var itemCreator = item.getElementsByTagName('dc:creator')[0].firstChild.data;
        var itemPubDate = item.getElementsByTagName('pubDate')[0].firstChild.data;
        var itemContent = item.getElementsByTagName('content:encoded')[0].firstChild.data;
        var newItem = new NewsItem({
          title: itemTitle,
          creator: itemCreator,
          link: itemLink,
          pubDate: itemPubDate,
          description: itemDescription,
          text: itemContent
        });
        console.log(newItem);
        parsedItems.push(newItem)
      }
    })
    .catch((error) => {
      console.log("error is: " + error);
    })
}

export default fetchAndParse;
