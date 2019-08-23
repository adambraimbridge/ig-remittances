/**
 * @file
 * Article-level configuration.
 *
 * @TODO Please ensure this file is filled out before publishing!!!
 */

export default (environment = 'development') => ({
  // link file UUID
  id: environment === 'development' ? '88bade38-c590-11e9-a8e9-296ca66511c9' : '',

  // canonical URL of the published page
  // url below gets filled in by the ./configure script
  url: 'http://www.ft.com/remittances-capital-flow-emerging-markets',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2019-08-28T05:00:00Z'),

  headline: 'Remittances become biggest capital flow into emerging economies',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Growth of migration turns trickle of funds from workers around the world into a flood',

  topic: {
    name: 'Global remittances',
    url: 'https://www.ft.com/stream/c36f737a-91f6-4b69-99de-2124f3dee680',
  },

  relatedArticle: {
    text: 'Related article »',
    url: 'https://en.wikipedia.org/wiki/Esperanto',
  },

  mainImage: {
    title: 'Map of Esperanto groups in Europe in 1905',
    description:
      'Disvastiĝo de Esperanto. Mapo pri Esperanto-grupoj en Eŭropo, farita de la frankfurta grupo, en Germana Esperantisto, marto 1905',
    credit: 'Wikipedia',

    // You can provide a UUID to an image and it was populate everything else
    // uuid: 'c4bf0be4-7c15-11e4-a7b8-00144feabdc0',

    // You can also provide a URL
    url:
      'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3a%2F1905-03-ge-frankf-mapo.jpg?source=ig',
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  bylines: [{ name: 'Author One', url: '/foo/bar' }, { name: 'Author Two' }],

  // Appears in the HTML <title>
  title: '',

  // meta data
  description: '',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary_large_image',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialDescription: '',
  // twitterCreator: '@author's_account', // shows up in summary_large_image cards

  // TWEET BUTTON CUSTOM TEXT
  // tweetText: '',
  //
  // Twitter lists these as suggested accounts to follow after a user tweets (do not include @)
  // twitterRelatedAccounts: ['authors_account_here', 'ftdata'],

  // Fill out the Facebook/Twitter metadata sections below if you want to
  // override the General social options above

  // TWITTER METADATA (for Twitter cards)
  // twitterImage: '',
  // twitterHeadline: '',
  // twitterDescription: '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',
  // facebookDescription: '',

  // ADVERTISING
  ads: {
    // Ad unit hierarchy makes ads more granular.
    gptSite: 'ft.com',
    // Start with ft.com and /companies /markets /world as appropriate to your story
    gptZone: false,
    // granular targeting is optional and will be specified by the ads team
    dfpTargeting: false,
  },

  tracking: {
    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',
    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },

  // If you include a data set, uncomment and fill out the following to
  // surface via Google.
  //
  // See: https://developers.google.com/search/docs/data-types/dataset
  //
  // dataMeta: {
  //   '@context': 'http://schema.org/',
  //   '@type': 'Dataset',
  //   name: '<Name of the dataset>',
  //   description: '<Brief description of the dataset>',
  //   url: '<dataset url>',
  //   sameAs: '<another canonical URL for dataset>',
  //   keywords: [
  //     // Set of strings in the following format:
  //     'ATMOSPHERE > ATMOSPHERIC PHENOMENA > CYCLONES',
  //   ],
  //   creator: {
  //     '@type': 'Organization',
  //     url: '<url of org>',
  //     name: '<name of org>',
  //     contactPoint: {
  //       '@type': 'ContactPoint',
  //       contactType: 'customer service',
  //       telephone: '<source telephone>',
  //       email: '<source email>',
  //     },
  //   },
  //   includedInDataCatalog: {
  //     '@type': 'DataCatalog',
  //     name: '<name of data catalog>',
  //   },
  //   distribution: [
  //     {
  //       '@type': 'DataDownload',
  //       encodingFormat: 'CSV',
  //       contentUrl: '<url of datafile>',
  //     },
  //     {
  //       '@type': 'DataDownload',
  //       encodingFormat: 'XML',
  //       contentUrl: '<url of datafile>',
  //     },
  //   ],
  //   // Dates the dataset covers
  //   temporalCoverage: '<yyyy-mm-dd>/<yyyy-mm-dd>',
  //   // Where the dataset covers. See spec.
  //   spatialCoverage: {
  //     '@type': 'Place',
  //     geo: {
  //       '@type': 'GeoShape',
  //       box: '18.0 -65.0 72.0 172.0',
  //     },
  //   },
  // },
});
