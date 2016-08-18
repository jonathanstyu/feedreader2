var NewsItem = function (options) {
  this.title = options.title || '',
  this.creator = options.creator || '',
  this.pubDate = options.pubDate || new Date(),
  this.link = options.link || '',
  this.description = options.description || '',
  this.text = options.text || '',
  this.heroImage = options.heroImage || ''
}

NewsItem.generateDummyData = function () {
  return [
    new NewsItem({
      title: "The Sports Linchpin",
      creator: "Ben Thompson",
      link: "https://stratechery.com/2016/the-sports-linchpin/",
      pubDate: "Tue, 16 Aug 2016",
      description: "Ratings are down for the Olympics, which could be bad news not only for TV but industries everywhere.",
      text: "<p>The London comparison has been a tough one for NBC, at least in the ratings department. Even with the benefit of showing Usain Bolt live in prime time for the first time, NBC&#8217;s <a href=\"http://www.sportsmediawatch.com/2016/08/olympics-ratings-down-nbc-rio-viewership-bolt-biles/\">Sunday night telecast</a> earned a 14.9 rating and 26.7 million viewers, down from a 17.5 rating and 31.3 million viewers for the same night four years ago, and a 16.0 rating and 27.2 million for the Beijing Olympics eight years ago. In fact, it was the lowest rated middle Sunday since 1984 (the addition of streaming and alternate channels improved the numbers somewhat, but they were still less than either of the last two Olympics); nearly every night of coverage has seen similar declines, resulting in an average of 17% fewer viewers than four years ago.</p>",
      heroImage: "https://stratechery.com/wp-content/uploads/2016/07/Screen-Shot-2016-07-13-at-4.17.47-AM-853x1024.png"
    }),
    new NewsItem({
      title: "Walmart and the Multichannel Trap",
      creator: "Ben Thompson",
      link: "https://stratechery.com/2016/walmart-and-the-multichannel-trap/",
      description: "<![CDATA[Walmart wasted years trying to retrofit their model to ecommerce. Buying Jet.com will give them a better chance, but it's almost certainly too late to compete with Amazon.]]>",
      text: '<p>No other retailer, he said, offers customers as much under one roof: insurance and other financial services, Sears&#8217\; own credit-card operation, with more than 28 million customers, and a nationwide repair network to service merchandise. </p></blockquote><p>Twenty-five years later the solipsism of Buldak&#8217;s statement remains remarkable, especially since Sears&#8217\; demise had been set in motion 29 years earlier.</p>'
    })
  ]
}

export default NewsItem;
