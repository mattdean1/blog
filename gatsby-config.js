module.exports = {
  // Config
  siteMetadata: {
    author: 'Matt Dean',
    title: 'Some Posts by Matt Dean',
  },
  pathPrefix: '/blog',
  plugins: [
    // Plugins
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-104915018-1',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography-config.js',
      },
    },
    'gatsby-plugin-favicon',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    // Source plugins
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    // Transformer plugins
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
  ],
}
